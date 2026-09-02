import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

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
});
