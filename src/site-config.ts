import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The underlying collection and URL remain `sessions`; the visible language
// is a dossier's field cable, not a lecture-hall session.
export const sessionLabels = {
  singular: "Briefing",
  plural: "Briefings",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  // Forced, not defaulted: the brief is "hits you immediately, no matter
  // who opens it," and every --at-* token is already computed to pass
  // contrast in dark mode. The trade-off, stated plainly: the footer's
  // light/dark toggle only renders when colorScheme is "auto"
  // (astro-theme-university's Footer.astro), so forcing dark removes
  // visitor choice. Accepted deliberately — see PROCESS.md.
  colorScheme: "dark",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",

  // The card is the same plate the site opens on, cropped to the 1200x630 the
  // scrapers want: whoever follows a shared link sees the photograph they are
  // about to land on, not a second, unrelated one. The credit rides in the alt
  // text because a link preview renders no caption of its own, and CC BY 3.0
  // asks for attribution wherever the image travels.
  socialImage: "/src/assets/images/card.jpg",
  socialImageAlt:
    `${courseMeta.code}: two Boletus edulis fruiting bodies on oak leaf ` +
    "litter, one fallen to show the pore surface. Holger Krisp, CC BY 3.0, " +
    "Wikimedia Commons.",
});
