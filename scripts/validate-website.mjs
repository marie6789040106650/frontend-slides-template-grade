#!/usr/bin/env node
import { existsSync, readFileSync, statSync, readdirSync } from 'node:fs';
import path from 'node:path';

const target = process.argv[2];
const websiteGrade = process.argv.includes('--website-grade');
const requireSurface = process.argv.includes('--require-surface') || websiteGrade;

if (!target) {
  console.error('Usage: node scripts/validate-website.mjs <file-or-directory> [--website-grade] [--require-surface]');
  process.exit(2);
}

if (!existsSync(target)) {
  console.error(`Target not found: ${target}`);
  process.exit(2);
}

const errors = [];
const warnings = [];

function walk(dir) {
  const out = [];
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = statSync(target).isDirectory() ? walk(target) : [target];
if (!files.length) errors.push('No HTML files found.');

const placeholderPatterns = [
  /\bTODO\b/i,
  /\bLorem\b/i,
  /Image Placeholder/i,
  /Generic placeholder/i,
  /\[(?:Topic|Year|Author Name|Client Name|Presentation Title|Source|Company|Project|Price|Date)\]/i,
];

let totalSurfaces = 0;
let totalSections = 0;
let totalPrimaryCtas = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const htmlNoComments = html.replace(/<!--[\s\S]*?-->/g, '');
  const rel = path.relative(process.cwd(), file) || file;

  placeholderPatterns.forEach((pattern) => {
    if (pattern.test(htmlNoComments)) errors.push(`${rel}: visible placeholder residue found: ${pattern}`);
  });

  const hrefHashes = [...htmlNoComments.matchAll(/<a\b[^>]*href="#"/g)];
  if (hrefHashes.length) warnings.push(`${rel}: found ${hrefHashes.length} href="#" link(s).`);

  const javascriptVoid = [...htmlNoComments.matchAll(/<a\b[^>]*href="javascript:void\(0\)"/gi)];
  if (javascriptVoid.length) warnings.push(`${rel}: found ${javascriptVoid.length} javascript:void(0) link(s).`);

  const dataSections = [...htmlNoComments.matchAll(/\bdata-section="([^"]+)"/g)].map((m) => m[1]);
  const dataSurfaces = [...htmlNoComments.matchAll(/\bdata-surface="([^"]+)"/g)].map((m) => m[1]);
  totalSections += dataSections.length;
  totalSurfaces += dataSurfaces.length;

  if (websiteGrade && !dataSections.length) {
    warnings.push(`${rel}: no data-section attributes found. Website-grade samples should register section jobs.`);
  }

  const ctaMatches = [...htmlNoComments.matchAll(/<(?:a|button)\b[^>]*(?:class="[^"]*(?:cta|button|btn|primary)[^"]*"|data-cta="[^"]+")[^>]*>/gi)];
  totalPrimaryCtas += ctaMatches.length;
  if (websiteGrade && !ctaMatches.length) {
    warnings.push(`${rel}: no obvious CTA element found.`);
  }

  const imgTags = [...htmlNoComments.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  imgTags.forEach((tag, idx) => {
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1] ?? '';
    const alt = tag.match(/\balt="([^"]*)"/)?.[1];
    const isContentImage = !src.startsWith('data:') && !/logo|icon|avatar|favicon/i.test(src);
    if (isContentImage && alt === undefined) {
      errors.push(`${rel}: image ${idx + 1} missing alt.`);
    }
  });

  if (/overflow-x\s*:\s*scroll|width\s*:\s*100vw/i.test(htmlNoComments)) {
    warnings.push(`${rel}: contains overflow-x:scroll or width:100vw. Verify mobile has no horizontal overflow.`);
  }

  if (/<form\b/i.test(htmlNoComments)) {
    const hasState =
      /aria-invalid|data-state="(?:error|success|loading|disabled)"|disabled|required|role="alert"|error|success/i.test(htmlNoComments);
    if (!hasState) warnings.push(`${rel}: form present but no obvious validation/loading/success state.`);
  }

  if (/pricing|price|plan/i.test(htmlNoComments) && !/refund|cancel|limit|support|included|billing|trial/i.test(htmlNoComments)) {
    warnings.push(`${rel}: pricing/plan language found without obvious limits, refund, cancellation, billing, or support boundary.`);
  }
}

if (requireSurface && totalSurfaces === 0) {
  errors.push('No data-surface attributes found. Website-grade samples need at least one inspectable surface.');
}

if (websiteGrade && totalPrimaryCtas === 0) {
  errors.push('No primary CTA detected across checked pages.');
}

if (warnings.length) {
  console.warn('Warnings:');
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error('Website validation failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Website validation passed: ${files.length} file(s), ${totalSections} section(s), ${totalSurfaces} surface(s).`);
