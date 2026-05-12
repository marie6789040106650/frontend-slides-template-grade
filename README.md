# Frontend Slides Template Grade

An enhanced Codex/Claude-compatible skill for creating high-completion HTML slide decks, reusable deck templates, public template galleries, and website samples translated from presentation/template aesthetics.

This repository is based on the open-source project [`zarazhangrui/frontend-slides`](https://github.com/zarazhangrui/frontend-slides), which is MIT licensed. This enhanced version keeps the original zero-dependency HTML presentation workflow, adds stricter PPT/template production guardrails, and extends the skill into website-grade generation and design judgment.

The template-library completion bar is inspired by [`zarazhangrui/beautiful-html-templates`](https://github.com/zarazhangrui/beautiful-html-templates). The PPT production guardrail ideas are also informed by [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill), especially locked layout thinking, image slots, and validator-style checks. This project borrows those production methods, not their exact visual styles.

Live gallery used while validating this upgrade:

https://templates.inkblocklab.com/

## What Changed

- Added **template-grade mode** for reusable deck templates, public galleries, premium samples, and website-style variants.
- Added **website-grade mode** for translating deck/template styles into real websites.
- Added **design judgment and feedback-loop files** for scoring, verification, color strategy, mature reference patterns, and repeated improvement.
- Added **PPT production guardrails**: layout registry, `data-layout`, template-owned class vocabulary, image slots, rhythm planning, P0 failure rules, and a deck validator.
- Added **website production guardrails**: page/section registry, `data-section`, inspectable `data-surface`, honest navigation, state coverage, trust boundaries, and a website validator.
- Added `TEMPLATE_GRADE.md`, a stricter completion standard for authored demo decks.
- Added `WEBSITE_GRADE.md`, a feedback-loop standard for SaaS, docs, event, editorial/report, service, ecommerce, course, marketplace, dashboard, community, travel, food-ordering, and other website archetypes.
- Expanded the skill trigger description so it applies to template libraries and high-completion HTML samples, not only ordinary presentations.
- Added a production checklist for:
  - 8-12 slide demo decks
  - realistic sample copy
  - no unresolved placeholders
  - distinct layout families per preset
  - layout ids and image slots
  - screenshots or purpose-built thumbnails
  - product/content/workflow surfaces for websites
  - CTA, state, policy, and support paths
  - deployed URL checks
  - custom-domain checks
- Clarified that gallery previews must show real visual grammar, not plain gradient title cards.

## Based On

Primary upstream:

- [`zarazhangrui/frontend-slides`](https://github.com/zarazhangrui/frontend-slides)
  - Original purpose: create beautiful zero-dependency HTML presentations from scratch or from PowerPoint files.
  - License: MIT

Quality reference:

- [`zarazhangrui/beautiful-html-templates`](https://github.com/zarazhangrui/beautiful-html-templates)
  - Used as the completion benchmark for template-library polish, authored sample content, and gallery-ready previews.
  - License: MIT

Production-method reference:

- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill)
  - Used as a reference for production guardrails: locked layout discipline, image slots, visual/code checklists, and validator-style quality gates.
  - This repository does not copy its two visual systems or local golden-source assumptions.

## Included Files

| File | Purpose |
| --- | --- |
| `SKILL.md` | Main skill workflow and trigger rules |
| `TEMPLATE_GRADE.md` | High-completion template/gallery standard |
| `WEBSITE_GRADE.md` | Website translation and feedback-loop standard |
| `PPT_PRODUCTION_GUARDRAILS.md` | PPT layout registry, class-source, image-slot, rhythm, and P0 guardrails |
| `IMAGE_SLOT_GUIDE.md` | Image slots, ratios, crop rules, generated image rules, and gallery thumbnail checks |
| `WEB_PRODUCTION_GUARDRAILS.md` | Website section registry, navigation, state, responsive, and validator guardrails |
| `SURFACE_SLOT_GUIDE.md` | Website product/content/workflow surface slots and archetype defaults |
| `DESIGN_JUDGMENT.md` | Design judgment framework for intent, hierarchy, evidence, task proximity, and polish |
| `DESIGN_SCORECARD.md` | 100-point scorecard and hard caps |
| `DESIGN_VERIFICATION.md` | Screenshot, source, deck, website, and gallery verification protocol |
| `DESIGN_REFERENCE_CASES.md` | Archetype-specific mature patterns and upgrade moves |
| `MATURE_WEBSITE_PATTERNS.md` | Reusable patterns from mature websites without copying brand dress |
| `COLOR_STRATEGY.md` | Color roles, hue relationships, contrast, and palette audits |
| `FEEDBACK_LOOP.md` | Skill-first generate/score/improve/verify/update protocol |
| `STYLE_PRESETS.md` | 12 curated visual directions |
| `viewport-base.css` | Mandatory viewport-safe base CSS |
| `html-template.md` | HTML architecture and JS expectations |
| `animation-patterns.md` | Animation guidance |
| `scripts/validate-deck.mjs` | Structural validator for template-grade HTML decks |
| `scripts/validate-website.mjs` | Structural validator for website-grade HTML pages/sites |
| `scripts/extract-pptx.py` | PowerPoint content extraction |
| `scripts/deploy.sh` | Vercel deployment helper from upstream |
| `scripts/export-pdf.sh` | PDF export helper from upstream |

## Install

For Codex, copy this repository folder into your skills directory:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/marie6789040106650/frontend-slides-template-grade.git ~/.codex/skills/frontend-slides
```

If you already have `~/.codex/skills/frontend-slides`, back it up or choose another folder name before cloning.

For Claude Code-style skill layouts, the root folder contains the same core skill files and can be adapted to your local skills directory.

## Usage

Use this skill when asking for:

- a new HTML presentation
- a PowerPoint-to-HTML conversion
- a reusable deck template
- a public template gallery
- a website-style page based on a presentation aesthetic
- a premium sample deck where visual completion matters

For high-completion PPT/template work, the skill should read `TEMPLATE_GRADE.md`, `PPT_PRODUCTION_GUARDRAILS.md`, and `IMAGE_SLOT_GUIDE.md`, then run the template-grade audit before delivery.

For website work, it should read `WEBSITE_GRADE.md`, `WEB_PRODUCTION_GUARDRAILS.md`, and `SURFACE_SLOT_GUIDE.md`, build real website flows, and feed the audit results back into future skill improvements.

Website-grade work should not reuse one generic landing-page skeleton across every style. It should compare rendered screenshots against strong examples in the same category, then update the rubric when a page still feels too slide-like.

## Validators

The validators are guardrails for structural defects. They do not replace rendered screenshot review or design scoring.

Validate a template-grade deck:

```bash
node scripts/validate-deck.mjs path/to/index.html --template-grade
```

Validate a website-grade page or directory:

```bash
node scripts/validate-website.mjs path/to/site-or-page --website-grade
```

The deck validator checks slide count, `data-layout`, placeholders, image `alt`, local image slots, repeated layouts, and scroll-like failure patterns.

The website validator checks placeholders, empty/fake links, CTAs, `data-section`, `data-surface`, image `alt`, form state hints, and pricing/trust boundary hints.

## Validation Performed

This enhanced skill was validated against a deployed gallery and multiple local validator paths:

- 32 entries from `beautiful-html-templates`
- 12 `frontend-slides` preset demo decks
- all 12 `frontend-slides` demos generated as 10-slide decks
- 25 website-style calibration samples across personal developer, small company, SaaS, docs, event, editorial, studio/service, ecommerce, course, dashboard, community, travel, and other archetypes
- website samples upgraded from generic style transfer into archetype-specific structures
- second feedback-loop pass added industry-object hero visuals, SaaS workflow/role paths, docs shell cues, event ticket benefits, editorial metadata, and richer SEO metadata
- third feedback-loop pass expanded docs/editorial samples into linked mini-systems: quickstart, API reference, search, troubleshooting, changelog, `llms.txt`, issue, article, archive, newsletter, and author pages
- mature-website analysis added reusable patterns from Stripe, Linear, Vercel, GitHub Docs, Shopify, Duolingo, Notion, and Apple
- deck validator success path checked with an 8-slide / 8-layout temporary deck
- website validator success path checked with a 1-page / 3-section / 3-surface temporary website
- visible placeholder scan passed
- per-template preview/thumbnail audit passed
- latest deployed website sample pages returned HTTP 200 on Cloudflare Pages and the custom domain

## License

MIT. The original license and copyright from `zarazhangrui/frontend-slides` are preserved in `LICENSE`.
