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
- **Ecommerce product detail page**: product media, price, variants, stock, shipping, returns, reviews, material/spec proof, add-to-cart CTA.
- **Cohort course / education site**: audience fit, learning outcomes, curriculum, instructor proof, cohort mechanics, tuition, FAQ/application CTA.
- **High-trust financial product site**: regulatory identity, disclosures, security evidence, fee transparency, money-flow clarity, support, eligibility CTA.
- **Healthcare clinic / health service site**: appointment paths, provider credentials, location, insurance, privacy, emergency boundaries, patient preparation.
- **Real estate / property / rental site**: location search, map context, price, availability, listing facts, agent trust, fees, showing/apply CTA, fair-housing disclosure.
- **Hospitality / restaurant / hotel site**: menu or rooms, reservations, location, hours, reviews, real imagery, accessibility, cancellation or booking policy.
- **Law firm / legal service site**: practice areas, attorney credentials, jurisdiction, disclaimer, consultation path, privacy-aware intake, no-result-guarantee boundary.
- **Careers / recruiting site**: job search, role detail, salary/location/remote policy, hiring process, EEO, accommodations, candidate privacy, mobile apply.

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

### Ecommerce Product Detail Page

Required sections:

- First viewport: product category, name, price or promotion, rating, primary product image, add-to-cart CTA, variant selector, stock, shipping, returns, and warranty/payment cues.
- Media system: main image, detail image, use-case image, zoom or thumbnail affordance, and alt text for concrete product inspection.
- Buying configuration: color, size, capacity, bundle, subscription, or another believable variant state; include unavailable or low-stock logic when relevant.
- Product evidence: materials, dimensions, ingredients/components, care, compatibility, package contents, sizing, or technical specs.
- Trust and conversion: reviews, rating distribution, return policy, warranty, payment options, customer support, and FAQ near the purchase path.
- SEO/structured layer: product URL, Product/Offer/Review/Breadcrumb/FAQ structured-data plan, meta description, image alt, and shipping/return information that search engines and buyers can parse.

Failure pattern: a product page that looks like a beautiful brand poster but lacks price, variants, stock, shipping, returns, reviews, specs, or a clear add-to-cart path is not a complete PDP.

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
- Check industry-specific blockers: ecommerce needs price/variants/shipping/returns/reviews; education needs outcomes/curriculum/instructor/tuition/refund; financial needs disclosures/security/fees/money-flow/support.
- Check sensitive-service blockers: healthcare needs emergency boundaries and privacy; real estate needs price/map/fees/compliance; hospitality needs booking/menu-or-room/location/hours/mobile actions.
- Check professional/candidate blockers: legal needs jurisdiction/attorney/disclaimer/intake boundary; careers needs role search/JD/salary/location/process/privacy.
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
- B2B SaaS samples should graduate from "dashboard screenshot plus logos" to an evaluation mini-system: product tour, role-specific workflow, integrations, security/procurement page, pricing or plan-fit guidance, implementation expectations, proof metrics, and one primary demo or trial path.
- Docs remains worth iterating until it behaves like a documentation shell: search, left navigation, quickstart path, API reference, changelog, troubleshooting, and version/update context.
- Docs scoring should weight structure over visual taste: information architecture, search UX, docs shell, endpoint quality, task completion, troubleshooting depth, changelog awareness, and LLM readability.
- Developer-doc samples should graduate from "pretty docs portal" to a task and agent-ready system: search, quickstart, API reference with copyable examples, troubleshooting by symptom, changelog with affected endpoints, llms.txt or llms-full.txt, and explicit freshness/version context.
- Event pages approach structural bottleneck faster than other categories: once date, location, speakers, agenda, tickets, venue, sponsor proof, and registration path are visible, gains depend more on real content and checkout flow.
- Editorial/publication pages have the most remaining design space: issue architecture, article metadata, author credibility, archive/feed rhythm, newsletter/subscription paths, and long-form reading hierarchy.
- Editorial scoring should penalize fake navigation: Archive, Essays, Subscribe, or Author labels must lead to real pages or credible page states, not empty anchors.
- Research report pages need report-specific signals: page count, methodology, contributors, data sources, revision history, citation format, and download/HTML reading paths.
- Premium service/studio pages improve when mood gives way to evidence: ICP, named case studies, challenge/intervention/outcome, method deliverables, founder/team trust, and qualification CTA.
- Hero visuals should become industry objects, not decorative posters: SaaS product UI, docs shell, event poster/ticket/agenda, editorial cover/table of contents, studio case file.
- Multi-page mini-systems are the next step once a single-page archetype hits diminishing returns. A tiny but linked system often teaches the skill more than another section on the same page.
- Ecommerce PDP is a high-value next calibration category because it makes visual systems answer concrete purchase questions: price, variant, stock, delivery, return, warranty, reviews, and product inspection.
- Ecommerce/PDP samples should graduate from "beautiful product poster" to a purchase mini-system: variant state, stock, price, cart preview, shipping timing and cost, returns, warranty, dimensions, care, materials, review summary, and mobile-visible add-to-cart path.
- Education/course pages should be scored by reduced enrollment uncertainty: target learner, concrete outcome, curriculum depth, instructor proof, cohort mechanics, tuition/refund, and student work.
- Cohort/course samples should graduate from "outcome plus syllabus" to an enrollment mini-system: application or checkout path, fit criteria, weekly curriculum, workload, instructor proof, student artifacts, tuition, refund, team invoice, cohort dates, seat count, and post-application expectations.
- High-trust financial pages should use conservative language and visible boundaries. If partner identity, risk, fees, approval limits, and support are not clear near conversion, the design is incomplete regardless of polish.
- Fintech/financial-service samples should graduate from "trust landing page" to a compliance-aware decision system: eligibility, KYC/verification steps, partner-bank or custodian boundary, FDIC or non-FDIC limits, exact fees, money-flow steps, security controls, support/escalation, account approval risk, and disclosure links beside conversion actions.
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
