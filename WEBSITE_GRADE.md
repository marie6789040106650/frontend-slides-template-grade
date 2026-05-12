# Website-Grade Style Translation

Use this when turning deck or HTML-template visual systems into real websites.

## Core Rule

A website is not a slide deck pasted into a long page. Keep the template's typography, color, rhythm, and visual grammar, then redesign the structure for browsing, decision-making, and conversion.

Read `DESIGN_JUDGMENT.md` before generating or auditing website samples. A website-grade sample must pass intent, information architecture, visual hierarchy, layout grammar, typography, color, evidence, state, responsive, and library-distinctiveness checks. Then score with `DESIGN_SCORECARD.md` and verify rendered behavior with `DESIGN_VERIFICATION.md`.

Use `DESIGN_REFERENCE_CASES.md` to compare against mature archetype patterns without copying competitor brand dress or proprietary layouts.

Use `MATURE_WEBSITE_PATTERNS.md` when analyzing known mature websites such as payment infrastructure, productivity SaaS, developer platforms, docs portals, ecommerce platforms, learning products, or workspace tools. Extract the decision structure: evidence density, task proximity, product surface, trust boundary, and state coverage.

Read `COLOR_STRATEGY.md` when translating a deck/template palette into a website. The website version must extend the palette into navigation, forms, cards, tables, CTAs, thumbnails, status states, and dense mobile sections.

## First Batch Archetypes

Use these as calibration samples before broad generation. Default to website types that a personal developer, independent creator, small team, studio, or small company can realistically publish and operate without a special license.

- **Indie AI SaaS / micro-product site**: product workflow, target user, templates/use cases, pricing, docs, updates, privacy/export boundaries, free-trial CTA.
- **B2B SaaS product site**: value proposition, product visual, proof, integrations, case evidence, demo CTA.
- **Independent developer app site**: app screenshots, install path, platform support, permissions, changelog, pricing, support, privacy.
- **Digital product / template store**: catalog, previews, license, pricing, checkout copy, refund policy, usage examples.
- **Knowledge base / docs portal**: search, quick paths, task cards, API/reference paths, changelog, troubleshooting.
- **Event / conference site**: date, location, agenda, speakers, ticket tiers, venue, registration CTA.
- **Editorial / research report site**: issue title, author/date, findings, chapters, charts, quotes, subscribe/download CTA.
- **High-end service / studio case site**: positioning, representative work, method, client result, process, consultation CTA.
- **Ecommerce product detail page**: product media, price, variants, stock, shipping, returns, reviews, material/spec proof, add-to-cart CTA.
- **Cohort course / education site**: audience fit, learning outcomes, curriculum, instructor proof, cohort mechanics, tuition, FAQ/application CTA.
- **Healthcare clinic / health service site**: appointment paths, provider credentials, location, insurance, privacy, emergency boundaries, patient preparation.
- **Real estate / property / rental site**: location search, map context, price, availability, listing facts, agent trust, fees, showing/apply CTA, fair-housing disclosure.
- **Hospitality / restaurant / hotel site**: menu or rooms, reservations, location, hours, reviews, real imagery, accessibility, cancellation or booking policy.
- **Law firm / legal service site**: practice areas, attorney credentials, jurisdiction, disclaimer, consultation path, privacy-aware intake, no-result-guarantee boundary.
- **Careers / recruiting site**: job search, role detail, salary/location/remote policy, hiring process, EEO, accommodations, candidate privacy, mobile apply.
- **Nonprofit / donation site**: mission, donation form, impact amounts, recurring gift controls, tax status, financial transparency, donor privacy, volunteer/ways-to-give paths, post-donation feedback.
- **Public service / government transactional site**: official service identity, eligibility, start page, materials, step-by-step form, error recovery, check answers, confirmation, status, privacy, accessibility, assisted digital support.
- **Marketplace / listing directory site**: search, filters, list/detail comparison, provider or product profile, verified reviews, pricing/fees, availability, quote/booking CTA, no-result recovery, sponsored/verification boundaries, SEO landing pages.
- **AI model transparency / developer platform site**: model catalog, model cards, benchmarks with methodology, pricing units, docs/API, safety/trust, evals, status, changelog, deprecation and migration notes.
- **Operations dashboard / admin console**: scope navigation, KPI cards, charts, dense data table, filters, saved views, row/bulk actions, exports, permissions, audit trail, loading/empty/error/permission states.
- **Insurance claim / high-trust transaction flow**: incident type, policy/identity lookup, dynamic evidence checklist, upload receipts, estimate boundary, claim status center, notifications, human review, privacy and support.
- **Subscription media / streaming service site**: searchable catalog, title detail, preview/playback, plans and trial terms, cancellation, watchlist, profiles, accessibility, downloads, account and data controls.
- **Community / social membership platform**: onboarding, room/channel discovery, feed/detail pages, profile setup, rules, moderation, reporting/blocking, notifications, privacy, data controls, and member-safety states.
- **Travel planning / booking site**: destination/date/guest search, map and list comparison, filters, total price, itinerary builder, checkout, confirmation, saved trips, cancellation/change states, and no-availability recovery.
- **Food delivery / online ordering site**: address-first availability, restaurant/menu browsing, item customization, cart, fee/tip/payment review, ETA tracking, courier contact, receipt, reorder, and support/refund states.

Regulated categories such as banking account opening, KYC, securities trading, insurance claim adjudication, medical diagnosis, and payment custody are not default calibration targets for this template library. Use them only when the user explicitly wants a regulated-industry sample and the page includes the proper role, disclosure, and license boundaries.

## Archetype Structure Requirements

Do not reuse one generic landing-page skeleton across all archetypes. The style can come from a deck template, but the information architecture must come from the website type.

## Design Judgment Requirements

For every website sample, answer these internally before writing code:

