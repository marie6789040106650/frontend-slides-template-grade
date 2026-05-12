# Image Slot Guide

Use this when adding screenshots, product visuals, generated images, diagrams, thumbnails, or local media to HTML decks and template galleries.

## Core Rule

Images in template-grade decks are evidence or structure, not decoration. Bind every meaningful image to a named slot so the layout, crop, caption, and alt text have a clear job.

## Slot Format

Use this pattern:

```html
<figure class="image-frame" data-slot="product-surface-16x10">
  <img src="images/06-dashboard.png" alt="Dashboard showing saved views and export controls" data-image-slot="product-surface-16x10">
  <figcaption>Saved views, export controls, and issue status in one workspace.</figcaption>
</figure>
```

Required for template-grade decks:

- `data-slot` on the image container or figure.
- `data-image-slot` on the local `<img>`.
- Concrete `alt` text for content images.
- Caption when the image carries evidence that may not be obvious.

## Common Slots

| Slot | Ratio | Use |
| --- | --- | --- |
| `hero-16x9` | 16:9 | Cover or section-break visual. |
| `hero-21x9` | 21:9 | Wide cinematic proof band, product panorama, venue, process map. |
| `product-surface-16x10` | 16:10 | App UI, dashboard, docs shell, website screenshot. |
| `screenshot-4x3` | 4:3 | Compact product screenshot or before/after detail. |
| `comparison-left-1x1` / `comparison-right-1x1` | 1:1 | Paired visual comparison. |
| `evidence-grid-3x2` | 3:2 | Multi-image proof grid. |
| `portrait-3x4` | 3:4 | Speaker, customer, author, or case profile. |
| `diagram-16x9` | 16:9 | System diagram, flow, architecture, method map. |
| `thumbnail-16x9` | 16:9 | Gallery card or preview image. |

Use slot names that describe the job, not only the ratio.

## Cropping Rules

- Product UI, text-heavy screenshots, diagrams: default to `object-fit:contain`.
- Photos and generated hero visuals: use `object-fit:cover`, but preserve faces, product edges, and UI headers.
- Do not crop the top of screenshots unless the header is truly irrelevant.
- Multi-image grids must use consistent ratios and heights.
- Avoid rounded corners and heavy shadows unless the active style system explicitly uses them.

## Generated Image Rules

When generating images for decks:

- Match the final slot ratio before generation.
- Do not include slide chrome, page numbers, watermarks, captions, fake browser bars, or large text inside the image unless the slide specifically needs an image-of-a-document.
- Keep text in generated diagrams minimal and in the deck language.
- If text must be precise, prefer HTML/SVG labels over rasterized text.
- Save images as `images/{slide-number}-{semantic-name}.{ext}`.

## Gallery Thumbnails

Template gallery thumbnails should show the actual visual grammar:

- Use a real cover screenshot when it is representative.
- Use a purpose-built thumbnail only when it still shows the deck's layout vocabulary.
- Avoid plain gradients, generic title cards, or unrelated decorative art.
- Check thumbnail legibility at small card size.

## Audit Questions

Before shipping:

- What does this image prove?
- Is the image bound to a slot?
- Is the crop safe at desktop and mobile preview sizes?
- Does the caption explain the evidence?
- Could this image be replaced by text without losing much? If yes, the image may be decorative.
