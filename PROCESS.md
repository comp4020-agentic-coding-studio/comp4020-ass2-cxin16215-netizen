# Process overview

## What I built

"Underground Diplomacy: Trade, Espionage and Betrayal in the Mycorrhizal
Network" (`BIOG6127`) — a twelve-week postgraduate seminar that reframes
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

The student judged the dossier system still too restrained for what the
brief was actually asking for, and named the missing register directly —
bioluminescent, subterranean, alive — rather than "more polish":

> 太素了，很学术，但是我需要的艺术感不足...bioluminescent, subterranean
> diplomatic world...Introduce bioluminescent glyphs, hyphae textures, spore
> particles, and underground fog...Provide full visual system...
> Implementation-ready HTML/CSS/JS

They also drew the scope line themselves, mid-task, and it mattered: they
are building part of this (the week 1 deck's own photo research and
sourcing, still uncommitted in this working tree as their own in-progress
work) and asked me to stay in my lane rather than duplicate or narrate it.

> 你问的那些东西，多的东西你不用担心，是我在做部分内容，你只管做好你的部分

[`4ec57b7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/4ec57b7)
is my part: a site-wide `mycelium.css` — fog drift and spore-twinkle
pseudo-elements, a glowing nav underline, card hover-lift, a pulsing stamp,
a heading glow — every new colour a separately-named decorative custom
property (`--myco-*`), never a redeclaration of the fixed Slop brand triad
or any token derived from it, so none of it is a candidate for the
accessibility gate to flag and none of it can regress contrast. It reaches
every page through the same mechanism `dossier.css` already proved: a
direct import in the seven pages/layouts that need it explicitly, plus
`PageLayout.astro`'s transitive reach into every MDX page that sets it as
`layout`. `WeekGlyph.astro` adds one hand-authored SVG icon per week, keyed
to the diplomatic term (exhaustive over exactly twelve weeks, unlike
pattern-matching the free-text `metaphor` field) — wired into the three
collection grids, the three detail pages beside their existing `Stamp`, and
`MyceliumMap.astro`'s nodes, whose trunk, branches and pulses gained a
`drop-shadow` glow bloom and a slow idle "breathe" on the trunk.

Running `pnpm check` after these edits caught one real accessibility
violation, in the deck rather than in anything I'd written: `week-01.deck`'s
comparison table had an empty first header cell (`empty-table-header`, axe
rule). I labelled it `Feature` and left the rest of that file — the
student's own in-progress slide content — alone.

The student judged that pass a regression, not an improvement, and said so
plainly:

> 反而更杂乱了...一点感觉都没有...美术资源...几乎完全没有...很素很素

pointing at [emergencemagazine.org/engage](https://emergencemagazine.org/engage/)
and Arknights event pages as the register actually wanted — dark, layered,
a consistent finish across every surface — and asking for the fungal
feeling to hit immediately on open, then extend downward as the page
scrolls. Reading the theme rather than guessing found the root cause:
`colorScheme` defaulted to `"auto"`, which resolves to the visitor's OS
preference — light, for most people — where every effect the previous
commit added was nearly invisible against a near-white background. The
"plain" complaint and the "cluttered" complaint were the same root cause
from two sides: real effects, tuned for a mode most visitors never saw,
with no dominant visual event (there was no hero at all) to organise them
around.

[`28c8a11`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/28c8a11)
forces `colorScheme: "dark"` permanently and extends `CLAUDE.md`'s existing
anti-CGI-glow rule to say plainly what it was always about: generic stock
cliché, not bioluminescence built from this course's own node/glyph system.

[`7067b61`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/7067b61)
rewrites `mycelium.css` from a checklist of small effects into one
palette — near-black soil, a teal/violet duo pushed brighter than the old
dark-mode-only values dared to be — adds a single low-opacity
`feTurbulence` grain overlay site-wide (the "consistent finish" point from
the Arknights reference), adds a Fraunces display face for headings, and
demotes the effects that fire on every page equally so the homepage hero
and map are the two places loud glow is allowed to live.

Mid-pass, the student refined the hero brief further, specifically asking
that the design not stay limited to glowing fungal thread alone — real
soil holds humus and insects too, as quiet decoration, not the subject —
and described the opening as a single camera move rather than a static
image:

> 我觉得我们可以不局限于真菌的地下网络作为页面美术设计...腐殖质，蚂蚁，还是
> 其他的什么都是存在的，也可以加进去作为装饰，只是不要喧宾夺主...我脑海中预想
> 是先出现一篇蘑菇林，然后随着镜头拉近到其中一个皱褶，然后再逐步放大到菌丝，
> 然后我们跟随菌丝看到完整的地下世界

[`a8942ae`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/a8942ae)
answers the camera-move request as literally as hand-authored SVG allows:
`MyceliumHero.astro` pins three scenes — a mushroom forest, one cap's
gills, the hyphae threading through them — in a sticky stage while a tall
spacer scrolls underneath, with a small script turning scroll position
into per-scene opacity/scale so a fading scene visibly grows (flying past
it) and an arriving one grows too (arriving at it). The fourth beat, "the
complete underground world," needed no new scene: the hyphae scene hands
off directly into the existing `MyceliumMap`, which already is that.
Mounted by calling `BaseLayout` directly instead of `ContentLayout`, since
`ContentLayout` only fills the theme's `"hero"` slot when a real
`heroImage` resolves (no page has ever had one, by the content-integrity
rule against invented staff photos) and otherwise falls back to a plain
`<h1>` — which is the fallback this pass replaces.

[`656d22c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/656d22c)
answers the "not limited to fungal thread" request: `MyceliumMap.astro`
gained a handful of humus specks and two small ants near the trunk,
deliberately carrying no glow filter at all, so they read as inert soil
matter the network grows through rather than a second light source
competing with it. The map's own reskin — denser branch clusters, a
blurred root-mass field behind the trunk, gradient-filled node markers,
scroll-triggered node reveal — landed in the same commit.

