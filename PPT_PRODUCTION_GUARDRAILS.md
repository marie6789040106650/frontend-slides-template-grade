# PPT Production Guardrails

Use this when generating, converting, enhancing, or auditing HTML deck templates. These rules strengthen the PPT side of `frontend-slides` by making visual systems harder to accidentally dilute.

## Core Rule

A deck template is not a pile of styled slides. It is a registered layout system. Before writing slides, define the allowed layout families, class vocabulary, image slots, and verification checks for the chosen style.

## What This Borrows

This file adapts useful production ideas from `op7418/guizang-ppt-skill`: locked layouts, template-as-source-of-truth, image slot binding, P0 failure rules, and validator-style checks. Keep the method. Do not copy another project's exact aesthetics, local paths, or private golden-source assumptions.

## Deck Mode Levels

Choose one mode before generating:

1. **Freeform deck**: quick one-off presentation. Still obey viewport and placeholder rules.
2. **Template-grade deck**: public or reusable deck. Must use a layout registry and image slots.
3. **Locked-layout deck**: high-fidelity style system. Every slide must declare a registered layout id and avoid unregistered structures.

For any gallery item, preset demo, or template library sample, use at least template-grade mode.

## Layout Registry

Before generating a template-grade or locked-layout deck, write a small internal layout registry:

```text
Style:
Allowed layout ids:
Cover layout:
Closing layout:
Body layout families:
Image layout families:
Forbidden structures:
Required chrome:
```

Each slide should map to one layout id:

```html
<section class="slide ..." data-layout="cover-hero">
```

Layout ids do not need to be globally universal. They need to be stable within the deck/template family. Examples:

- `cover-hero`
- `agenda-index`
- `statement`
- `metric-grid`
- `feature-matrix`
- `image-hero`
- `comparison`
- `timeline`
- `quote`
- `closing`

## Template Is The Class Source

Before writing slide markup:

- Read the chosen template or generated base CSS.
- Use only classes defined by that template or the active style file.
- If a new repeated class is truly needed, add it once to the shared CSS, not inline on every slide.
- Do not invent class names copied from another style family unless their CSS exists in the current deck.
- Do not mix layout vocabularies between style families.

Failure pattern: the markup looks elegant, but the browser falls back to default styling because the class exists only in the agent's imagination.

## P0 Failure Rules

Fix these before judging taste:

- A slide lacks `height:100vh` / `100dvh` and `overflow:hidden`.
- A slide in template-grade mode lacks `data-layout`.
- Text overlaps, clips, escapes the stage, or needs scrolling.
- The deck has unresolved visible placeholders: `TODO`, `Lorem`, `[Topic]`, `[Year]`, `Image Placeholder`, `Generic placeholder`.
- A meaningful image is missing `alt`.
- A local content image lacks `data-image-slot`.
- Navigation does not move forward and backward.
- Theme chrome changes randomly across slides.
- Three or more adjacent slides use the same body structure without a deliberate rhythm reason.
- A public template thumbnail is a generic gradient or plain title instead of the deck's actual visual grammar.

## Theme Rhythm

Before generating, map the rhythm:

```text
01 cover dark
02 agenda light
03 statement dark
04 metric grid light
05 image proof light
06 comparison dark
07 process light
08 quote dark
09 detail light
10 closing dark
```

Rules:

- Avoid more than 3 consecutive slides with the same theme weight.
- 8+ slide decks should include at least one high-contrast statement or section-break slide.
- A deck should have visual rests: not every slide can be a dense grid.
- If the deck uses strong chrome, keep it consistent across all body slides.

## Image Slot Binding

Use `IMAGE_SLOT_GUIDE.md` for image placement. In template-grade and locked-layout decks, every meaningful local image should include a slot:

```html
<figure class="frame image-hero" data-slot="hero-16x9">
  <img src="images/05-product-flow.png" alt="Product workflow preview" data-image-slot="hero-16x9">
</figure>
```

The slot says what job the image performs: hero proof, comparison, product surface, chart, quote portrait, screenshot, or thumbnail. This prevents decorative image stuffing.

## Layout Diversity

For an 8-12 slide template-grade deck:

- Use at least 6 distinct layout ids.
- Include cover, agenda/index, statement or quote, metric/proof, detail/feature, comparison or timeline, and closing.
- Use image layouts only when there is a real image, screenshot, product surface, or designed abstract frame.
- Avoid using the same grid/card layout as the default body for most slides.

Failure pattern: the deck technically has 10 slides, but all body slides are `title + cards`.

## Visual And Code Review

Review both:

- **Visual**: screenshots of cover, dense body slide, image slide, closing.
- **Code**: slide count, `data-layout`, placeholder scan, class vocabulary, image slots, link/navigation integrity.

Do visual review after entrance animations settle. Do not judge an animation midpoint as final layout.

## Validator

For generated HTML decks, run:

```bash
node scripts/validate-deck.mjs path/to/index.html --template-grade
```

Use `--locked-layout` when every slide must declare a registered layout id. The validator is a guardrail, not a replacement for rendered screenshot review.

## Output Note

When delivery matters, report:

```text
Deck mode:
Slide count:
Layout ids used:
Visual checks:
Validator:
Remaining risk:
```

Keep this short for the user, but use it internally to prevent hand-wavy completion claims.
