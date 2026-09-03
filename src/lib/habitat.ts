export const habitats = ["dispatches", "briefings", "returns", "personnel", "orders", "lost"] as const;

export type Habitat = (typeof habitats)[number];

export function habitatFromPath(pathname: string): Habitat {
  if (pathname.includes("/lectures")) return "dispatches";
  if (pathname.includes("/sessions")) return "briefings";
  if (pathname.includes("/assessments")) return "returns";
  if (pathname.includes("/people")) return "personnel";
  if (pathname.includes("/policies")) return "orders";
  return "lost";
}
