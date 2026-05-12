# Template-Grade Deck Standard

Use this when the user asks for a reusable template, public gallery item, demo deck, premium sample, or anything that should feel as complete as a designed HTML template library entry.

## Completion Bar

A template-grade deck is a finished design system, not a styled content dump.

Every template-grade deck needs:

- 8-12 slides minimum unless the user requests fewer.
- A specific demo topic that matches the style's mood.
- Distinct slide layouts, not one repeated card pattern.
- Realistic authored sample copy, numbers, labels, and section names.
- No unresolved placeholders such as `TODO`, `Lorem`, `[Topic]`, `[Year]`, or `Image Placeholder`.
- Consistent chrome: page numbers, section labels, navigation, borders, marks, or recurring decorative vocabulary.
- A clear typography system: display, body, labels, numbers, captions.
- A reusable palette and component grammar that holds across title, content, metric, quote, comparison, process, and closing slides.
- A color strategy that explains canvas, ink, accent, hierarchy, and hue relationship rather than only listing attractive swatches.

Use high-completion HTML template libraries as the bar: the sample should look like an authored deck someone intentionally published, not a preset demonstration with filler text.

## Production Modes

Use this standard for:

- A single reusable deck template.
- A multi-template gallery.
- Preset demo decks for a skill or design system.
- Website pages derived from presentation styles.
- Any public sample where first impression and screenshot quality matter.

For gallery work, every item needs either an actual screenshot or a purpose-built thumbnail that shows its visual grammar. A plain gradient title card is not enough.

## Required Layout Set

Prefer this 10-slide structure for new template-grade demos:

1. Cover
2. Contents / agenda
3. Typography or positioning slide
4. Palette / visual system slide
5. Big statement or quote
6. Metrics / proof grid
7. Feature or detail layout
8. Comparison / before-after
9. Process / timeline
10. Closing / call to action

Adapt names and content to the deck's demo topic. For example, a terminal-themed preset should feel like release notes; an editorial preset can feel like a strategy memo; a playful preset can feel like a community launch.

## Layout Independence

When producing multiple presets, each preset must differ in more than color and font:

- Use distinct stage geometry: split panel, notebook sheet, grid poster, editorial spread, terminal frame, premium dark canvas, or other style-specific structures.
- Change chrome and navigation vocabulary: tabs, section numbers, marks, rules, command prompts, margins, badges, or footers.
- Give each deck a matching content world: launch brief, research memo, release notes, manifesto, operating review, product map, community launch, etc.
- Avoid one repeated 10-slide skeleton unless the visual system materially changes the reading experience.

## Visual Requirements

- Use a fixed slide stage or grid so primary content cannot drift outside the visible viewport.
- Keep all text and decorative elements inside the slide's visual system.
- Use `clamp()` for type and spacing.
- Keep first-slide screenshots visually representative; the gallery thumbnail should show the actual design vocabulary, not a plain gradient.
- If images are needed but unavailable, use designed abstract frames or CSS-native placeholders that are part of the visual language, not generic "image placeholder" boxes.
- Do not label generated samples as "not original" or apologize for adaptation. Make the work good enough that the distinction is unnecessary.
- Read `COLOR_STRATEGY.md` when creating or auditing reusable palettes. A strong template needs roles for canvas, ink, muted ink, surface, line, primary accent, secondary accent, and state colors where relevant.

## Color Audit

Before calling a deck template polished, check:

- The palette relationship is intentional: monochromatic, analogous, complementary, split-complementary, triadic, or tetradic.
- The 60/30/10 balance or another clear hierarchy prevents every color from shouting.
- Accent colors map to specific jobs: CTA, current state, key number, section marker, or data series.
- Body text and captions remain readable on every surface.
- The palette still works in the gallery thumbnail and in the densest slide.
- The template does not collapse into the same one-hue family used by adjacent presets.

## Placeholder Audit

Before publishing or calling a template complete, search generated HTML for visible placeholder residue:

- `TODO`
- `Lorem`
- `Image Placeholder`
- `Generic placeholder`
- bracket fields such as `[Topic]`, `[Year]`, `[Author Name]`, `[Source]`, `[Client Name]`, `[Presentation Title]`

If bracketed labels are intentionally part of the design language, they must read like real labels (`[Method]`, `[Pattern]`) rather than unfinished fill-in fields.

Replace placeholders with concrete sample names, dates, sources, numbers, contact details, captions, and claims.

## Gallery Audit

For a public gallery:

- Confirm every card opens a working page.
- Confirm every deck has a slide count in metadata.
- Confirm every template has a representative screenshot or purpose-built thumbnail.
- Test at least one beautiful/rich template and one generated preset on the deployed URL.
- If using custom domains, verify both the platform URL and the custom domain return HTTP 200.
- Keep the gallery copy confident and user-facing; avoid internal caveats.

## Verification

Before delivery:

- Count slides and confirm the expected number.
- Search generated HTML for unresolved placeholder terms.
- Check at least one title slide and one dense content slide in a browser.
- Verify no text overlaps, clips, or escapes its stage at desktop size.
- Verify navigation works by moving forward and backward.
- If publishing a gallery, include a representative screenshot or purpose-built thumbnail for every template.