- Who is the audience and what decision should they make?
- What trust level does the category require?
- Which category-specific structure is required, beyond a hero and cards?
- What is the first, second, and third thing the eye should notice?
- What layout family does this sample add to the library?
- Which concrete evidence makes the page inspectable?
- Which product/content surface proves the offer is real?
- Which next action is closest to the user's decision: pricing, docs, install, checkout, booking, apply, compare, donate, or contact?
- Which interaction states are required for this category?
- What should remain visible or recoverable on mobile?

Failure pattern: a page that is visually attractive but cannot explain what the visitor should evaluate, trust, or do next.

## Evidence Density, Task Proximity, Product Surface

Mature websites usually win through three practical qualities:

- **Evidence density**: claims are backed by concrete facts such as prices, plans, dates, customer examples, metrics, version numbers, policies, screenshots, or status rows.
- **Task proximity**: the user's next decision path is one click away and uses specific labels such as Pricing, Quickstart, Install, Compare plans, Book table, Apply, Donate, View case, or Start checkout.
- **Product surface**: the page shows the thing being evaluated: product UI, docs shell, checkout, course path, dashboard table, menu, itinerary, catalog, case file, issue archive, or booking flow.

Score down pages that use abstract shapes, generic benefits, or vague "Learn more" links when a concrete product surface or action path should exist.

## Product Theater and Commerce System

For consumer products, hardware, apps, digital products, templates, accessories, and subscription media, a beautiful product hero is only the opening move. Treat it as **product theater**, not completion.

Product-theater samples need a connected decision system:

- Product surface: real product image, UI, demo, preview, artifact, or media object.
- Evaluation: lineup, comparison, specs, features, examples, reviews, or use cases.
- Commerce: price, plan, buy/configure path, checkout expectation, discount, financing, or trial terms.
- Service: delivery/pickup, returns/refunds, warranty, support, order/account status, or repair path.
- Trust: privacy, license, subscription renewal/cancel terms, eligibility, region availability, accessibility, or safety boundary.

Failure pattern: copying the Apple-like "large product image + Learn more / Buy" rhythm for an unknown brand. Apple can rely on massive brand trust; small companies and template samples must make the decision system more explicit.

## Website Maturity Ladder

When translating a template style into a website, decide the intended maturity level before coding:

- **Poster**: acceptable only for a one-off announcement or art direction preview.
- **Landing page**: acceptable for early style exploration, but not for a flagship template sample.
- **Product surface**: minimum bar for publishable website samples.
- **Evaluation system**: target bar for strong public gallery samples.
- **Operating system**: required for docs, dashboards, ecommerce, marketplaces, communities, booking, and app-like products.

If the sample is only a visually polished poster or generic landing page, do not call it complete. Add product/content surface, decision evidence, specific task paths, and at least one meaningful state.

## Color Translation Requirements

For every website sample, define color roles before styling sections:

- Canvas, ink, muted ink, surface, line, primary accent, secondary accent.
- CTA color and hover/focus state.
- Form or state colors if the site has checkout, booking, application, dashboard, support, or account flows.
- Thumbnail expression that still reads at gallery-card size.

Use hue-wheel relationships as a design check, not as a formula. Split-complementary and analogous palettes usually translate well to websites because they provide both cohesion and action contrast. Full complementary or triadic palettes need stricter area control.

Failure pattern: a palette that looked good on a deck cover but cannot support links, tables, forms, errors, disabled states, body text, and mobile navigation is not website-grade.

### B2B SaaS Product Site

Required sections:

- First viewport: product category, target team, concrete promise, demo CTA, product-tour secondary CTA.
- Product surface: dashboard, workflow, table, command center, or another believable software screen, not an abstract poster.
- Proof: named customer-style marks, quantified operational metrics, case evidence, or review signals.
- Integration and trust layer: integrations, security/compliance, data flow, permissions, or admin controls.
- Conversion finish: demo, pricing entry, or sales contact path.

Failure pattern: a SaaS page that only shows a bold graphic and feature cards still feels like a pitch slide, not a product website.

### Indie AI SaaS / Micro-Product Site

Required sections:

- First viewport: product category, target user, concrete job-to-be-done, free trial or download CTA, and secondary template/demo path.
- Product workflow: show how the user starts, edits, reviews, exports, publishes, or shares. Use a real product surface, not an abstract AI glow.
- Use cases or templates: name specific jobs such as launch page, plugin page, waitlist, changelog, comparison page, template store, documentation starter, or client proposal.
- Pricing and limits: free tier, paid plan, project limits, export rights, usage limits, cancellation, and support expectations.
- Trust boundary: privacy, training/data-use stance, deletion/export path, permissions, uptime or changelog, and support route.
- Conversion finish: trial, install, buy, template preview, docs quickstart, or founder contact path.

Failure pattern: an indie product site that says "AI helps you launch faster" but lacks workflow, pricing, export/privacy boundaries, and a credible first task is just a generic SaaS landing page.

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

### Ecommerce Product Detail Page

Required sections:

- First viewport: product category, name, price or promotion, rating, primary product image, add-to-cart CTA, variant selector, stock, shipping, returns, and warranty/payment cues.
- Media system: main image, detail image, use-case image, zoom or thumbnail affordance, and alt text for concrete product inspection.
- Buying configuration: color, size, capacity, bundle, subscription, or another believable variant state; include unavailable or low-stock logic when relevant.
- Product evidence: materials, dimensions, ingredients/components, care, compatibility, package contents, sizing, or technical specs.
- Trust and conversion: reviews, rating distribution, return policy, warranty, payment options, customer support, and FAQ near the purchase path.
- SEO/structured layer: product URL, Product/Offer/Review/Breadcrumb/FAQ structured-data plan, meta description, image alt, and shipping/return information that search engines and buyers can parse.

