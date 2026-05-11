# Website-Grade Style Translation

Use this when turning deck or HTML-template visual systems into real websites.

## Core Rule

A website is not a slide deck pasted into a long page. Keep the template's typography, color, rhythm, and visual grammar, then redesign the structure for browsing, decision-making, and conversion.

## First Batch Archetypes

Use these as calibration samples before broad generation:

- **B2B SaaS product site**: value proposition, product visual, proof, integrations, case evidence, demo CTA.
- **Knowledge base / docs portal**: search, quick paths, task cards, API/reference paths, changelog, troubleshooting.
- **Event / conference site**: date, location, agenda, speakers, ticket tiers, venue, registration CTA.
- **Editorial / research report site**: issue title, author/date, findings, chapters, charts, quotes, subscribe/download CTA.
- **High-end service / studio case site**: positioning, representative work, method, client result, process, consultation CTA.

## Archetype Structure Requirements

Do not reuse one generic landing-page skeleton across all archetypes. The style can come from a deck template, but the information architecture must come from the website type.

### B2B SaaS Product Site

Required sections:

- First viewport: product category, target team, concrete promise, demo CTA, product-tour secondary CTA.
- Product surface: dashboard, workflow, table, command center, or another believable software screen, not an abstract poster.
- Proof: named customer-style marks, quantified operational metrics, case evidence, or review signals.
- Integration and trust layer: integrations, security/compliance, data flow, permissions, or admin controls.
- Conversion finish: demo, pricing entry, or sales contact path.

Failure pattern: a SaaS page that only shows a bold graphic and feature cards still feels like a pitch slide, not a product website.

### Knowledge Base / Docs Portal

Required sections:

- First viewport: search affordance or quickstart CTA visible immediately.
- Task paths: install, authenticate, troubleshoot, migrate, configure, or publish cards with concrete time or difficulty cues.
- Reference surface: API/category navigation, code block, version selector, changelog, or troubleshooting route.
- Maintenance signal: latest version, updated date, release notes, or support path.
- If the sample can span multiple pages, include at least a quickstart page, API endpoint/reference page, search results state, troubleshooting page, changelog page, and LLM-readable entry such as `llms.txt` or Markdown copy path.

Failure pattern: a docs page without search, code, quick paths, or version context is only an editorial landing page wearing a docs aesthetic.

### Event / Conference Site

Required sections:

- First viewport: event name, date, location, audience, registration CTA.
- People and program: speakers, agenda, tracks, workshops, or critique sessions.
- Ticket decision: tiers, prices, seat count, deadline, or venue capacity.
- Venue/logistics: location, schedule rhythm, sponsors, hotel/travel notes, or accessibility notes.

Failure pattern: an event page that hides date/location/tickets below decorative visuals fails the basic registration decision.

### Editorial / Research Report Site

Required sections:

- First viewport: issue/report title, publication identity, author/editor, date or issue number, read/subscribe CTA.
- Browsing structure: findings, chapter list, article cards, archive, or table of contents.
- Reading proof: quotes, charts, annotations, source notes, or methodology.
- Continuity: subscribe, download, print/PDF, archive, or next issue path.
- If the sample can span multiple pages, include an issue detail, article page, archive/feed page, newsletter/subscription page, author page, and topic or research hub.

Failure pattern: editorial style without authorship, issue metadata, and article/chapter entry points feels like a poster, not a publication.

### High-End Service / Studio Case Site

Required sections:

- First viewport: who the studio serves, what outcome it creates, timeframe or engagement shape, consultation CTA.
- Case evidence: named sample projects, client-style context, before/after, measurable results, or representative work.
- Method: process stages, collaboration model, deliverables, decision cadence.
- Trust and conversion: testimonial, client list, consultation form, email path, or availability signal.

Failure pattern: premium service sites can be atmospheric, but if they lack case proof and a concrete engagement path, they read as moodboards.

## Style Mapping

- Bold Signal / Electric Studio: SaaS, operations, institutional product pages.
- Notebook Tabs / Grove / Paper & Ink: documentation, courses, research libraries, knowledge portals.
- Creative Voltage / Neon Cyber: events, launches, conferences, expressive campaigns.
- Vintage Editorial / Swiss Modern / Vellum: reports, magazines, essays, thought-leadership sites.
- Dark Botanical / Studio / Signal: premium service firms, studios, portfolio/case-study sites.

## Required Website Behavior

Every website-grade page needs:

