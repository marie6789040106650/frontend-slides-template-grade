# Mature Website Patterns

Use this when the user asks to analyze known mature websites, compare generated websites with industry leaders, or upgrade website samples through the feedback loop.

## Core Rule

Do not copy mature websites. Extract their reusable decision structure: what they make visible, what they make actionable, and what they make trustworthy.

Mature sites usually feel better because their first screen and first few sections reduce evaluation work. They show concrete evidence, give the next task a nearby path, and expose the product or content surface that the visitor needs to judge.

## The Maturity Ladder

Use this ladder when judging any website sample:

1. **Poster**: attractive cover, weak task path.
2. **Landing page**: clear promise and CTA, but limited evidence.
3. **Product surface**: real UI, catalog, docs, table, curriculum, case file, checkout, booking, or article system appears.
4. **Evaluation system**: pricing, proof, docs, policies, comparison, examples, support, and recovery paths are close together.
5. **Operating system**: the site supports repeated real use: search, filters, account states, changelog, status, admin controls, saved views, or lifecycle pages.

For high-completion website samples, aim for level 3 at minimum. For flagship samples, aim for level 4. Use level 5 only when the archetype needs an app-like system such as docs, dashboards, commerce, marketplaces, communities, or booking.

## Pattern Extraction

When studying a mature site, record the pattern in this form:

```text
Site:
Archetype:
First viewport job:
Evidence density:
Task proximity:
Product surface:
Trust boundary:
Interaction/state lesson:
Reusable rule:
Do not copy:
```

Keep the reusable rule category-specific. Avoid copying brand language, imagery, animation style, page order, or proprietary UI details.

## Mature Reference Patterns

### Stripe Pattern: Evidence-Rich Financial Infrastructure

Reusable lessons:

- Pair a broad platform claim with specific product routes, pricing, docs, support, and customer stories.
- Use hard numbers, uptime/status, customer scale, and named implementation stories as evaluation evidence.
- Put developer docs, pricing, sales, and account-start paths close together.
- For financial or high-trust categories, keep partner role, fees, risk, support, and status reachable from the main decision path.

Use when:

- Building high-trust SaaS, payments, fintech-adjacent, developer infrastructure, or enterprise platform samples.

Do not copy:

- Stripe's brand gradients, diagonal motifs, copy, customer story framing, or proprietary product visuals.

### Linear Pattern: Product Surface as the Hero

Reusable lessons:

- Let the interface demonstrate the product category before feature cards explain it.
- Show navigation, lists, details, assignments, statuses, and workflow objects that make the software feel operable.
- Give product, customer, pricing, docs, and app-entry paths obvious roles.
- Keep visual restraint high so the product surface carries the authority.

Use when:

- Building B2B SaaS, productivity tools, admin consoles, issue trackers, dashboards, and collaboration products.

Do not copy:

- Linear's exact dark chrome, command-center composition, icon set, typography, or product copy.

### Vercel Pattern: Immediate Builder Path

Reusable lessons:

- Developer products need a close bridge from promise to build action: docs, templates, deploy, examples, and pricing.
- The hero should expose what can be created, deployed, or measured, not only state a brand position.
- Quickstart and template routes should feel like primary navigation, not secondary resources.
- Status, changelog, docs, and framework support are trust surfaces for builders.

Use when:

- Building developer platforms, hosting, AI developer tools, docs portals, templates, or API products.

Do not copy:

- Vercel's black/white brand system, triangle mark language, exact developer copy, or deployment UI.

### GitHub Docs Pattern: Searchable Task Architecture

Reusable lessons:

- Docs should start with search or task paths, not a marketing hero.
- A mature docs portal separates quickstart, concepts, reference, troubleshooting, billing/admin, and policy content.
- Version, product context, code examples, edited/updated signals, and support routes reduce user uncertainty.
- Search results, empty search, no-match recovery, and copyable examples are part of the design, not afterthoughts.

Use when:

- Building docs, support centers, API references, knowledge bases, developer onboarding, or help sites.

Do not copy:

- GitHub's exact doc taxonomy, wording, code examples, or visual shell.

### Shopify Pattern: Commerce Decision Completeness

Reusable lessons:

- Commerce platforms need merchant jobs, channel coverage, pricing, trial terms, customer proof, and app/ecosystem paths.
- A good commerce page supports both brand confidence and operational questions: selling channels, payments, analytics, shipping, integrations, and support.
- Trial or start paths should sit near plan/pricing and real store/product evidence.
- Searchable/crawlable text matters because commerce buyers compare details.

Use when:

- Building ecommerce platforms, template stores, marketplaces, product pages, checkout flows, subscription commerce, or merchant tooling.

Do not copy:

- Shopify's green brand system, merchant stories, store imagery, or platform claims.