Failure pattern: a product page that looks like a beautiful brand poster but lacks price, variants, stock, shipping, returns, reviews, specs, or a clear add-to-cart path is not a complete PDP.

### Consumer Product / Hardware / App Product Site

Required sections:

- First viewport: product family, product name, concrete product image/UI, primary buy/download/start CTA, and a specific learn/compare secondary path.
- Product lineup: model or plan comparison, price range, best-for labels, major differences, compatibility, and upgrade path.
- Configuration or decision path: choose model, size, color, storage, license, plan, bundle, template pack, platform, or region where relevant.
- Buying/support loop: trade-in or discount if relevant, financing or subscription terms, delivery/pickup/download expectations, returns/refunds, warranty/support, and order/account status.
- Trust and values: privacy, data use, accessibility, sustainability, repair/service, license, safety, or region availability depending on category.

Failure pattern: a cinematic product page with no compare, price, configuration, delivery/download, return/refund, support, privacy, or account path. That is product theater without a commerce system.

### Cohort Course / Education Site

Required sections:

- First viewport: course or platform name, target audience, concrete learning outcome, start date or availability, application/enrollment CTA, and syllabus/tour secondary CTA.
- Audience fit: who it is for, who it is not for, prerequisites, role level, and time commitment.
- Learning proof: specific outcomes, student deliverables, curriculum modules, projects, assignments, critique/feedback mechanics, and completion artifact.
- Instructor trust: instructor/faculty bio, real work, companies or credentials, teaching track record, student work, and alumni or employer proof.
- Enrollment decision: tuition, cohort size, dates, refund policy, certificate/access duration, enterprise option, and FAQ.
- SEO/information architecture: course detail, course catalog or category page, learning path/certificate page, instructor profile, student outcomes, FAQ/refund page, and long-tail resource pages where useful.

Failure pattern: a course page with a strong hero and testimonials but no curriculum, outcomes, instructor proof, time commitment, tuition, refund rule, or student deliverable feels like a generic SaaS landing page.

### High-Trust Financial Product Site

Required sections:

- First viewport: company/product category, target user, value proposition, eligibility CTA, and nearby disclosure of company identity, partner bank/underwriter/broker role, or approval limits.
- Regulatory clarity: explain whether the company is a bank, broker, insurer, agent, lender, fintech, or comparison service; name partners and geographic availability where relevant.
- Risk disclosure: put key limits near CTA, not only in the footer; avoid unqualified guaranteed, risk-free, insured, free, or best claims.
- Security evidence: MFA, encryption, audit logs, permission controls, SOC 2/PCI or equivalent proof, vulnerability disclosure, and data-revocation paths.
- Money-flow transparency: fees, spread, APR/APY, premium, claim flow, payout timing, account approval, insurance limits, and what happens when the user cancels.
- Form confidence and support: sensitive-field labels, review step, consent language, error recovery, human support, complaint/contact path, and FAQ for anxiety questions.
- SEO/E-E-A-T: updated dates, company identity, reviewer/author where advice is present, source notes, FAQ, and YMYL-safe language.

Failure pattern: a financial page that uses trust words but hides fees, risk, partner identity, eligibility, or support behind tiny footer legalese should be treated as unfinished and potentially unsafe.

### Healthcare Clinic / Health Service Site

Required sections:

- First viewport: service type, appointment CTA, provider/location/insurance paths, phone, and emergency boundary for urgent symptoms.
- Care routing: new vs returning patient, in-person vs virtual, primary vs urgent vs specialist, and clear visit types.
- Trust evidence: licensed providers, specialties, credentials, clinic location, medical review or updated date for educational content.
- Insurance and billing: accepted plans, self-pay estimate, financial assistance, billing contact, and visit-prep guidance.
- Privacy and safety: HIPAA-ready portal note, Notice of Privacy Practices path, secure forms, telehealth limits, and no marketing-pixel assumption on sensitive flows.
- Accessibility and inclusion: language access, TTY or contact alternative, keyboard-readable forms, clear text, and emergency guidance.

Failure pattern: a healthcare page that uses calming visuals but hides appointment paths, provider credentials, insurance, privacy, or emergency boundaries is not a responsible health-service website.

### Real Estate / Property / Rental Site

Required sections:

- First viewport: buy/rent/listing context, location, price, bed/bath/area, availability/status, and schedule-tour or contact CTA.
- Search or map context: location search, filters, neighborhood, commute, school/POI, or map/list toggle depending on site type.
- Listing detail: gallery or media, floor plan, amenities, address, building facts, price history or rent estimate, and agent/contact path.
- Price and availability: base rent or listing price, move-in/open-house date, mandatory fees, deposit/application fee, lease term, or status changes.
- Agent and trust: agent/broker identity, license/office, response path, reviews or transaction evidence.
- Compliance: Equal Housing/Fair Housing, MLS/IDX or data-source disclaimer, price/availability change note, privacy, accessibility, and anti-scam guidance for rentals.

Failure pattern: a property page with attractive interiors but no price, address, availability, map context, fees, or showing path fails the real decision.

### Hospitality / Restaurant / Hotel / Local Experience Site

Required sections:

- First viewport: venue/experience type, booking CTA, location, hours or date availability, and phone/directions path on mobile.
- Offer details: restaurant HTML menu or tasting policy; hotel rooms with rate, size, bed, view, amenities; experience itinerary, duration, meeting point, and difficulty.
- Booking confidence: cancellation, deposit, service fee, weather/seasonal rules, dietary/accessibility notes, direct booking perks, or private-event inquiry.
- Location and local SEO: address, NAP consistency, map/directions, parking/transit, opening hours by service, and crawlable menu/room text.
- Trust and imagery: real space/dish/room/experience images, reviews, rating, press or guest proof, and alt text.
- Accessibility and mobile action: accessible entrance/rooms/seating/activity notes plus sticky or easy mobile actions for call, reserve, directions, and book.

