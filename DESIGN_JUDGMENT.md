# Design Judgment Standard

Use this when creating, auditing, or iterating deck templates, website samples, galleries, and visual systems.

## Core Rule

Good design is not only visual polish. It is a set of decisions that make a specific audience understand, trust, compare, act, or remember.

Use this file before calling a template or website "finished." `COLOR_STRATEGY.md` covers palette logic, `DESIGN_SCORECARD.md` turns judgment into an iteration target, and `DESIGN_VERIFICATION.md` proves the rendered artifact works.

## Judgment Stack

Evaluate in this order:

1. **Intent**: Who is this for, what decision should they make, and what trust level does the context require?
2. **Information architecture**: Does the structure match the website/deck type, or is it a generic hero plus cards?
3. **Visual hierarchy**: Does the eye land on the right thing first, second, and third?
4. **Layout grammar**: Does the design have a repeatable visual language beyond swapped colors and fonts?
5. **Typography**: Do display, body, label, number, caption, and code styles serve the content density?
6. **Color strategy**: Do color roles support hierarchy, state, action, mood, and readability?
7. **Evidence**: Are claims supported by concrete copy, dates, numbers, examples, screenshots, policies, or process detail?
8. **Task proximity**: Is the next useful action close, concrete, and recoverable?
9. **Product surface**: Does the design show real product/content objects instead of abstract decoration?
10. **Interaction and states**: Are hover, focus, loading, empty, error, disabled, success, selected, and active states designed where relevant?
11. **Responsive behavior**: Does the same design survive mobile, dense content, narrow buttons, long labels, and thumbnails?
12. **Library distinctiveness**: Does this sample add a new layout family or visual grammar to the library?

If a lower layer is beautiful but an earlier layer fails, the design is not finished.

## Intent Check

Before styling, name:

- Audience: buyer, reader, attendee, candidate, donor, operator, developer, student, patient, client, or maker.
- Primary job: sell, teach, compare, book, donate, apply, read, operate, install, publish, or join.
- Trust level: casual, commercial, professional, high-trust, regulated, safety-sensitive.
- Conversion path: what the user can do next without guessing.
- Emotional target: calm, decisive, energetic, editorial, premium, playful, technical, civic, clinical, or intimate.

Failure pattern: choosing a beautiful style before knowing the user's decision.

## Information Architecture Check

The page or deck must behave like its category:

- SaaS: product workflow, proof, integrations, security, pricing or demo path.
- Docs: search, quickstart, API/reference, troubleshooting, changelog.
- Event: date, location, agenda, speakers, tickets, venue.
- Course: audience fit, outcomes, curriculum, instructor, tuition, application.
- Product: media, price, variant, stock, shipping, returns, reviews, specs.
- Studio/service: cases, method, scope, fit, budget signal, consultation.
- Dashboard/admin: navigation, KPIs, filters, table, row actions, states, permissions.
- Editorial/report: authorship, issue/report metadata, chapters, sources, archive, subscribe/download.

Failure pattern: every archetype becomes "hero, three benefits, testimonials, CTA."

## Visual Hierarchy Check

Audit the first viewport and one dense section:

- The most important object is visually dominant for the right reason.
- The CTA does not compete with decorative accents.
- Metadata and proof are visible but not louder than the main promise.
- Type sizes are limited and intentional.
- Bright colors mark decisions, not random decoration.
- The layout still reads when converted to grayscale.

Failure pattern: visual energy is high, but the user's next action is visually ambiguous.

## Layout Grammar Check

Each template or site needs its own structural vocabulary:

- Stage geometry: split editorial spread, product console, notebook sheet, poster grid, catalog shelf, form flow, data table, timeline, map/list, issue cover, command center.
- Chrome: tabs, page numbers, rulers, tags, cards, rails, sidebars, section marks, status bars, margins, command prompts, stamps, captions.
- Repetition rule: what repeats across sections, slides, cards, and thumbnails.
- Variation rule: what changes so the system does not become monotonous.

Failure pattern: the same card grid appears in every template with different colors.

## Typography Check

Typography should match both mood and density:

- Display type earns attention in hero/cover moments only.
- Body type must carry paragraphs, labels, captions, and dense UI.
- Numbers, code, prices, and metadata may need separate treatment.
- Do not use hero-scale typography inside compact panels, forms, dashboards, or cards.
- Avoid too many type sizes; use scale to signal rank.
- Long words and labels must fit on mobile and inside buttons.

