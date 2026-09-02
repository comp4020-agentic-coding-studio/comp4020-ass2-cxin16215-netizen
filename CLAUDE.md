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

## 3. Process honesty

- `PROCESS.md` cites only commit SHAs that exist and resolve in this repo's
  own history. Write it last, after the commits it cites, never before.
- Commit incrementally as each chunk of work actually lands — course
  identity, visual system, content, spec tests — not as one batch at the
  end. A history with one commit is evidence the process claims are
  retrofitted, not evidence of a clean process.
- Never claim a number or a result that wasn't genuinely produced and
  checked. If something is unverified or unknown, say so — a stated "not
  measured" is worth more than a confident guess.

## 4. Check discipline

- Run `pnpm check` after every week's content lands, not just at the end.
  Fix red immediately; don't let failures accumulate to sort out in one pass.
- Before calling this deliverable finished: `git grep STARTER_CONTENT -- src`
  must return nothing, and `pnpm check:evidence` must pass.
- A green `pnpm check` is backpressure, not a mark — it catches broken
  schemas and dead links, not whether the biology is right or the voice
  holds up. Both of those still need a human read before submission.