Failure pattern: hospitality pages can be atmospheric, but if users cannot see menu/rooms, hours, location, reviews, and reservation path quickly, the design is only a mood piece.

### Law Firm / Legal Service Site

Required sections:

- First viewport: firm/service type, jurisdiction or location, core practice areas, consultation CTA, phone/contact path, and attorney advertising or relationship boundary where appropriate.
- Practice-area pages: who the firm helps, matter types, process, local courts/contexts, timing, fee model when appropriate, and when the matter is out of scope.
- Attorney trust: attorney bio, bar admission, license/jurisdiction, practice focus, office, contact path, and review/case-result policy.
- Legal disclaimer: website is general information, not legal advice; submitting a form does not create an attorney-client relationship; avoid confidential details before engagement.
- Ethics and claims: avoid unsupported "best", "guaranteed", or misleading results claims; case results require clear no-similar-outcome disclaimer.
- Privacy-aware intake: collect only necessary screening details, explain conflict check, and protect sensitive facts.

Failure pattern: a law-firm page that looks authoritative but hides lawyer identity, jurisdiction, practice scope, disclaimers, or consultation boundaries is not usable legal marketing.

### Careers / Recruiting Site

Required sections:

- First viewport: employer identity, role search or open roles, location/remote policy, primary apply/view roles CTA, and candidate value proposition.
- Job search and filters: team, location, experience level, employment type, remote/hybrid/on-site, salary band where relevant, and role status.
- Role detail: responsibilities, qualifications, salary range, location, reporting line, benefits, accommodations, application steps, and realistic timeline.
- Hiring process: stages, interview format, work-sample policy, compensation for take-home work when applicable, and offer/rejection communication expectations.
- Employer trust: values, team proof, benefits, growth, inclusion/EEO, accessibility accommodations, and employee stories without generic culture fluff.
- Candidate privacy: data use, retention, deletion/access request, third-party ATS note, and consent boundaries.

Failure pattern: a careers page that shows culture imagery but hides salary, location, role requirements, application steps, EEO/accommodation, or candidate privacy will frustrate serious applicants.

### Nonprofit / Donation Site

Required sections:

- First viewport: organization name, specific mission, primary donation CTA, service geography or beneficiary, tax-deductible/EIN or charity-status signal, and one secondary proof path such as impact or financials.
- Donation decision: one-time/monthly toggle, suggested amounts, custom amount, concrete impact explanation for each amount, secure payment note, receipt/tax note, processing-fee transparency, and recurring-gift change/cancel path.
- Trust and transparency: annual report, financial allocation, board or governance signal, charity/tax status, donor privacy, contact email, and clear use of funds.
- Impact proof: program ledger, households/projects served, update date, story or field evidence, restricted-fund options, and how donors hear back after giving.
- More ways to help: volunteer shifts, corporate matching, DAF/stocks/mail/check where relevant, peer fundraising, and non-donation participation paths that do not compete with the main gift CTA.
- Post-donation flow: thank-you/receipt state, share or invite option, monthly upgrade prompt, and next impact update expectation.

Failure pattern: a nonprofit page with emotional imagery but no donation flow, tax/trust proof, amount-to-impact mapping, financial transparency, donor privacy, or post-gift feedback is only a cause poster.

### Public Service / Government Transactional Site

Required sections:

- First viewport: service name, responsible agency, who can use it, start/continue CTA, estimated time, fee or no-fee statement, official identity, and help route.
- Transaction path: start page, eligibility checker, materials checklist, task list or stepper, one-question page, save/return path, check answers, submit, confirmation, and status/next-steps page.
- Form quality: labels, keyboard focus, input type hints, error summary, field-level error text, back button, save and continue, review-before-submit, and plain-language recovery.
- Trust and safety: why data is collected, how it is used, retention or privacy notice, payment timing, processing time, alternate channels, assisted digital support, and accessibility statement.
- Mobile completion: the core form flow must work on a phone without horizontal scrolling, hidden CTA, tiny controls, or tables that require pinch zoom.
- Language and tone: write for task completion, not persuasion; CTA labels should name the action such as "Start application", "Check eligibility", or "Submit application".

Failure pattern: a public-service page that looks official but lacks eligibility, form states, error recovery, check answers, confirmation, privacy/data-use notice, or assisted support is a brochure, not a service.

### Marketplace / Listing Directory Site

Required sections:

- First viewport: marketplace category, location or search intent, search CTA, result count or supply signal, trust cue, and a path to compare real listings.
- Listing page: query, location/category semantics, selected filters, sort, result count, listing cards with image or concrete preview, name, rating, review count, price/range, availability, location, key tags, and primary CTA.
- Detail page: provider/product summary, photos or evidence, credentials or verification, pricing model, availability, reviews, policies, comparable alternatives, and booking/quote CTA.
- Filters and states: selected chips, clear/reset, sorting, no-result/empty state with recovery suggestions, and sponsored/organic labeling where relevant.
- Trust and marketplace rules: verified review definition, license/insurance/badge boundary, platform fee/commission, cancellation/refund rules, dispute support, and privacy for quote/contact sharing.
- Review system: rating distribution, review count, recency, verified marker, positive/negative summary, and provider/business reply or moderation policy.
- SEO system: category pages, city/location pages, comparison pages, alternatives pages, FAQ, breadcrumbs, and structured data for listings and local/business entities.

Failure pattern: a marketplace sample with a beautiful hero and generic cards but no search results, filters, detail page, pricing, reviews, verification boundary, no-result state, or SEO content network is not a marketplace.

### AI Model Transparency / Developer Platform Site

Required sections:

