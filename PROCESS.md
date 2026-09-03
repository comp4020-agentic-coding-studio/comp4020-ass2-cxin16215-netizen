# Process overview

A good university course is one idea held for a semester, not a catalogue of
adjacent topics. Calling Bullshit states a point of view in the title; How to
Make (Almost) Anything is a list of machines that *is* the course. The brief
asked for niche with depth. The obvious nature-direction answer was the
wood-wide web as a finding: trees share, fungi are an internet, the popular
story is the syllabus. I took diplomacy instead — trade, aid, espionage,
sanctions, betrayal as labels on mycorrhizal life — because a diplomatic term
is cheap and a citable biological process is not. The mismatch is the material.

I knew that call beat the obvious one before I accepted a week of copy. If you
can swap the named phenomenon for another metaphor and the sentence still
works, it is not a phenomenon. Weeks 1, 3, 8, 9 and 12 exist to say where the
label overclaims, not only where it fits. Smoothing those weeks later because
they sound less confident would have been the wood-wide-web course again, in a
cleverer vocabulary.

That decision had to survive the agent, not just my notes.
[`869b091`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/869b091)
set the identity.
[`9f43f17`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/9f43f17)
put a metaphor/phenomenon pair on every Briefing and Dispatch, with
carbon-for-nutrient exchange, mycoheterotrophy, allelopathy and vegetative
incompatibility named as processes rather than restated as diplomacy. What the
build cannot see, I encoded twice.
[`a49e94e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/a49e94e)
adds `spec/course-promises.test.ts`: twelve weeks, both node types, a non-empty
metaphor and phenomenon on each, assessments at 100, and at least one lecture
whose `slides` field points at a deck that exists. I read `dist/api/index.json`
for the key names before asserting them.
[`fa68829`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/fa68829)
wrote the rest into `CLAUDE.md`: do not invent a citation; a vague true
sentence beats a precise false one; do not sand the overclaim weeks smooth.

I left the important half untested on purpose. A test can see that a string is
present. It cannot see whether the process is real, or whether the diplomatic
label actually overclaims in the way the body says. `pnpm check` after each of
those commits stayed green. That is backpressure, not a mark.

The same substitution test had to apply to the site. The first dossier chrome
([`7188128`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/7188128))
still read as the starter with stamps. Growing the twelve weeks as one organism
([`f41858a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/f41858a))
— one trunk, twelve fruiting-body nodes, each a real link — is the form that
belongs to this course; the map is still on the homepage. A later stretch of
glow, fog and WebGL camera-moves answered "more atmosphere" with decoration
that would sit on any fungal MOOC. `CLAUDE.md` already had the find-and-replace
rule: if you swap the course title and the layout still works, cut it.
[`eb09c83`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/eb09c83)
threw out the generated hero and put Commons photographs of actual fruiting
bodies on the paper. Glow that was not grown from these twelve weeks had to go,
for the same reason a week without a phenomenon had to go.

What remains untested, and is not being claimed: whether a prospective student
reads the dossier voice as one course rather than a reskin; whether the
photographs read as evidence rather than texture; whether the biology is
actually true. Those judgements were always mine. The harness was written to
keep them that way.