Failure pattern: a dramatic deck title style is copied into a website body where it damages usability.

## Color Check

Use `COLOR_STRATEGY.md`, then answer:

- Which color is canvas, ink, muted ink, surface, line, primary accent, secondary accent?
- Which color owns the primary action?
- Which colors show state: success, warning, danger, info, selected, disabled?
- Does the hue relationship fit the emotional target?
- Does contrast pass for text, UI boundaries, and non-static backgrounds?
- Does the palette still work in the gallery thumbnail?

Failure pattern: a palette works as a cover image but fails forms, tables, states, and mobile navigation.

## Evidence Check

Replace generic claims with concrete proof:

- Product names, plans, prices, limits, dates, times, locations, IDs, version numbers.
- Before/after, metrics, review counts, case names, sample rows, examples, policies.
- Screenshots, realistic UI panels, code snippets, menu items, itinerary blocks, status rows.
- Boundaries: refunds, cancellation, privacy, support, eligibility, scope, jurisdiction, accessibility.

Failure pattern: the design looks premium but says nothing inspectable.

## Task Proximity Check

The next useful action should be close to the user's current question:

- SaaS: product tour, pricing, integrations, security, demo, trial.
- Docs/developer tools: quickstart, install, API reference, examples, troubleshooting, changelog.
- Ecommerce: variant, price, stock, shipping, returns, reviews, cart.
- Course: curriculum, dates, tuition, instructor, application, refund.
- Event: agenda, speakers, tickets, venue, refund/transfer.
- Service/studio: cases, method, fit, scope, budget signal, consultation.
- Community: onboarding, rooms, rules, notifications, privacy, moderation.

Check that primary actions are not buried behind vague labels like "Learn more" when a more specific action exists.

Failure pattern: the user understands the pitch but has to hunt for the next decision path.

## Product Surface Check

Mature sites show the thing being evaluated:

- Product UI, workflow, dashboard, table, command center, editor, or checkout.
- Docs shell, search result, API endpoint, code example, changelog.
- Course path, module list, assignment, student artifact.
- Product media, variant picker, cart preview, review summary.
- Case file, process board, quote desk, booking flow, room directory, issue archive.

Use abstract visuals only when they clarify the system. Do not let them replace evidence.

Failure pattern: beautiful shapes stand in for the product, so the page cannot be evaluated.

## Interaction And State Check

For website and product samples, include relevant states:

- Focus and hover for links/buttons.
- Loading, empty, no-result, error, retry, disabled, selected, active, success.
- Form validation and recovery.
- Mobile navigation and sticky or repeated primary actions when useful.
- Account, checkout, booking, support, dashboard, and admin flows need state-specific surfaces.

Failure pattern: the page shows only the happy path, so it feels like a poster rather than a product.

## Responsive And Thumbnail Check

Verify:

- No horizontal overflow on mobile.
- Buttons and chips hold the longest labels.
- Dense sections collapse into readable order.
- Tables, cards, maps, product screens, and forms do not clip.
- The thumbnail communicates the template's actual visual grammar, not a generic gradient.
- The first viewport hints at enough next-section content for browsing context.

Failure pattern: the desktop hero is beautiful, but the mobile page becomes stacked leftovers.

## Library Distinctiveness Check

When producing multiple templates or samples:

- Track layout family, palette family, type family, content world, and thumbnail language.
- Avoid adjacent samples sharing the same hero rhythm, card structure, or color mood.
- A new sample should add a useful pattern to the library: product console, comparison table, directory result, issue archive, booking flow, form stepper, case file, quote desk, lesson module, etc.

Failure pattern: the library looks like one site reskinned 20 times.

## Audit Output

After generating or improving a sample, produce a short internal audit:

- **Intent**: audience, job, trust level.
- **Strongest decision**: one thing the design now does well.
- **Weakest risk**: the most likely reason it still feels unfinished.
- **Next iteration**: 1-3 concrete improvements.
- **Do not change**: one successful visual rule worth preserving.

Do not over-explain this in the user-facing final answer unless the user asks. Use it to guide iteration.

Then score with `DESIGN_SCORECARD.md` and verify with `DESIGN_VERIFICATION.md`. If the weakest risk and the lowest score category disagree, inspect both before choosing the next change.