- First viewport: platform or model family name, target developer use case, current model/version, model comparison CTA, model-card path, pricing/status/safety proof nearby.
- Model catalog: model ids, version dates, modalities, context windows, output limits, deprecation state, intended use, and migration notes.
- Model card: model id, release date, capabilities, intended use, limitations/misuse boundaries, training or post-training summary where appropriate, eval table, safety notes, API snippet, changelog.
- Benchmarks: score, dataset/source, sample or suite notes, baseline, date, contamination/leakage caveat, selection bias caveat, and what the score does not prove.
- Pricing: input/output/cached/batch or modality units, rate limits, free tier or minimums, enterprise/region notes, calculator example, and billing boundary.
- Safety and trust: risk domains, mitigations, internal vs external evals, red-team or audit summary, privacy/data-retention controls, vulnerability/safety contact.
- Status and operations: component-level status, incident timeline, affected components, last updated time, RSS/API/status history, and maintenance notes.
- Docs and changelog: quickstart, SDK/REST, parameters, errors, rate limits, migration guide, model deprecation, and pricing/API breaking changes kept in sync.

Failure pattern: an AI platform page that markets a "best model" but omits versioning, model-card fields, benchmark methodology, pricing units, safety boundaries, status components, docs, or changelog is not transparent enough for developers.

### Operations Dashboard / Admin Console

Required sections:

- First viewport: product scope, user/team/account selector, current time range or live-refresh state, primary operational KPI, alerts, and the most important work queue.
- Navigation and scope: sidebar or topbar, global search, breadcrumbs or workspace context, team/account switcher, saved views, and permission-aware entry points.
- Data table: 8-12 credible rows where useful, mixed column types, status badges, sorting, pagination or result count, column visibility, row selection, row actions, details drawer or detail page.
- Filters and views: date range, status, owner, priority, tag/search, selected chips, clear/reset, save view, shared view ownership, and empty filtered state with recovery.
- Charts and metrics: KPI cards, trend chart or distribution, unit, time range, legend/tooltip hint, drill-down path, and last-updated note.
- Operations loop: assign owner, approve/reject, mark reviewed, export selected, retry failed job, dangerous-action confirmation, undo/retry where appropriate.
- Exports and audit: CSV/PDF/XLSX/JSONL or warehouse sync, current page vs full result set, export progress, failure feedback, audit log, and role restrictions.
- States and permissions: loading skeleton, first-run empty, filtered no-results, API timeout, stale data, permission denied, disabled actions, and role explanation.

Failure pattern: a dashboard sample with beautiful KPI cards but no table, filters, row actions, saved views, exports, permissions, audit trail, or error/empty/loading states is a landing-page graphic, not an admin console.

### Insurance Claim / High-Trust Transaction Flow

Required sections:

- First viewport: claim type, who can file, start/track CTA, policy or guest lookup path, what to prepare, expected timing, and emergency/human support route.
- Intake flow: incident type, identity/policy lookup, event details, dynamic evidence checklist by claim type, confirmation/review page, and submit receipt.
- Evidence upload: accepted formats and limits, photo guidance, preview, progress, received timestamp, delete/replace, failure reason, retry path, and no lost form data after upload failure.
- Claim center: claim ID, current stage, who is reviewing, missing evidence, next user action, expected next update, submitted files, history, documents, and downloadable estimate/decision.
- Estimate and payment: explain that photo estimates are initial, supplement path, repair-shop or payment options, disagreement/human-review path, and what changes the final amount.
- Notifications: email, SMS, app push, representative message, quiet hours, and clear triggers such as missing evidence, estimate ready, payment sent, or status changed.
- Privacy and support: data use near sensitive uploads, retention/sharing, approved repair partners, phone/chat/TTY/assisted route, emergency boundary, and accessibility alternatives.

Failure pattern: a claim-flow sample that only collects a form but lacks upload receipts, status timeline, estimate boundaries, missing-evidence recovery, notifications, privacy near upload, or human escalation will not feel trustworthy.

### Subscription Media / Streaming Service Site

Required sections:

- First viewport: service identity, content category, preview/browse CTA, subscription CTA, trial length, cancellation statement, and at least one featured title with concrete metadata.
- Catalog and discovery: search, genre/format filters, editorial shelves, title cards with runtime/format/accessibility labels, recommendations, watchlist, and availability/download cues.
- Title detail: synopsis, trailer or preview state, runtime, release/season metadata, captions/audio description/transcript, related titles, watchlist/download actions, and parental or rating notes where relevant.
- Plans and billing: plan comparison, trial terms, billing reminder, monthly/yearly price, downloads/devices/profiles, cancellation path, plan change, invoice/payment settings, and renewal expectations.
- Playback experience: player controls, captions, audio descriptions, playback speed, resume state, offline downloads, device handoff, error/buffering state, and accessibility controls.
- Account trust: profiles, parental controls, device management, viewing history, data export/delete, privacy settings, billing history, and cancellation without dark patterns.

Failure pattern: a streaming sample that is only a poster wall with a signup CTA but lacks catalog filters, title detail, playback/accessibility states, plan terms, cancellation, account controls, or data/device management is not a complete subscription media product.

### Community / Social Membership Platform

Required sections:

- First viewport: community identity, intended audience, join/onboarding CTA, browse rooms secondary path, clear safety/rules cue, and a signal of moderation cadence or member scale.
- Onboarding: interests, community guidelines, room recommendations, profile setup, first-post prompt, notification defaults, and what happens during first-post review.
- Rooms and feed: room directory, room purpose, member count, pinned rules, search/filter, active thread examples, content warning, saved threads, and room mute/leave controls.
- Profile and social graph: display name, role, optional identity fields, featured links, availability, DM permissions, visibility settings, and profile privacy.
- Safety and moderation: report post, block/mute member, content warning, moderator note, review queue, action explanation, appeal path, and transparency around what moderators can see.
- Notifications and privacy: mentions, digests, room mute, quiet hours, moderation alerts, email/app/in-app delivery, data export, deletion, retention notes, and account boundary controls.

