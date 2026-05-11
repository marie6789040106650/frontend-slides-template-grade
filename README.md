# Frontend Slides Template Grade

An enhanced Codex/Claude-compatible skill for creating high-completion HTML slide decks, reusable deck templates, and public template galleries.

This repository is based on the open-source project [`zarazhangrui/frontend-slides`](https://github.com/zarazhangrui/frontend-slides), which is MIT licensed. This enhanced version keeps the original zero-dependency HTML presentation workflow and adds a stricter template-library production standard inspired by the quality bar of [`zarazhangrui/beautiful-html-templates`](https://github.com/zarazhangrui/beautiful-html-templates).

Live gallery used while validating this upgrade:

https://templates.inkblocklab.com/

## What Changed

- Added **template-grade mode** for reusable deck templates, public galleries, premium samples, and website-style variants.
- Added `TEMPLATE_GRADE.md`, a stricter completion standard for authored demo decks.
- Expanded the skill trigger description so it applies to template libraries and high-completion HTML samples, not only ordinary presentations.
- Added a production checklist for:
  - 8-12 slide demo decks
  - realistic sample copy
  - no unresolved placeholders
  - distinct layout families per preset
  - screenshots or purpose-built thumbnails
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

## Included Files

| File | Purpose |
| --- | --- |
| `SKILL.md` | Main skill workflow and trigger rules |
| `TEMPLATE_GRADE.md` | High-completion template/gallery standard |
| `STYLE_PRESETS.md` | 12 curated visual directions |
| `viewport-base.css` | Mandatory viewport-safe base CSS |
| `html-template.md` | HTML architecture and JS expectations |
| `animation-patterns.md` | Animation guidance |
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

For high-completion template work, the skill should read `TEMPLATE_GRADE.md` and run the template-grade audit before delivery.

## Validation Performed

This enhanced skill was validated against a 44-page deployed gallery:

- 32 entries from `beautiful-html-templates`
- 12 `frontend-slides` preset demo decks
- all 12 `frontend-slides` demos generated as 10-slide decks
- visible placeholder scan passed
- per-template preview/thumbnail audit passed
- all 44 deployed pages returned HTTP 200

## License

MIT. The original license and copyright from `zarazhangrui/frontend-slides` are preserved in `LICENSE`.
