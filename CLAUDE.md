# Underground Diplomacy — agent rules

This course reframes forest fungal (mycorrhizal) networks as a diplomatic
system: trade, aid, espionage, sanctions, betrayal. The frame is a
provocation, not a finding, and every rule below exists to stop the
provocation from quietly turning into a claim nobody checked.

## 1. Content integrity

- Every `sessions` and `lectures` entry must carry both a `metaphor` and a
  `phenomenon` frontmatter key, and the phenomenon must name a real, citable
  biological process — not a restatement of the metaphor in other words.
  `spec/course-promises.test.ts` enforces that both keys are present and
  non-empty; it cannot check that the phenomenon is real, so that part is on
  us.
- Do not invent a citation. If a specific study, researcher, or number isn't
  something we're confident is real, name the phenomenon without the
  specific attribution rather than inventing one to sound rigorous. A vague
  true sentence beats a precise false one.
- Every week's body text has to be willing to say where the diplomatic label
  overclaims, not just where it fits. Weeks 1, 3, 8, 9 and 12 do this
  explicitly by design — do not smooth that self-doubt out of the writing in
  a later pass because it reads less confidently than the rest.

## 2. Voice

- This is a leaked diplomatic dossier about the forest floor, not a
  marketing page for one. Case files, dispatches, briefings, stamps — the
  vocabulary is specific and consistent, not generic "exciting new course"
  filler.
- No AI-slop phrasing: no "dive into," "unlock," "in today's fast-paced
  world," no exclamation-point enthusiasm. If a sentence would read the same
  on any other course's homepage, rewrite it until it wouldn't.
- Match the register set in week 1: precise, slightly dry, willing to
  contradict its own framing when the evidence asks for it.

## 3. Visual system

The Slop brand tokens (`--at-*` in `src/site-config.ts`) stay. Design
work is layout, type hierarchy, paper, stamps, photography and
components on top of those tokens — not a new palette, and not a
`CardGrid` of course-shaped boxes.

This site is a leaked diplomatic dossier about the forest floor. If a
layout would also fit a generic LMS, a startup landing page, or another
SlopU course with the nouns swapped, it is not done.

Open these before touching CSS or a page shell. Steal the named
behaviour, not the brand:

- [Emergence Magazine](https://emergencemagazine.org/) — ecology as
  editorial, not as a nature-stock hero. Slow scrolling, images as the
  subject, print-like type, whitespace that is doing work. They have
  interviewed Suzanne Simard; the forest is treated as a text, not a
  texture overlay.
- [Cabinet Magazine](https://www.cabinetmagazine.org/) — object files
  on a grey paper field. Captions are content, not small print. Images
  get a lot of air. A case file, not a card.
- [Lapham's Quarterly](https://www.laphamsquarterly.org/) — historical
  documents as a magazine. Issue colour, archival metadata (date,
  place, type) sitting in the margin the way a cable header does.
- [National Security Archive](https://nsarchive.gwu.edu/) — actual
  declassified cables. Steal document chrome: file numbers, release
  stamps, redaction bars, "on file" headers. Do not steal the
  university-site wrapper around them.
- [Office of the Historian, FRUS](https://history.state.gov/historicaldocuments)
  — diplomatic volumes as a numbered series. A table of contents that
  reads as a dossier index, not as a course catalog.
- [The Pudding](https://pudding.cool/) — one visual idea carries a
  page. If the homepage is a grid of identical cards, this is the
  counter-example.
- [School for Poetic Computation](https://sfpc.study/) — a school
  website that is not an LMS. Type and a few images do the identity;
  there is no "Welcome to the course" banner.

Do not use glowing "wood-wide web" CGI, stock moss close-ups as a
hero, marketing gradients, or a layout that would survive a find-and-
replace of the course title. Bioluminescent glow is not itself the banned
thing — a hand-built sigil grown from this course's own node/trunk system
(the same twelve weeks as `MyceliumMap`, the same glyph vocabulary as
`WeekGlyph`) is the opposite of a stock CGI cliché. The find-and-replace
test still decides it: decoration that would sit on any course's name
unchanged gets cut; a form built from this course's specific content
earns its place.

## 4. Process honesty

- `PROCESS.md` cites only commit SHAs that exist and resolve in this repo's
  own history. Write it last, after the commits it cites, never before.
- Commit incrementally as each chunk of work actually lands — course
  identity, visual system, content, spec tests — not as one batch at the
  end. A history with one commit is evidence the process claims are
  retrofitted, not evidence of a clean process.
- Never claim a number or a result that wasn't genuinely produced and
  checked. If something is unverified or unknown, say so — a stated "not
  measured" is worth more than a confident guess.

## 5. Check discipline

- Run `pnpm check` after every week's content lands, not just at the end.
  Fix red immediately; don't let failures accumulate to sort out in one pass.
- Before calling this deliverable finished: `git grep STARTER_CONTENT -- src`
  must return nothing, and `pnpm check:evidence` must pass.
- A green `pnpm check` is backpressure, not a mark — it catches broken
  schemas and dead links, not whether the biology is right or the voice
  holds up. Both of those still need a human read before submission.