Failure pattern: a community sample that shows chat cards or member avatars but lacks onboarding, rules, room purpose, moderation/reporting/blocking, notification controls, profile privacy, or data boundaries will feel unsafe and unfinished.

### Travel Planning / Booking Site

Required sections:

- First viewport: destination/date/guest search, visible search CTA, trip type or accommodation category, trust cue, and a quick path to saved trips or itinerary.
- Search results: query summary, selected filters, sort, result count, list cards with total price, rating/review count, location distance, cancellation/payment policy, availability, and a map/list toggle.
- Map context: markers with price, transit or landmark context, neighborhood boundaries, selected stay state, comparable alternatives, and preserved filters.
- Filters and recovery: price, location, rating, amenities, family/accessibility needs, cancellation/payment policy, selected chips, reset, flexible dates, nearby locations, and no-availability suggestions.
- Itinerary system: saved stays, places, transport, documents, day/time blocks, editable order, conflict warnings, sharing/collaboration where relevant, and offline/export path.
- Booking checkout: guest details, total price breakdown, taxes/fees, cancellation policy, property rules, payment state, error recovery, review-before-booking, and confirmation preview.
- Confirmation and change states: booking ID, receipt, cancellation deadline, calendar/download, what is booked vs only saved, change dates, cancel, refund estimate, and support/property contact.

Failure pattern: a travel sample that is only a scenic hero or generic listing grid but lacks search, map context, filters, total-price clarity, editable itinerary, checkout review, confirmation, or cancellation/change states is not a credible booking product.

### Food Delivery / Online Ordering Site

Required sections:

- First viewport: delivery/pickup address or location check, availability, ETA range, order CTA, reorder secondary path, and no-login browsing where possible.
- Restaurant and menu browsing: open/closed state, cuisine/category filters, delivery/pickup toggle, ETA, delivery fee, minimum order, ratings, dietary labels, sold-out states, and restaurant courier vs platform courier boundary.
- Item customization: required modifiers, optional add-ons, allergy or preparation notes, quantity, unavailable modifier recovery, price updates, and cart persistence after edits.
- Cart and checkout: itemized subtotal, delivery fee, service fee, tax, tip, discount, minimum, delivery instructions, payment, guest checkout, and review-before-place-order.
- Tracking: accepted, preparing, ready/picked up, en-route, delivered, ETA changes, live map or handoff state, courier/restaurant contact, and notification controls.
- Support and receipt: receipt, reorder, rating, missing item, late order, wrong address, refund/credit status, support escalation, and evidence such as delivery photo or item list.

Failure pattern: a food-ordering sample that only shows appetizing menu cards but lacks address availability, item modifiers, fee transparency, cart review, live tracking, courier contact, and support/refund states will leak trust at the exact moment users are hungry.

## Style Mapping

- Bold Signal / Electric Studio: SaaS, operations, institutional product pages.
- Notebook Tabs / Grove / Paper & Ink: documentation, courses, research libraries, knowledge portals.
- Creative Voltage / Neon Cyber: events, launches, conferences, expressive campaigns.
- Vintage Editorial / Swiss Modern / Vellum: reports, magazines, essays, thought-leadership sites.
- Dark Botanical / Studio / Signal: premium service firms, studios, portfolio/case-study sites.
- Soft Editorial / Material / Vellum: ecommerce product pages where texture, material, and review evidence matter.
- Signal / Vellum / Swiss Modern: high-trust financial, insurance, legal, or compliance-heavy landing pages.
- Paper & Ink / Grove / Blue Professional: healthcare clinics, patient portals, insurance/billing pages, and health libraries.
- Swiss Modern / Signal / Long Table: real-estate search, listing detail, floor-plan availability, and market-report pages.
- Vintage Editorial / Soft Editorial / Long Table: restaurants, boutique hotels, tasting menus, room pages, and local experiences.
- Signal / Paper & Ink / Vellum: law firms, policy consultancies, professional-services practices, and reputation-sensitive advisory sites.
- Electric Studio / Notebook Tabs / Swiss Modern: careers pages, job boards, hiring-process pages, and technical recruiting sites.
- Notebook Tabs / Creative Voltage / Paper & Ink: community platforms, learning circles, member directories, and moderated social products.
- Pastel Geometry / Signal / Swiss Modern: travel search, map/list booking flows, itinerary planners, and lightweight trip dashboards.
- Long Table / Electric Studio / Bold Signal: food delivery flows, direct restaurant ordering, status tracking, and compact high-urgency checkout screens.

## Required Website Behavior

Every website-grade page needs:

- A first viewport that says what the site is, who it is for, and what action to take.
- A visible primary CTA and a secondary path where useful.
- Navigation that maps to real sections, not decorative labels.
- Scannable sections built for continuous scrolling.
- Concrete sample copy, names, dates, metrics, prices, locations, or sources.
- Mobile stacking rules for hero, proof, cards, timelines, and CTAs.
- No unresolved placeholders.

## Scoring Gate

Use a two-layer score when auditing or improving website translations:

1. **Task fitness gate**: can the visitor complete the archetype's core decision? If no, the page cannot score above 70 no matter how good it looks.
2. **Industry blocker gate**: if a required high-trust, purchase, application, booking, or compliance fact is missing, cap the score at 60 until fixed.
3. **Visual translation score**: only after the gates pass, evaluate typography, color, motion, spacing, image quality, and template distinctiveness.

Suggested allocation for a 100-point audit:

- 35 points: archetype information architecture and task completion.
- 25 points: industry-specific trust, proof, policy, or decision facts.
- 20 points: visual translation from the source template without slide-like leftovers.
- 10 points: responsive behavior, accessibility, and mobile conversion.
- 10 points: SEO, structured data, crawlable content, and page-system completeness.

