# Web Production Guardrails

Use this when creating, translating, auditing, or refining website samples from deck/template styles.

## Core Rule

A website sample is not a stack of attractive sections. It is a task system. Before writing the page, define the page/section registry, surface slots, navigation paths, required states, and P0 failure checks for the chosen archetype.

These guardrails adapt useful production constraints from the PPT workflow, but they are web-native: navigation, tasks, states, responsive behavior, trust boundaries, and crawlable content matter more than preserving a fixed sequence.

## Website Mode Levels

Choose one mode before generating:

1. **Visual mockup**: one screen or mood direction. Do not call it complete.
2. **Landing page**: first viewport, core sections, CTA, and basic proof.
3. **Product surface**: a real product/content/workflow object is inspectable.
4. **Evaluation system**: pricing, docs/support, examples, policy, comparison, and conversion paths are close together.
5. **Operating system**: search, filters, account/status, state handling, lifecycle pages, or repeated-use flows.

For public gallery website samples, aim for product surface at minimum. For flagship samples, aim for evaluation system.

## Page And Section Registry

Before generating a website sample, write a compact registry:

```text
Archetype:
Target maturity level:
Pages:
Global navigation:
Primary CTA:
Secondary CTA:
Required sections:
Required surfaces:
Required states:
Trust boundaries:
Forbidden shortcuts:
```

Use `data-section` and, for child pages, stable route names:

```html
<section data-section="hero-product">
<section data-section="pricing-comparison">
<section data-section="support-routing">
```

Registry names should describe the section's job, not just its visual layout:

- `hero-product`
- `product-workflow`
- `pricing-comparison`
- `docs-quickstart`
- `template-gallery`
- `case-study-proof`
- `checkout-review`
- `support-routing`
- `privacy-boundary`
- `status-changelog`
- `empty-state`
- `error-recovery`

## Surface Slot Requirement

Use `SURFACE_SLOT_GUIDE.md` for product/content/workflow surfaces. Every mature website needs at least one inspectable surface:

- Product UI
- Docs shell
- Pricing table
- Checkout/cart
- Search results
- Catalog/listing
- Dashboard/table
- Course curriculum
- Case file
- Article/report page
- Booking/reservation flow
- Support/troubleshooting route

Failure pattern: a page says what the thing does but never shows the thing.

## P0 Failure Rules

Fix these before judging taste:

- Primary navigation points to empty anchors or fake pages.
- The primary CTA is missing, vague, or goes nowhere.
- The first viewport does not reveal the category or decision path.
- The archetype's blocker is absent: price, docs search, event date, product surface, curriculum, support, booking, checkout, case proof, or dashboard table.
- The page has visible placeholders: `TODO`, `Lorem`, `[Topic]`, `[Year]`, `Image Placeholder`, `Generic placeholder`.
- Mobile has horizontal overflow or hides the main task.
- A form/checkout/booking/dashboard/support flow has no relevant state coverage.
- Product-led pages have product theater but no compare, price/plan, buy/configure, support, returns/refunds, or privacy/license path.
- High-trust pages hide required fees, privacy, safety, eligibility, jurisdiction, support, or disclosure boundaries.
- Important content exists only as decorative imagery instead of crawlable text.

## Navigation And Task Paths

Navigation should reflect user decisions:

- Developer tools: Docs, Templates, Pricing, Changelog, Status, Support.
- SaaS: Product, Use Cases, Integrations, Security, Pricing, Customers, Demo.
- Ecommerce/product: Shop, Compare, Configure, Reviews, Shipping/Returns, Support.
- Course: Curriculum, Projects, Instructor, Dates, Tuition, FAQ, Apply.
- Service/studio: Work, Method, Case Studies, Services, About, Contact.
- Docs/support: Search, Quickstart, Reference, Troubleshooting, Changelog, Contact.

Avoid generic `Learn more` as the only repeated action on unknown brands. Use task labels: `Compare plans`, `Open quickstart`, `Preview template`, `Start checkout`, `Book a consult`, `View case`, `Install`, `Read docs`.

## State Coverage

Include states when the archetype implies real interaction:

- Search: query, results, no results.
- Forms: focus, validation error, disabled, success.
- Pricing/checkout: selected plan, unavailable item, review step.
- Dashboard: loading, empty, filtered, permission denied, export.
- Support: routing, issue category, escalation, solved/unsolved.
- Booking: available/unavailable, selected date, confirmation.
- Account/order: status, cancellation, refund, download, receipt.

Do not overbuild every state for every sample. Include the states that prove the main task can survive real use.

## Responsive Rules

- Mobile first viewport still shows category, product/content surface or task path, and primary action.
- Navigation collapses without hiding the main task.
- Tables, pricing, cards, and code blocks have a mobile reading strategy.
- Long labels wrap cleanly; buttons and chips do not overflow.
- Sticky actions are allowed only when they do not cover content.

## Visual Freedom

Guardrails should not make every page look the same. They constrain completion, not style.

Keep freedom in:

- Visual rhythm and layout composition.
- Typography and palette.
- Interaction tone.
- Image or product-surface treatment.
- Section order when the archetype still works.

Constrain:

- Required decision paths.
- Surface presence.
- Navigation honesty.
- State coverage.
- Trust boundaries.
- Mobile usability.

## Validator

For generated website samples, run:

```bash
node scripts/validate-website.mjs path/to/site-or-page --website-grade
```

The validator checks structural defects. It does not replace rendered screenshot review, mobile inspection, or scoring with `DESIGN_SCORECARD.md`.

## Output Note

When delivery matters, report:

```text
Website mode:
Pages checked:
Sections/surfaces:
Visual checks:
Validator:
Remaining risk:
```

Keep the user-facing version short. Use the full checklist internally.
