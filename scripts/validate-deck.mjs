#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const file = process.argv[2];
const templateGrade = process.argv.includes('--template-grade');
const lockedLayout = process.argv.includes('--locked-layout');

if (!file) {
  console.error('Usage: node scripts/validate-deck.mjs <index.html> [--template-grade] [--locked-layout]');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const htmlNoComments = html.replace(/<!--[\s\S]*?-->/g, '');
const errors = [];
const warnings = [];

const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlNoComments.matchAll(slideRe)].map((match, idx) => ({
  idx: idx + 1,
  html: match[0],
  tag: match[0].match(/<section\b[^>]*>/)?.[0] ?? '',
}));

if (!slides.length) errors.push('No <section class="slide"> pages found.');

const placeholderPatterns = [
  /\bTODO\b/i,
  /\bLorem\b/i,
  /Image Placeholder/i,
  /Generic placeholder/i,
  /\[(?:Topic|Year|Author Name|Client Name|Presentation Title|Source|Company|Project)\]/i,
];

placeholderPatterns.forEach((pattern) => {
  if (pattern.test(htmlNoComments)) errors.push(`Visible placeholder residue found: ${pattern}`);
});

if (/href="#"/.test(htmlNoComments)) {
  warnings.push('Found href="#". Confirm these are not meaningful navigation links.');
}

const layoutCounts = new Map();
slides.forEach((slide) => {
  const layout = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];
  if (layout) layoutCounts.set(layout, (layoutCounts.get(layout) ?? 0) + 1);

  if ((templateGrade || lockedLayout) && !layout) {
    errors.push(`Slide ${slide.idx}: missing data-layout.`);
  }

  if (!/class="[^"]*\bslide\b[^"]*"/.test(slide.tag)) {
    errors.push(`Slide ${slide.idx}: section tag does not include class="slide".`);
  }

  if (/<img\b/.test(slide.html)) {
    const imgTags = [...slide.html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
    imgTags.forEach((tag, imageIdx) => {
      const src = tag.match(/\bsrc="([^"]+)"/)?.[1] ?? '';
      const isLocalContentImage = /^(?:\.\/)?images\//.test(src);
      const alt = tag.match(/\balt="([^"]*)"/)?.[1];

      if (alt === undefined) {
        errors.push(`Slide ${slide.idx}: image ${imageIdx + 1} missing alt.`);
      }

      if ((templateGrade || lockedLayout) && isLocalContentImage && !/\bdata-image-slot="/.test(tag)) {
        errors.push(`Slide ${slide.idx}: local image ${imageIdx + 1} missing data-image-slot.`);
      }
    });
  }

  if (/overflow\s*:\s*auto|overflow-y\s*:\s*scroll/i.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: slide content appears scrollable. Split content instead.`);
  }
});

if (templateGrade && slides.length && slides.length < 8) {
  errors.push(`Template-grade deck has ${slides.length} slides; expected at least 8 unless explicitly constrained.`);
}

if (templateGrade || lockedLayout) {
  const distinctLayouts = layoutCounts.size;
  if (slides.length >= 8 && distinctLayouts < 6) {
    warnings.push(`Only ${distinctLayouts} distinct layout id(s) across ${slides.length} slides. Template-grade decks should usually use 6+.`);
  }

  for (let i = 0; i < slides.length - 2; i += 1) {
    const a = slides[i].tag.match(/\bdata-layout="([^"]+)"/)?.[1];
    const b = slides[i + 1].tag.match(/\bdata-layout="([^"]+)"/)?.[1];
    const c = slides[i + 2].tag.match(/\bdata-layout="([^"]+)"/)?.[1];
    if (a && a === b && b === c) {
      warnings.push(`Slides ${i + 1}-${i + 3}: same layout id "${a}" repeated three times.`);
    }
  }
}

if (warnings.length) {
  console.warn('Warnings:');
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error('Deck validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Deck validation passed: ${slides.length} slide(s), ${layoutCounts.size} layout id(s).`);
