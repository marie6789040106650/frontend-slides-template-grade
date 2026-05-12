# Surface Slot Guide

Use this when building website samples that need product, content, commerce, support, docs, dashboard, or workflow surfaces.

## Core Rule

Every mature website needs an inspectable object. Name that object with a surface slot so the page proves what the visitor can evaluate or do.

Surface slots are not just images. They can be tables, cards, forms, code blocks, search results, product galleries, checkout rows, dashboards, docs shells, curriculum modules, or status panels.

## Slot Format

Use `data-surface` on the surface container:

```html
<section data-section="product-workflow">
  <div class="product-shell" data-surface="product-ui-workflow">
    ...
  </div>
</section>
```

For images inside a surface, also use `data-image-slot`:

```html
<img src="images/hero-product.png" alt="Product editor showing export settings" data-image-slot="product-surface-16x10">
```

## Common Surface Slots

| Slot | Use |
| --- | --- |
| `product-ui-workflow` | SaaS/app/editor/dashboard workflow. |
| `docs-quickstart` | Install/auth/config path with code or steps. |
| `api-reference` | Endpoint, parameters, response, errors, limits. |
| `pricing-comparison` | Plans, limits, price, CTA, policy notes. |
| `checkout-review` | Cart, fees, shipping, payment, confirmation. |
| `catalog-grid` | Product/template/listing browsing and filtering. |
| `search-results` | Query, results, filters, no-results recovery. |
| `dashboard-table` | Rows, filters, selected state, actions, export. |
| `case-file` | Challenge, intervention, outcome, evidence. |
| `curriculum-path` | Modules, projects, workload, deliverables. |
| `booking-flow` | Date, availability, selection, confirmation. |
| `support-routing` | Issue category, status, escalation, contact. |
| `trust-boundary` | Privacy, refunds, license, disclosure, safety, support. |
| `status-changelog` | Latest update, version, status, incidents, release notes. |

Choose slots based on the archetype. Do not force all slots into every website.

## Slot Quality Rules

A good surface slot has:

- A clear object type: table, UI, form, catalog, article, docs, checkout, curriculum.
- Concrete labels and values, not generic filler.
- At least one state or interaction cue when relevant.
- Nearby next action.
- Nearby trust or policy boundary if the task has risk.
- Mobile stacking behavior that preserves meaning.

## Archetype Defaults

- Indie AI SaaS: `product-ui-workflow`, `template-gallery`, `pricing-comparison`, `trust-boundary`, `status-changelog`.
- B2B SaaS: `product-ui-workflow`, `case-file`, `pricing-comparison`, `trust-boundary`, `dashboard-table`.
- Developer/docs: `docs-quickstart`, `api-reference`, `search-results`, `status-changelog`, `support-routing`.
- Ecommerce/product: `catalog-grid` or product media, `pricing-comparison`, `checkout-review`, shipping/returns trust boundary.
- Course: `curriculum-path`, instructor proof, tuition/refund trust boundary, application/enrollment path.
- Service/studio: `case-file`, method/process, scope/budget signal, consultation path.
- Dashboard/admin: `dashboard-table`, filters, empty/loading/error, export, permission/audit surface.
- Marketplace/listing: `search-results`, `catalog-grid`, listing detail, pricing/fees, availability, review/verification boundary.

## Failure Patterns

- Surface is only an abstract illustration.
- Product UI is a decorative screenshot with unreadable text and no task.
- Pricing exists, but no limits, policies, support, or plan-fit cues.
- Search exists, but no result, no empty state, and no recovery path.
- Dashboard has KPI cards but no table, filter, or action loop.
- Course page has inspiration but no curriculum or deliverable.
- Service site has atmosphere but no case proof or engagement path.

## Audit Questions

- What can the visitor inspect?
- What can they do next from this surface?
- What detail makes the surface believable?
- What state shows it works beyond the perfect case?
- What trust boundary reduces risk?