### Apple Pattern: Product Theater Plus Commerce System

Reusable lessons:

- A product-led brand site can use a cinematic first viewport when the product itself is the evidence.
- Product theater is not enough by itself. It must connect to an evaluation system: lineup, compare, buy/configure, trade-in, financing, delivery/pickup, support, returns, privacy, and account/order status.
- Keep the first action simple, but give deeper buyers immediate routes to comparison, configuration, specialist help, and support.
- Separate emotional product storytelling from legal, financing, eligibility, subscription, privacy, and service boundaries, but keep those boundaries findable before purchase.
- For global product ecosystems, navigation should support both product families and user tasks: shop, learn, compare, buy, repair, manage account, and get help.

Use when:

- Building consumer product, hardware, app, digital product, template store, ecommerce, subscription media, accessory, or product-ecosystem samples.

Do not copy:

- Apple's exact minimalist art direction, product imagery, typography, device renders, naming, page rhythm, or generic `Learn more` / `Buy` CTA pair.

### Duolingo Pattern: Path Certainty and Motivation Loops

Reusable lessons:

- Learning products must make the next lesson, current level, progress, reward, and return path obvious.
- Emotional design works best when attached to a concrete habit loop.
- Course/language/skill selection, placement, streaks, reminders, and recovery states are core product surfaces.
- Motivation copy cannot replace curriculum, progress, or task clarity.

Use when:

- Building education, courses, coaching, habit, onboarding, wellness, or consumer learning samples.

Do not copy:

- Duolingo's mascot system, illustrations, streak mechanics, copy tone, or exact lesson flow.

### Notion Pattern: Calm Workspace Breadth

Reusable lessons:

- Productivity workspace sites can use calm surfaces if the product object is still inspectable: pages, databases, docs, tasks, calendar, AI, templates, or team workflows.
- Broad products need segmented routes for personal, team, enterprise, templates, docs, and pricing.
- Template galleries and use-case pages help turn an abstract workspace into concrete starts.
- Restraint is strong only when task paths are still visible.

Use when:

- Building workspace tools, template galleries, project management, note apps, creator operating systems, and knowledge products.

Do not copy:

- Notion's exact monochrome aesthetic, block metaphor, illustrations, product naming, or template library structure.

## Reference-to-Skill Translation

Turn observations into rules only when they generalize:

- If at least 3 mature references use the same decision pattern, add it to `WEBSITE_GRADE.md`.
- If a missing pattern changes the score by 8+ points, add a hard cap or score note in `DESIGN_SCORECARD.md`.
- If the lesson is archetype-specific, add it to `DESIGN_REFERENCE_CASES.md`.
- If the lesson changes the iteration process, add it to `FEEDBACK_LOOP.md`.

## Common Misreadings

- **"Mature means more sections."** No. Mature means the right evidence and actions are closer to the user decision.
- **"Reference sites are visual styles."** No. Treat them as decision systems.
- **"A good hero can carry the page."** Only for a poster. Real websites need inspectable surfaces.
- **"Pretty thumbnails prove completion."** Thumbnails prove visual direction; detail pages and states prove website maturity.
- **"Generic best practices fit every archetype."** Each archetype has different blockers: docs need search and examples; ecommerce needs price and variants; courses need curriculum; SaaS needs product surface; services need case proof.

## Upgrade Moves

When a sample looks good but still feels thin, choose one move:

- Add an inspectable product surface: UI shell, table, catalog, checkout, curriculum, article, case file, dashboard, booking, or docs page.
- Replace vague CTAs with task labels: Pricing, Quickstart, Install, Compare plans, Book, Apply, View case, Preview template, Start checkout.
- Add evidence close to claims: numbers, dates, plans, limits, update cadence, screenshots, examples, policies, named workflows.
- Add state coverage: empty, selected, hover/focus, loading, error, disabled, success, permission, no-results, confirmation.
- Add trust boundary: pricing, privacy, refunds, cancellation, support, security, license, eligibility, jurisdiction, disclosure, or accessibility.
- Add a lifecycle page: changelog, status, docs, template gallery, customer story, case study, help center, account, or settings.
- For product-led consumer sites, add the commerce/support loop: compare, configure, buy, financing or plan, delivery/pickup, returns, support, warranty, privacy, and account/order status.

## Quick Internal Audit

Before calling a website sample mature, answer:

- What real object can the visitor inspect?
- Which concrete action can they take next?
- What evidence reduces belief-work?
- What state proves the site is usable beyond the first screen?
- What trust or policy boundary prevents hidden risk?
- If the page uses a beautiful product hero, where are compare, buy/configure, support, returns, and privacy paths?
- What pattern from a mature reference did we extract, and what brand-specific detail did we avoid copying?