No image-generation or browser tool exists in this environment. Every new
visual in this pass — the forest, the gills, the hyphae, the humus, the
ants — is hand-authored SVG line and shape art, the same ceiling as every
earlier pass, not a claim that a rendering or image tool was used.

The student then pushed past what SVG can do at all:

> SVG的表达能力还是太有限了，我想做出那种真实商业级别的CG动画，你可以做吗，
> 没有的话能不能采用点其他的东西

I answered plainly rather than oversell the environment: there is no video-
render, 3D-render or CG-compositing tool available here, but a genuinely
richer technology exists that this is a real Astro build for — WebGL, via
Three.js, which is a normal npm dependency rather than anything sandboxed.
The student's go-ahead was direct:

> rebuild the hero's three scenes in Three.js/WebGL，做一下吧

[`0b877be`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/0b877be)
answers it as a strict progressive enhancement rather than a replacement:
the SVG/CSS three-scene hero from `a8942ae` is left completely untouched as
the permanent fallback, and a `<canvas>` is layered on top of it, only ever
switched on when a reduced-motion check and a live `WebGL2RenderingContext`
feature probe both pass. Only then does a dynamic `import("three")` fire; if
scene construction throws for any reason, the exception is swallowed and the
page stays on the SVG version, so no visitor can land on a broken hero.
The WebGL scene keeps the same forest → gill-starburst → hyphae-tangle
progression and the same scroll-driven weighting as the SVG version, but as
real procedural 3D geometry — hash-jittered mushrooms, a radial-blade gill
starburst, `CatmullRomCurve3` hyphae tubes, a `Points` spore field — through
an `EffectComposer` bloom pipeline (`UnrealBloomPass`, ACES filmic
tonemapping). Every asset is still generated in code, none imported: the
same anti-stock-CGI, grown-from-this-course's-own-system rule `28c8a11`
already put in `CLAUDE.md` applies just as much to a shader as to an SVG
path, and the glow colours are the same `--myco-glow`/`--myco-glow-2` tokens
`mycelium.css` already uses, hand-converted from OKLCH to the sRGB hex
Three.js's `Color` API needs rather than approximated by eye.

The student judged that WebGL pass insufficient too, and asked for a bold
redo rather than a tweak — a UI redesign built specifically around a
"mushroom and soil" feeling, and the motion itself fixed:

> 我觉得不够好，大胆点尽管重做吧，UI也要重新设计，要有蘑菇和泥土的气息，
> 同时现在动画也不够丝滑

I split the redo into three separately-verified passes rather than one
large one, so each could be checked in isolation before the next began.

[`7abe523`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/7abe523)
is the motion fix: the scroll listener from `a8942ae` onward had only ever
written CSS variables directly from the raw scroll-event value, so every
`--o-*`/`--s-*` transition snapped rather than eased, and jumped on resize.
Replaced with a continuous `requestAnimationFrame` loop that reads only the
raw scroll progress and chases it with a frame-rate-independent exponential
decay (`damp`, half-life based rather than a fixed per-frame lerp fraction,
so it looks the same at 60Hz and 144Hz) plus a C2-continuous `quinticStep`
ease at every threshold crossing. The WebGL camera's own path changed too,
from two straight-line lerps meeting at a kink to one `CatmullRomCurve3`
sampled by arc length (`getPointAt`, not `getPoint`) — the four camera poses
were never evenly spaced, so equal-parameter steps would have crawled the
long leg and rushed the short one.