Hard caps:

- Missing primary CTA or first-viewport offer clarity: max 65.
- Navigation labels point to empty anchors or decorative sections: max 70.
- Page is only hero plus generic feature cards: max 60.
- Sensitive/high-trust industry lacks required disclosure/privacy/safety boundary: max 55.
- Mobile horizontal overflow or clipped core CTA: max 60.
- Placeholder text, fake lorem content, or unresolved asset: max 50.

## Translation Checklist

Before writing code:

1. Choose the website archetype.
2. Choose the source template/style family.
3. Define the conversion goal: demo, purchase, search, register, read, subscribe, or consult.
4. Run the `DESIGN_JUDGMENT.md` intent and information-architecture checks.
5. Compare the archetype with `DESIGN_REFERENCE_CASES.md`.
6. Decide which slide vocabulary survives: typography, marks, tabs, rules, grids, dark canvas, editorial margins, terminal frame, etc.
7. Replace slide-only structures with website structures: sticky nav, hero, proof band, feature grid, timeline, article body, FAQ, form, footer.
8. Define palette roles with `COLOR_STRATEGY.md`: canvas, ink, muted ink, surface, line, primary accent, secondary accent, and state colors where relevant.
9. Set a target score with `DESIGN_SCORECARD.md`: 88+ for publishable samples, 95+ for flagship gallery items.

## Audit

Before delivery:

- Run the `DESIGN_JUDGMENT.md` audit and improve the weakest risk before publishing.
- Score with `DESIGN_SCORECARD.md`; fix hard caps before polishing taste.
- Verify with `DESIGN_VERIFICATION.md`; include desktop, mobile, dense section, navigation, and placeholder checks for new samples.
- Check the page is not just a PPT cover plus cards.
- Check the first viewport communicates the offer in about five seconds.
- Check CTA appears in the hero and near the end.
- Check the body sections match the archetype requirements above.
- Check each page has concrete sample content instead of generic labels.
- Check the visible screenshot against strong industry examples in the same category: product pages need product proof, docs need search/tasks, events need date/tickets, editorial needs authorship/chapters, service sites need cases/method.
- Check industry-specific blockers: ecommerce needs price/variants/shipping/returns/reviews; education needs outcomes/curriculum/instructor/tuition/refund; financial needs disclosures/security/fees/money-flow/support.
- Check sensitive-service blockers: healthcare needs emergency boundaries and privacy; real estate needs price/map/fees/compliance; hospitality needs booking/menu-or-room/location/hours/mobile actions.
- Check professional/candidate blockers: legal needs jurisdiction/attorney/disclaimer/intake boundary; careers needs role search/JD/salary/location/process/privacy.
- Check social/community blockers: onboarding needs rules before feed; rooms need purpose and member context; users need reporting/blocking, moderation notes, notification controls, profile privacy, and data export/delete paths.
- Check travel blockers: search must be first-class; results need map/list context, persistent filters, total price, cancellation/payment policy, itinerary save path, checkout review, confirmation, and cancel/change recovery.
- Check food-delivery blockers: address availability, ETA, fees, modifiers, cart review, tip/payment, tracking states, courier/restaurant contact, receipt, reorder, and refund/support routes must appear before the sample is considered complete.
- Check mobile layout does not overlap, clip important text, or hide conversion actions.
- If deployed, verify the website index and every sample page return HTTP 200.

## Feedback Loop

For a new style-to-website system:

