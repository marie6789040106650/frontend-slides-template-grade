# Design Reference Cases

Use this with `DESIGN_JUDGMENT.md`, `DESIGN_SCORECARD.md`, and `DESIGN_VERIFICATION.md` when comparing generated templates or websites against mature practice.

For named mature website analysis, also read `MATURE_WEBSITE_PATTERNS.md`. That file captures reusable patterns from well-known mature sites without treating those sites as visual templates to copy.

## Core Rule

Reference cases are calibration, not copying. Extract the decision structure, evidence pattern, interaction model, and visual discipline. Do not imitate brand dress, proprietary layouts, or copyrighted assets.

## How To Use

1. Pick the closest archetype.
2. Compare the generated artifact against 3-5 mature patterns in that archetype.
3. Separate **visual taste** from **task fitness**.
4. Score the artifact with `DESIGN_SCORECARD.md`.
5. Improve the lowest high-impact category.
6. Record the lesson in `WEBSITE_GRADE.md` or `TEMPLATE_GRADE.md` only when it generalizes.

## Reference Dimensions

For every case, observe:

- First viewport decision: what does the user learn or do immediately?
- Product or content evidence: what makes the claim inspectable?
- Navigation model: how does the user compare, search, buy, read, book, or install?
- Trust boundary: what risk, policy, price, privacy, support, or safety detail is visible?
- Task proximity: how close are pricing, docs, install, checkout, booking, apply, compare, or support actions?
- Product surface: what real object is shown: UI, table, docs shell, course path, checkout, catalog, case file, or status view?
- Visual discipline: how color, typography, space, and imagery support rather than distract.
- State coverage: loading, empty, selected, error, success, disabled, account, checkout, or confirmation states where relevant.
- Mobile behavior: whether the core task survives narrow width.

## Mature Pattern Triad

When analyzing a known strong website, look for this triad:

1. **Evidence density**: inspectable facts, not only claims.
2. **Task proximity**: the next useful action is close and specifically labeled.
3. **Product surface**: the evaluated product, content, or workflow is visible.

If a generated sample lacks one of the three, use `DESIGN_SCORECARD.md` to decide whether it should be capped before polishing visuals.

## Indie AI SaaS / Micro-Product

Mature patterns:

- Clear product job before AI claims.
- Real workflow or product surface in the hero.
- Template/use-case gallery with named outputs.
- Transparent free/paid limits.
- Privacy, training-data, export, delete, and support boundaries.
- Changelog or update cadence.

Strong references to study by pattern:

- Small developer tools with quickstart and changelog discipline.
- Self-serve AI products that show one concrete task before sign-up.
- Template tools that provide previews, license rules, and export examples.
- Mature developer-platform sites that keep templates, docs, pricing, status, and deploy/install actions close to the first decision.

Common failure:

- "AI saves time" headline, abstract glow visual, no workflow, no pricing, no privacy stance.

Upgrade move:

- Add a first-task flow: input, transformation, review, export, publish, recovery.

## B2B SaaS Product Site

Mature patterns:

- ICP and job-to-be-done in the first viewport.
- Product UI or workflow, not only abstract shapes.
- Product-surface hero or near-hero that shows navigation, workflow objects, statuses, tables, assignments, admin controls, or another operable object.
- Role-specific proof for buyer, operator, admin, and security/procurement.
- Integrations, permissions, security, implementation, and pricing paths.
- Case evidence with numbers and operational context.

Common failure:

- Big promise, logo row, feature cards, demo CTA, but no evaluable product.

Upgrade move:

- Add an evaluation mini-system: product tour, role path, integration page, security page, pricing/plan-fit page.

## Developer Tool / Docs Portal

Mature patterns:

- Search, quickstart, copyable code, version context, changelog.
- Clear install/auth/config/troubleshooting paths.
- API reference with parameters, errors, examples, and limits.
- Search results, no-match recovery, and troubleshooting by symptom when the sample includes multi-page docs.
- LLM-readable docs path when relevant.
- Status, migration, deprecation, and support visibility.