- A first viewport that says what the site is, who it is for, and what action to take.
- A visible primary CTA and a secondary path where useful.
- Navigation that maps to real sections, not decorative labels.
- Scannable sections built for continuous scrolling.
- Concrete sample copy, names, dates, metrics, prices, locations, or sources.
- Mobile stacking rules for hero, proof, cards, timelines, and CTAs.
- No unresolved placeholders.

## Translation Checklist

Before writing code:

1. Choose the website archetype.
2. Choose the source template/style family.
3. Define the conversion goal: demo, purchase, search, register, read, subscribe, or consult.
4. Decide which slide vocabulary survives: typography, marks, tabs, rules, grids, dark canvas, editorial margins, terminal frame, etc.
5. Replace slide-only structures with website structures: sticky nav, hero, proof band, feature grid, timeline, article body, FAQ, form, footer.

## Audit

Before delivery:

- Check the page is not just a PPT cover plus cards.
- Check the first viewport communicates the offer in about five seconds.
- Check CTA appears in the hero and near the end.
- Check the body sections match the archetype requirements above.
- Check each page has concrete sample content instead of generic labels.
- Check the visible screenshot against strong industry examples in the same category: product pages need product proof, docs need search/tasks, events need date/tickets, editorial needs authorship/chapters, service sites need cases/method.
- Check mobile layout does not overlap, clip important text, or hide conversion actions.
- If deployed, verify the website index and every sample page return HTTP 200.

## Feedback Loop

For a new style-to-website system:

1. Upgrade the skill rubric before or during implementation if the current rubric cannot judge the requested website type.
2. Build 3-5 concrete website samples across different archetypes.
3. Screenshot each first viewport and at least one body section.
4. Compare each screenshot with strong industry examples in the same category, separating visual taste from task fitness.
5. Note which template vocabularies transfer well and which feel too slide-like.
6. Update this skill with the learned mappings, structure requirements, and failure patterns.
7. Generate the next batch with the revised rules.

## Iteration Order

When running a sustained feedback loop across industries:

1. Start with the industry that still has obvious structural gaps, not the one that is most visually exciting.
2. Search mature industry examples and public UX/performance/SEO guidance in parallel.
3. Apply one focused upgrade round to the sample pages.
4. Screenshot the result at desktop first viewport and one body section.
5. If the next gains are mostly content realism or data entry, mark that industry as near-bottleneck and move to the next industry.
6. Return to near-bottleneck industries later with richer real content, images, screenshots, or interactions.

## Current Calibration Notes

- Reducing hero scale often makes the same visual system feel more website-native. A deck-cover title can be beautiful and still push the CTA below the useful first viewport.
- Generic "hero + proof + feature cards" pages are not enough for a style library. They show visual transfer but not website competence.
- The strongest samples keep a signature template visual in the hero while giving the body a category-specific job.
- Navigation labels should name real user decisions: Product, Integrations, Security; Quickstart, API, Changelog; Speakers, Agenda, Tickets; Issue, Essays, Archive; Cases, Method, Results.
- SaaS remains worth iterating until the page shows a believable product workflow, ICP, role paths, differentiated integrations, security/procurement proof, and self-serve evaluation CTAs.
- Docs remains worth iterating until it behaves like a documentation shell: search, left navigation, quickstart path, API reference, changelog, troubleshooting, and version/update context.
- Docs scoring should weight structure over visual taste: information architecture, search UX, docs shell, endpoint quality, task completion, troubleshooting depth, changelog awareness, and LLM readability.
- Event pages approach structural bottleneck faster than other categories: once date, location, speakers, agenda, tickets, venue, sponsor proof, and registration path are visible, gains depend more on real content and checkout flow.
- Editorial/publication pages have the most remaining design space: issue architecture, article metadata, author credibility, archive/feed rhythm, newsletter/subscription paths, and long-form reading hierarchy.
- Editorial scoring should penalize fake navigation: Archive, Essays, Subscribe, or Author labels must lead to real pages or credible page states, not empty anchors.
- Research report pages need report-specific signals: page count, methodology, contributors, data sources, revision history, citation format, and download/HTML reading paths.
- Premium service/studio pages improve when mood gives way to evidence: ICP, named case studies, challenge/intervention/outcome, method deliverables, founder/team trust, and qualification CTA.
- Hero visuals should become industry objects, not decorative posters: SaaS product UI, docs shell, event poster/ticket/agenda, editorial cover/table of contents, studio case file.
- Multi-page mini-systems are the next step once a single-page archetype hits diminishing returns. A tiny but linked system often teaches the skill more than another section on the same page.
