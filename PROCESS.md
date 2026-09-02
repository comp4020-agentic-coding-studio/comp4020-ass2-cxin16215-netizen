# Process overview

## What I built

"Underground Diplomacy: Trade, Espionage and Betrayal in the Mycorrhizal
Network" (`SLOP6674`) — a twelve-week postgraduate seminar that reframes
forest fungal (mycorrhizal) networks as a diplomatic system, on the fixed
Slop University template. Every week pairs a diplomatic term with a real,
citable phenomenon in mycorrhizal biology, and several weeks (1, 3, 8, 9, 12
by design) argue explicitly about where that pairing overclaims rather than
just where it fits. Interior pages read as a leaked case file — stamps,
redaction, a mycelium-vein texture, photo-less staff pages — layered on the
platform's fixed brand tokens rather than replacing them. The homepage is
its own centrepiece rather than another case-file page: all twelve weeks
rendered as fruiting-body nodes strung along one animated mycelial trunk,
each a real link to its Briefing.

## How I got here

The brief for this repo is the `start` skill's own: an empty `CLAUDE.md` and
a template whose four content collections (`sessions`, `assessments`,
`lectures`, `people`) are fixed, everything else ours to design. The student
asked me to choose the topic:

> 不用继承,你对此有什么意见吗,我想选自然方向

I proposed several nature-direction framings; the student picked from them
and handed the final call back to me:

> 我比较喜欢4,5,不过感觉这些也不算特别小众?但是也不好说,交给你判断吧

I chose the mycorrhizal-diplomacy pairing because it forces a real check on
every week: a diplomatic term is easy to invent, a citable biological
phenomenon underneath it is not, and the mismatch between the two is
itself interesting material (this became the week 1 "credentials test" and
the week 12 self-audit).

Before writing content, I read the platform rather than guessing at it:
`src/content.config.ts` and the shared `courseNodeSchema` for the exact
shape every collection requires (assessments need both `week` and `due`,
easy to miss), the existing placeholder files for the date cadence and
frontmatter conventions, and — critically — `astro-theme-university`'s
build-time accessibility gate (`a11y-checker.ts`/`a11y-worker.mjs`, which
runs the full axe-core ruleset over every rendered page during `pnpm
build`). That last read directly shaped how the redaction effect is
implemented: a `::after` pseudo-element overlay rather than `color:
transparent` text, because the latter is a real, JSDOM-resolvable contrast
pairing axe would have flagged.

[`a70936d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/a70936d)
fixed a layout gap the starter's MDX pages had (no explicit layout means no
frontmatter title rendered on the page body) before any new content could
rely on it.

[`869b091`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/869b091)
set the course identity — title, code, 2027 semester dates, description,
tags, and the `sessions → Briefings` rename — and deleted the four starter
images `scripts/check-evidence.ts` hash-gates, rather than leaving
photographic placeholders behind a tool that cannot generate real ones.

The student then asked to settle the agent rules before the design work:

> 让我们一起看下当前Claude.md内容,然后针对本次任务进行调整

We read the starter's empty note together and agreed the four rules that
later landed as `CLAUDE.md`. Then the visual brief, in the student's words:

> 目前就这样,然后我想让你作为生物学资深讲师兼设计艺术家,大胆设计一个具有强烈前卫艺术风格的课程网站.

[`7188128`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/7188128)
built the "leaked diplomatic dossier" system in response: `Stamp.astro` (a
rotated case-file badge, reusing the theme's own guaranteed-contrast
`--at-primary`/`--at-on-primary` pairing rather than inventing a new
color), a `.redacted` utility, a hand-authored mycelium-vein SVG texture
used as a background motif, and — since no image-generation tool is
available here — photo-less staff pages that turn the limitation into a
"PHOTO ON FILE / CLEARANCE PENDING" design choice instead of hiding it.

[`9f43f17`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/9f43f17)
is the content pass: all twelve weeks' `sessions` and `lectures` entries,
each carrying `metaphor`/`phenomenon` frontmatter and body text that names
both the diplomatic label and the real phenomenon behind it (carbon-for-
nutrient exchange, mycoheterotrophy, allelopathy, vegetative incompatibility,
and others); the two staff entries (Dr. Marguerite Osei, Tobias Lindqvist);
the two assessments, Field Dispatch (week 6, weight 40) and The Peace
Conference (week 12, weight 60, due at the course's own end date); and the
week 1 deck rewritten for the Credentials week. One YAML frontmatter bug
surfaced immediately on the next check run — a colon inside an unquoted
multi-line description broke the parser — and was fixed before the commit
that follows.

[`a49e94e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/a49e94e)
adds `spec/course-promises.test.ts`, the course's own backpressure: all
twelve weeks carry both node types, every one of those carries a non-empty
metaphor and phenomenon, assessment weights sum to 100, and at least one
lecture's `slides` field resolves to a deck file that actually exists. I
read `dist/api/index.json` directly to confirm the exact key names
(`meta.week`, `meta.metaphor`, `meta.slides`) before writing assertions
against them, rather than guessing the shape from the schema alone.

