# Design Scorecard

Use this after `DESIGN_JUDGMENT.md` to turn qualitative design judgment into a repeatable score and iteration target. Use `DESIGN_REFERENCE_CASES.md` when deciding whether the score matches mature archetype practice.

## Core Rule

Do not score taste alone. Score whether the design helps a specific audience complete a specific decision with enough clarity, trust, and polish.

## Score Bands

- **95-100: Library flagship** — publishable, distinctive, complete, and useful as a future reference.
- **88-94: Publishable** — strong enough to ship; only small refinements remain.
- **78-87: Usable direction** — visually and structurally promising, but one or two important gaps remain.
- **65-77: Draft** — interesting visual direction, but incomplete as a template or website.
- **Below 65: Reset or major rebuild** — the design fails its category job or has serious usability/completion issues.

## Universal 100-Point Rubric

Score every template deck or website sample across these categories:

| Category | Points | What To Judge |
| --- | ---: | --- |
| Intent and category fit | 12 | Audience, job, trust level, conversion path, emotional target. |
| Information architecture | 14 | Category-specific structure, navigation, task flow, page/slide sequence. |
| Visual hierarchy | 12 | First/second/third read, CTA visibility, contrast, scan path, balance. |
| Layout grammar | 12 | Distinct stage geometry, chrome, repetition rules, variation rules. |
| Typography | 8 | Display/body/label/number/caption fit, density, readability, mobile fit. |
| Color strategy | 8 | Roles, hue relationship, contrast, state colors, action color discipline. |
| Evidence and specificity | 12 | Concrete copy, prices, dates, metrics, policies, screenshots, examples. |
| Interaction and states | 8 | Focus/hover, loading, empty, error, disabled, selected, success, recovery. |
| Responsive and thumbnail quality | 8 | Mobile, long labels, dense sections, no overflow, representative thumbnail. |
| Library distinctiveness | 6 | Adds a new layout family, content world, or reusable visual grammar. |

## Hard Caps

Apply caps after the numeric score. A capped sample cannot exceed the listed score until the blocker is fixed.

- Broken page, broken deck navigation, or missing primary artifact: max 45.
- Visible placeholder residue such as TODO, Lorem, `[Topic]`, or unfinished asset labels: max 50.
- Mobile horizontal overflow, clipped core CTA, or unreadable mobile first viewport: max 60.
- Missing primary CTA or no clear next action: max 65.
- Page/deck is only a cover plus generic cards: max 65.
- Category-specific blocker is missing, such as product price, docs search, event date, course curriculum, service case proof, or dashboard table: max 70.
- Color contrast fails for body text or critical UI controls: max 70.
- Navigation points to empty anchors or fake pages in a multi-page sample: max 72.
- Same layout family as nearby samples with only palette/font changes: max 78.
- Regulated or high-trust category hides required boundary, privacy, safety, fee, support, or disclosure information: max 55.

## Deck-Specific Adjustments

For deck templates, weight these checks heavily:

- Slide count and sequence: 8-12 complete slides unless the user requested otherwise.
- Layout spread: cover, contents, system/palette, proof, quote, metrics, comparison, process, close.
- Viewport fitting: every slide fits 100vh without scroll or clipping.
- Navigation: forward/back works and the current slide is legible.
- Thumbnail: actual visual grammar, not a generic title gradient.

If a deck has fewer than 8 slides without a user constraint, cap at 72.

## Website-Specific Adjustments

For website samples, weight these checks heavily:

- First viewport: category, promise, proof, and primary action visible quickly.
- Category body: required structures from `WEBSITE_GRADE.md` appear in real sections or child pages.
- Page system: important nav labels lead to working sections or pages.
- Conversion loop: hero CTA, body CTA, final CTA, and recovery path are coherent.
- SEO/crawlability: key content is text, not only decorative screenshots.

If a website has only a homepage when the archetype requires detail pages, cap at 82 unless the user explicitly requested a single page.

## Feedback Loop Protocol

1. Score the current version across the 10 categories.
2. Apply hard caps.
3. Identify the lowest category that is also important to the user's goal.
4. Make one focused improvement round.
5. Verify with `DESIGN_VERIFICATION.md`.
6. Rescore only the affected categories plus any hard cap.
7. If the lesson generalizes, update the skill using `FEEDBACK_LOOP.md`.
8. Stop when the score reaches publishable range or the remaining issues require new real content/assets from the user.

## Output Format

Use this compact internal format:

```text
Score: 84 / 100
Band: Usable direction
Hard cap: none
Lowest category: Evidence and specificity
Fix next: add concrete pricing, named examples, and policy details
Preserve: editorial split layout and restrained accent use
```

Do not show the full scorecard to the user unless they ask. Use it to decide the next iteration.