Common failure:

- Pretty landing page with no task path.

Upgrade move:

- Add quickstart, API detail, troubleshooting by symptom, changelog, and `llms.txt` or equivalent.

## Digital Product / Template Store

Mature patterns:

- Catalog with concrete previews.
- Product detail with contents, license, compatibility, update policy, refund policy.
- Gallery images or live demos that show the actual artifact.
- Clear checkout path and post-purchase expectations.
- Usage examples and support boundary.

Common failure:

- Beautiful product cards without license, preview depth, or purchase confidence.

Upgrade move:

- Add product detail and license/refund/support pages before adding more visuals.

## Course / Knowledge Product

Mature patterns:

- Target learner and outcome before hype.
- Curriculum, workload, cohort dates, instructor proof.
- Student deliverables, examples, critique/support mechanics.
- Tuition, refund, certificate/access duration, team invoice.
- Application or checkout expectations.

Common failure:

- Motivational hero with testimonials but no curriculum depth.

Upgrade move:

- Add weekly modules, project artifacts, instructor evidence, and tuition/refund clarity.

## Service Company / Studio

Mature patterns:

- Who the studio helps and what outcome it creates.
- Named case studies with challenge, intervention, outcome.
- Method stages, deliverables, timeline, decision cadence.
- Scope and budget signals.
- Fit-call or intake with qualification boundaries.

Common failure:

- Atmospheric visuals and brand adjectives with no case proof.

Upgrade move:

- Turn mood into a case-file system with representative work and measurable outcomes.

## Ecommerce Product Page

Mature patterns:

- Product media, price, variant, stock, shipping, returns, warranty, reviews.
- Detail images and specs that support inspection.
- Cart preview and payment/returns confidence.
- Review summary and FAQ near purchase.
- Structured content that search engines can parse.

Common failure:

- Brand poster with an add-to-cart button.

Upgrade move:

- Add buying configuration, stock, shipping/returns, review evidence, and product-detail pages.

## Event / Workshop

Mature patterns:

- Date, place, audience, and registration CTA immediately.
- Agenda, speakers, tracks, ticket tiers, venue logistics.
- Refund/transfer policy, accessibility, travel notes.
- Sponsor or organizer trust.

Common failure:

- Poster-like hero that hides date, location, and ticket decision.

Upgrade move:

- Build a registration mini-system: agenda, speakers, tickets, venue, policy.

## Community / Membership

Mature patterns:

- Onboarding before feed.
- Room purpose, rules, moderation, reporting/blocking.
- Notification and privacy controls.
- Member profile setup and data export/delete.
- Safety states and moderator transparency.

Common failure:

- Chat cards and avatars without safety or purpose.

Upgrade move:

- Add onboarding, room detail, moderation, privacy, and notification pages.

## Editorial / Report

Mature patterns:

- Authorship, issue/report metadata, reading time, date, revision.
- Table of contents, chapters, archive, author profile.
- Methodology, source notes, citation, downloadable files.
- Newsletter or follow path.
- Longform readability on mobile.

Common failure:

- Beautiful cover page with no publication system.

Upgrade move:

- Add issue page, article page, archive, author, methodology/source/citation pages.

## Dashboard / Admin Console

Mature patterns:

- Scope navigation, KPIs, filters, table, row actions.
- Saved views, selected chips, exports, permissions.
- Loading, empty, error, stale data, permission denied states.
- Audit trail and dangerous-action confirmation.

Common failure:

- KPI card wall with no operational loop.

Upgrade move:

- Add table, filters, actions, permissions, state gallery, audit/export flows.

## Reference Note Format

When a feedback-loop iteration learns something durable, record it like this:

```text
Archetype:
Observed mature pattern:
Failure in our sample:
Upgrade rule:
Where to add it:
```

Keep notes general. Do not copy competitor language or page structure verbatim.
