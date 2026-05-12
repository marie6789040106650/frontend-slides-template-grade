# Design Verification Protocol

Use this after generating or revising a deck template, website sample, gallery, or visual system.

## Core Rule

Verification must look at the rendered artifact, not only the source code. A design can satisfy the text checklist and still fail on screen.

## Verification Tiers

Use the smallest tier that matches the risk.

### Tier 1: Quick Visual Check

Use for small copy, palette, or spacing edits.

- Open or render the changed page/deck.
- Check the first viewport.
- Check one dense section or dense slide.
- Confirm no obvious overlap, clipping, unreadable text, or broken CTA.

### Tier 2: Template / Website Check

Use for new templates, new website samples, or meaningful layout changes.

- Desktop first viewport screenshot.
- Mobile first viewport screenshot.
- One dense body section or dense slide screenshot.
- Link/navigation check for the changed artifact.
- Mobile horizontal-overflow check.
- Placeholder scan.
- Score with `DESIGN_SCORECARD.md`.

### Tier 3: Gallery / Public Library Check

Use for deployed galleries, multi-template batches, or public samples.

- Check every gallery card opens a working page.
- Check representative screenshot or purpose-built thumbnail for every item.
- Verify at least one rich/original template and one generated sample.
- Verify mobile for every homepage or gallery card page.
- Verify custom domain and platform preview URL return HTTP 200.
- Run `DESIGN_SCORECARD.md` on the weakest-looking item, not only the best one.

## Visual Checks

When reviewing screenshots, inspect:

- First read: what is visually dominant?
- Second read: proof, metadata, or product surface.
- Third read: next action.
- Text fit: buttons, chips, cards, labels, long words.
- Density: dense panels, tables, cards, code, menus, forms.
- Relationship: grouped items look grouped; unrelated items do not merge.
- Mobile: stacked order still tells the intended story.
- Thumbnail: small card still shows the actual visual grammar.

## Accessibility And Contrast

Check at minimum:

- Body text contrast against its surface.
- CTA text contrast against CTA fill.
- UI boundaries for inputs, cards, selected states, and focus states.
- Error/success/warning states do not rely on color alone.
- Text over images, gradients, or moving backgrounds remains readable in all visible areas.

Use WCAG AA as a practical baseline: 4.5:1 for standard text, 3:1 for large text and critical UI boundaries.

## Source Checks

Search for unfinished residue:

- `TODO`
- `Lorem`
- `Image Placeholder`
- `Generic placeholder`
- bracket fields like `[Topic]`, `[Year]`, `[Author Name]`, `[Client Name]`
- empty `href="#"` for meaningful navigation
- missing `alt` where an image conveys content

Intentional bracket labels are allowed only when they read as designed labels, such as `[Method]` or `[Pattern]`.

## Website Verification

For websites:

- Every main navigation item leads to a real section or child page.
- Primary and secondary CTAs lead somewhere credible.
- Category-specific blockers from `WEBSITE_GRADE.md` are present.
- Forms, checkout, booking, dashboard, support, and account surfaces include relevant states.
- Mobile has no horizontal scroll and does not hide the primary action.
- Important content is crawlable HTML text where possible.

## Deck Verification

For deck templates:

- Slide count matches the expected range.
- Every slide fits exactly in the viewport with no internal scrolling.
- Forward and backward navigation work.
- Dense slides remain readable at desktop presentation size.
- Theme chrome is consistent: page numbers, marks, section labels, rules, or tabs.
- Thumbnail or screenshot represents the actual deck, not a placeholder.

## Feedback Loop Evidence

For each iteration, keep a short note:

```text
Before score:
Weakest category:
Change made:
Verification run:
After score:
Remaining blocker:
```

If the score does not improve, do not keep polishing randomly. Revisit intent, information architecture, or evidence first.