1. Upgrade the skill rubric before or during implementation if the current rubric cannot judge the requested website type.
2. Build 3-5 concrete website samples across different archetypes.
3. Screenshot each first viewport and at least one body section.
4. Compare each screenshot with strong industry examples in the same category, separating visual taste from task fitness.
5. Score each sample with `DESIGN_SCORECARD.md` and identify the lowest category.
6. Run one focused improvement round on the lowest high-impact category.
7. Verify the change with `DESIGN_VERIFICATION.md`.
8. Note which template vocabularies transfer well and which feel too slide-like.
9. Update this skill with the learned mappings, structure requirements, failure patterns, score caps, and verification checks.
10. Use `FEEDBACK_LOOP.md` when the user asks for sustained or skill-first iteration.
11. Generate the next batch with the revised rules.

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
- B2B SaaS samples should graduate from "dashboard screenshot plus logos" to an evaluation mini-system: product tour, role-specific workflow, integrations, security/procurement page, pricing or plan-fit guidance, implementation expectations, proof metrics, and one primary demo or trial path.
- Docs remains worth iterating until it behaves like a documentation shell: search, left navigation, quickstart path, API reference, changelog, troubleshooting, and version/update context.
- Docs scoring should weight structure over visual taste: information architecture, search UX, docs shell, endpoint quality, task completion, troubleshooting depth, changelog awareness, and LLM readability.
- Developer-doc samples should graduate from "pretty docs portal" to a task and agent-ready system: search, quickstart, API reference with copyable examples, troubleshooting by symptom, changelog with affected endpoints, llms.txt or llms-full.txt, and explicit freshness/version context.
- Event pages approach structural bottleneck faster than other categories: once date, location, speakers, agenda, tickets, venue, sponsor proof, and registration path are visible, gains depend more on real content and checkout flow.
- Event/conference samples should graduate from "poster plus speakers" to a registration mini-system: date, venue, agenda, speaker proof, ticket tiers, inclusions, refund/transfer policy, accessibility, travel/venue logistics, sponsor trust, and a mobile-obvious ticket path.
- Editorial/publication pages have the most remaining design space: issue architecture, article metadata, author credibility, archive/feed rhythm, newsletter/subscription paths, and long-form reading hierarchy.
- Editorial scoring should penalize fake navigation: Archive, Essays, Subscribe, or Author labels must lead to real pages or credible page states, not empty anchors.
- Editorial/publication samples should graduate from "beautiful issue cover" to a publication mini-system: issue page, article page, author profile, archive taxonomy, newsletter page, editorial policy, correction/disclosure/source-note boundaries, reading time, and mobile-readable longform.
- Research report pages need report-specific signals: page count, methodology, contributors, data sources, revision history, citation format, and download/HTML reading paths.
- Research/report samples should graduate from "PDF cover page" to a citable publication mini-system: findings, methodology, sample limits, data sources, downloadable PDF/CSV, HTML edition, contributors, revision history, citation format, correction channel, and reuse terms.
- Premium service/studio pages improve when mood gives way to evidence: ICP, named case studies, challenge/intervention/outcome, method deliverables, founder/team trust, and qualification CTA.
- Agency/studio samples should graduate from "portfolio moodboard" to a qualified-service mini-system: named case studies, measurable outcomes, method stages, package scope, starting prices or budget signals, client-fit criteria, intake expectations, team/founder trust, and a clear fit-call path.
- Hero visuals should become industry objects, not decorative posters: SaaS product UI, docs shell, event poster/ticket/agenda, editorial cover/table of contents, studio case file.
- Multi-page mini-systems are the next step once a single-page archetype hits diminishing returns. A tiny but linked system often teaches the skill more than another section on the same page.
- Ecommerce PDP is a high-value next calibration category because it makes visual systems answer concrete purchase questions: price, variant, stock, delivery, return, warranty, reviews, and product inspection.
- Ecommerce/PDP samples should graduate from "beautiful product poster" to a purchase mini-system: variant state, stock, price, cart preview, shipping timing and cost, returns, warranty, dimensions, care, materials, review summary, and mobile-visible add-to-cart path.
- Education/course pages should be scored by reduced enrollment uncertainty: target learner, concrete outcome, curriculum depth, instructor proof, cohort mechanics, tuition/refund, and student work.
- Cohort/course samples should graduate from "outcome plus syllabus" to an enrollment mini-system: application or checkout path, fit criteria, weekly curriculum, workload, instructor proof, student artifacts, tuition, refund, team invoice, cohort dates, seat count, and post-application expectations.
- Indie and small-company samples should now be the default feedback-loop target: AI micro-SaaS, developer tools, app pages, template stores, service companies, courses, communities, events, docs, and professional portfolios.
- Indie AI SaaS samples should graduate from "AI promise plus CTA" to a self-serve product mini-system: product workflow, specific templates/use cases, visible pricing, docs quickstart, changelog, support limits, privacy/training stance, export/delete controls, and a first useful task.
- Regulated financial, insurance, securities, payments, and medical diagnosis flows are not default template-library targets. If included, they must be framed as regulated-industry samples with explicit role, license, partner, risk, approval, support, and disclosure boundaries.
- Healthcare is adjacent to financial high-trust work but adds patient safety: booking UX, medical credentials, insurance, privacy, emergency guidance, accessibility, and YMYL-safe health claims.
- Healthcare/clinic samples should graduate from "trust cards" to a patient-flow mini-system: appointment type triage, next openings, provider credentials, insurance and self-pay guidance, visit-prep checklist, secure portal/privacy notes, accessibility support, and explicit emergency boundaries before any symptom form.
- Real estate is an excellent stress test for layout because it needs search, map context, listing facts, price/availability, contact, and legal disclosure in the same flow.
- Hospitality should keep atmosphere, but never at the cost of action: menu or room details, hours, location, reviews, phone, directions, booking, cancellation, and accessibility must remain visible.
- Restaurant/hospitality samples should graduate from "mood plus menu" to a booking mini-system: crawlable HTML menu, visible table times, direct reservation path, private dining or events path, cancellation policy, phone/address/hours, parking/directions, accessibility, and mobile-sticky conversion cues.
- Legal/professional-service pages should prioritize trust boundaries over bravado: practice fit, lawyer credentials, jurisdiction, no attorney-client relationship warning, and privacy-aware intake.
- Legal samples should graduate from "firm profile" to a small professional-service system: practice detail pages, attorney profile, consultation intake with conflict check, resource/insights library, jurisdiction notes, disclaimer, and confidential-information boundary.
- Careers pages are strongest when they respect candidate time: searchable roles, transparent ranges, location/remote expectations, interview steps, EEO/accommodations, and candidate data handling.
- Careers/job-board samples should graduate from "culture page plus role cards" to a mini-system: searchable roles, role detail pages, candidate handbook, hiring process, privacy notice, EEO/accommodation path, and explicit remote/location constraints.
- Real-estate/rental samples should graduate from "single attractive listing" to a listing system: searchable inventory, filters, floor-plan detail, fee and deposit disclosures, tour scheduling, neighborhood context, fair-housing language, anti-scam warnings, and fresh price/availability state.
- Subscription-media samples should graduate from "poster wall plus signup" to a membership media system: browse/search catalog, title detail, playback preview, accessibility controls, trial and billing terms, cancellation, account/device/profile controls, watchlist, downloads, and data export/delete.
- Community-platform samples should graduate from "chat-looking cards" to a moderated membership system: onboarding, room discovery, pinned rules, first-post prompt, member profiles, DM permissions, report/block/mute, moderation queue, appeals, notification digests, quiet hours, and privacy/data controls.
- Travel-booking samples should graduate from "destination mood page" to a planning and booking system: date/guest search, map/list results, total-price cards, persistent filters, saved itinerary, checkout review, confirmation, cancellation/change state, support, and no-availability recovery.
- Food-delivery samples should graduate from "menu gallery" to an order lifecycle system: address check, delivery/pickup availability, menu modifiers, cart and fee breakdown, guest checkout, ETA timeline, courier contact, receipt, reorder, and issue/refund handling.