[`fa68829`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/fa68829)
replaced the empty starter note with the four rules in `CLAUDE.md`:
content integrity (real phenomena, no invented citations, the frontmatter
pair enforced by the new spec test), voice (dossier register, no
AI-slop phrasing), process honesty (this file, written last, citing only
real commits), and check discipline (`pnpm check` after each chunk of
work, `STARTER_CONTENT` swept clean before finishing).

`pnpm check` ran green after every one of these commits, not just at the
end — each commit above reflects a state where typecheck, build (axe
accessibility scan included), the deck compiler, and both spec files
passed before I moved on.

The student's next message was a direct, and fair, correction: the dossier
system read as a reskin of the template's own conventions rather than
something distinctly this course's, and asked for the homepage rebuilt
around the mycelium network itself, with real animation, generating
whatever assets that took.

> 你这个是仿制我们课程网页的设计吗，不行，来点属于我们自己的设计，比如首页整个换成菌丝网络，每个课程在菌丝节点这种，多做点动画和艺术设计，我相信你可以做到的，缺素材尽管生成，要给用户吸引，做出成熟且符合题目的浓烈艺术设计风格吧

[`f41858a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/f41858a)
answers that literally: `MyceliumMap.astro` reads the twelve `sessions`
entries and grows a single trunk through them from a small seeded curve
(two beating sine harmonics, not twelve hand-placed coordinates), converts
that point set to a smooth path with a Catmull-Rom-to-Bezier helper, and
renders each week as a node — a real, keyboard-focusable link to its
Briefing, not a decorative label standing in for one. Carbon-pulses travel
the trunk via SVG `animateMotion`; since SMIL isn't reachable from CSS,
a small inline script mutes it under `prefers-reduced-motion`. There is no
image-generation tool available in this environment — "generate whatever
assets that takes" is answered with hand-authored SVG (the trunk, the
branch tendrils, the node glyphs), not a claim that an image model was
used.

[`079bc1b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/079bc1b)
is a robustness pass on that same commit's honest limitation: with no
browser available to actually look at the phone-width render, I narrowed
the curve's amplitude and the node cards' width, and added a clip as a
last-resort backstop, rather than tune the numbers by eye against a
viewport I can't see.

## Before you ship

`pnpm check` passes: 0 typecheck errors, 36 pages built with 0 accessibility
violations and no broken links, 1 deck checked with no structural
violations, and both `spec/data-integrity.test.ts` and
`spec/course-promises.test.ts` green (5 tests total). `git grep
STARTER_CONTENT -- src` returns nothing.

One thing I could not do and am not claiming: I browsed the built HTML for
every page's structure and confirmed the stamp, redaction, vein-texture and
mycelium-map elements render where expected — node count, animateMotion
presence, link count — but I have no way to actually view `pnpm dev` in a
browser at the desktop or phone marking viewport from this session. That
visual pass — does the trunk's curve actually read as organic rather than
jagged, does a node card clip against the map's edge on a real phone, does
the stamp's rotation look intentional rather than broken, does everything
stay legible in dark mode — is still owed before submission, and is a human
judgement call this file isn't going to fake having made.

This repo has not been made public and has not been shipped. That is a
deliberate later step, not an oversight here.