[`154916c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/154916c)
is the UI redesign itself: the three SVG/CSS scenes are renamed and rebuilt
around the requested register — Surface (the forest floor), Threshold (the
hero mushroom, now sitting between two soil-strata bands with a root tuber,
water-table beads and insect burrows either side of it), and Undersoil
(rock, groundwater, a root hub, denser detritus). New shared SVG-generator
helpers (`groundLine`, `filamentField`, `rootTendrils`, `blobPath`,
`rockPoints`) replace one-off inline paths so the same wobbly-boundary/
tangle/blob vocabulary is reused across all three scenes instead of redrawn
by hand each time. New `--myco-soil-*`/`-root`/`-rock`/`-water` OKLCH tokens
in `mycelium.css` keep every matte object visually distinct from the
bioluminescent glow tokens, deliberately: soil that glows stops reading as
soil. A shared `FaunaSymbols.astro` module of `<symbol>` defs (ant, beetle,
worm, grub, fleck) replaces the two hand-drawn ants from `656d22c`,
referenced via `<use>` from both `MyceliumMap` and the new hero scenes, so
the same fauna vocabulary reads identically wherever it appears.

[`fc9ef4c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-cxin16215-netizen/commit/fc9ef4c)
carries the same redesign into the WebGL layer, left untouched by both
passes above: a textured strata backdrop wall (a canvas-generated three-band
soil texture, the same "fake it on a scratch canvas" technique
`makeGlowSprite` already used for the spore sprite), a scatter of low-poly
rock boulders, a central root-tuber hub with tapering tendrils (the same
hashed-Catmull-Rom tube technique as the existing hyphae, thicker and matte
rather than glowing), a merged-geometry field of detritus standing in for
fauna (`mergeGeometries` from `three/addons/utils/BufferGeometryUtils.js`,
one draw call), and a couple of moisture beads. Two scope-limiting calls
were made deliberately rather than reached for by default: bloom exclusion
for all this new matte geometry relies on the existing `UnrealBloomPass`
threshold (every new material is non-emissive or barely so) rather than
adding `THREE.Layers`-based selective-bloom masking, and the ground stays a
recoloured flat plane plus a distant backdrop wall rather than becoming a
full pit-cross-section cylinder — both chosen because they are far easier to
get subtly wrong, in a way no test would catch, without a way to see the
result. The forest mushroom count also dropped from 26 to 11, to make room
for the new geometry without the scene reading as more crowded than before.

## Before you ship

`pnpm check` passes: 0 typecheck errors, 36 pages built with 0 accessibility
violations and no broken links, 1 deck checked with no structural
violations, and both `spec/data-integrity.test.ts` and
`spec/course-promises.test.ts` green (5 tests total). `git grep
STARTER_CONTENT -- src` returns nothing.

One thing I could not do and am not claiming: I confirmed the new hero's
three scenes, the map's detritus and ants, and the forced `data-theme="dark"`
attribute are all present and correctly structured in the rendered output —
but I have no way to actually open a browser in this session, at any
viewport, to watch the scroll-driven zoom happen. Whether the forest-to-
gills-to-hyphae sequence actually reads as a camera move rather than three
things fading in turn, whether the timing feels right rather than rushed
or sluggish, whether Fraunces renders well at the sizes used, whether the
pinned stage behaves sanely on a phone's address-bar-collapsing viewport,
and whether the humus/ant decoration is legible at all at the opacity
chosen rather than invisible or, worse, distracting — every one of those is
a human judgement call this file isn't going to fake having made. That
visual pass is still owed before submission.

The same honest gap applies, doubled, to the WebGL hero added in
`0b877be`: I confirmed the scene graph, materials and bloom pipeline are
constructed correctly in code and that `pnpm check` stays green with it in
place, but I have never seen it render, on any GPU, at any viewport. Camera
framing across the four keyframes, whether the bloom exposure reads as
"commercial-grade" or blown out, whether the gill starburst and hyphae
tubes are proportioned the way the SVG version was, and actual frame rate —
none of that has been observed. If the WebGL2 feature probe or the dynamic
import fails for any reason, the page silently falls back to the still-
verified SVG hero, so the worst case is "looks like before," not "broken" —
but whether the WebGL path itself looks right is still owed before
submission, on top of the visual pass above.

The same gap applies to the three-commit redo above (`7abe523`, `154916c`,
`fc9ef4c`). `pnpm check` stayed green after each of the three — 0 typecheck
errors, 36 pages built with 0 accessibility violations and no broken links,
1 deck checked with no structural violations, both spec files green (5
tests) — but that verifies structure and markup, not feel. Whether the
`damp`/`quinticStep` motion fix actually reads as smooth ("丝滑") rather than
just differently-timed, whether Surface/Threshold/Undersoil actually land
as "mushroom and soil" rather than as a relabelling, whether the new WebGL
rock/tuber/detritus geometry is proportioned sensibly and doesn't clip or
overlap the camera path, and whether the bloom-threshold approach to
keeping the new matte objects unlit actually looks unlit rather than dim-lit
— none of that has been seen, for the same reason as before: no browser
exists in this session, at any viewport, on any GPU. That visual pass is
still owed before submission.

This repo has not been made public and has not been shipped. That is a
deliberate later step, not an oversight here.
