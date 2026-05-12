# Color Strategy Standard

Use this when choosing, auditing, or explaining palettes for deck templates, website samples, thumbnails, and visual systems.

## Core Rule

Color theory is a judgment tool, not a decoration recipe. A strong palette should explain hierarchy, mood, action, and fit for the audience.

## Color Models

- **RGB**: screen and light. Use for browser, app, slide, and projection work.
- **CMYK / CMY**: print and ink. Use only when the output must survive print conversion.
- **Traditional red-yellow-blue**: useful for art vocabulary, but less precise for digital UI.
- **HSL / HSV**: useful for quick design tokens and theme variants.
- **OKLCH / LCH**: preferred for modern web palettes when perceptual consistency matters across tints, dark mode, and generated scales.

## Hue-Wheel Relationships

Use 12- or 24-hue wheels to reason about color relationships:

- **Monochromatic**: one hue with value/chroma changes. Stable, quiet, unified; can become dull.
- **Analogous**: neighboring hues. Natural, editorial, gentle; needs a clear accent.
- **Complementary**: opposite hues. High contrast and recall; can feel cheap if both are saturated and equal in area.
- **Split-complementary**: one hue plus the two neighbors of its opposite. Often the best practical balance for web pages: tension without harshness.
- **Triadic**: three evenly spaced hues. Energetic and balanced; can feel childish or toy-like without restrained saturation.
- **Tetradic / rectangle**: two complementary pairs. Rich system potential; requires strict hierarchy and neutral space.

The relationship is only the start. A palette fails if it has poor contrast, weak hierarchy, bad cultural fit, or equal-color shouting.

## Palette Anatomy

Every template-grade palette should define:

- **Canvas**: background or paper color. This sets the air of the page before any accent appears.
- **Ink**: primary text color with strong readability.
- **Muted ink**: secondary text, captions, metadata.
- **Surface**: cards, panels, forms, product screens, or slide sheets.
- **Line**: border, rule, divider, or structural drawing color.
- **Primary accent**: brand memory and major calls to action.
- **Secondary accent**: contrast, illustration, data series, status, or hover energy.
- **State colors**: success, warning, danger, info when the site has forms, dashboards, checkout, or account states.

Do not use all colors equally. A useful starting ratio is 60% canvas/neutral, 30% surface/support, 10% accent/action.

## Design Meaning

- **High saturation**: energetic, youth, entertainment, launch, urgency. Use sparingly in professional tools.
- **Low saturation**: calm, premium, scholarly, editorial, trustworthy. Needs contrast to avoid dullness.
- **Warm backgrounds**: human, craft, hospitality, learning, editorial.
- **Cool backgrounds**: technical, analytical, clinical, operational.
- **Dark palettes**: dramatic, developer, media, premium, or command-center. Watch readability and fatigue.
- **Paper palettes**: literary, studio, education, nonprofit, professional services. Watch beige monotony.
- **Bright complementary accents**: excellent for CTAs, numbers, and current-state markers; risky for large text fields.

## Application Workflow

1. Name the desired mood and audience before naming colors.
2. Choose the canvas and ink first.
3. Choose one primary accent for memory and conversion.
4. Add one secondary accent only if it creates a useful relationship: contrast, categorization, or motion.
5. Build a value scale for text, borders, cards, and disabled states.
6. Check whether the palette relationship is monochromatic, analogous, complementary, split-complementary, triadic, or tetradic.
7. Test the palette in the actual layout: hero, dense section, form/table, CTA, thumbnail, and mobile.
8. Revise by changing value and chroma before randomly swapping hue.

## Audit Questions

- Can the primary action be found in two seconds?
- Is body text readable without relying on hue alone?
- Does the palette support the archetype's job: sell, teach, compare, book, donate, apply, read, or operate?
- Are accent colors used as decisions, not decoration?
- Does the thumbnail still communicate the visual system at small size?
- Does the palette create variety across the template library, or does everything collapse into one house style?
- Are culturally loaded colors appropriate for the product, country, audience, and risk level?
- Are error/success/warning states distinct from brand accents?

## Failure Patterns

- Pretty color wheel pairing with no information hierarchy.
- Equal-area complementary colors that vibrate and feel amateur.
- Low-contrast pastel text on pastel surfaces.
- One-hue palettes where every element is a tint of the same color.
- Dark themes where all surfaces are the same near-black value.
- Brand accent used for links, warnings, decoration, charts, and CTAs at once.
- Palette copied from a slide cover but not extended to forms, tables, cards, screenshots, and mobile navigation.

## Practice References

- **Johannes Itten**: useful for color contrasts: hue, light-dark, warm-cool, complementary, simultaneous, saturation, and extension/area.
- **Josef Albers**: useful reminder that color is relational; the same color changes beside different neighbors.
- **Munsell**: useful mental model for separating hue, value, and chroma.
- **HSL / OKLCH token systems**: useful for producing consistent ramps and dark-mode variants.
- **Strong product examples**: Stripe for controlled gradients and action accents; Apple for neutral discipline; Linear for dark operational hierarchy; Figma for playful brand with restrained product UI; Notion for low-saturation workspace calm; Duolingo for high-saturation learning energy; editorial publications for black/white/paper authority.

## Output Expectation

When a palette is central to the work, include a short rationale:

- palette relationship
- intended mood
- canvas / ink / accent roles
- CTA strategy
- readability or accessibility risk
- how it extends into thumbnails, states, charts, and dense content
