import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course promises", () => {
  it("gives every one of the twelve weeks both a Briefing and a Lecture", () => {
    const sessions = nodesOfType("sessions");
    const lectures = nodesOfType("lectures");
    for (let week = 1; week <= 12; week++) {
      expect(
        sessions.some((node) => node.meta?.week === week),
        `week ${week} has no sessions node`,
      ).toBe(true);
      expect(
        lectures.some((node) => node.meta?.week === week),
        `week ${week} has no lectures node`,
      ).toBe(true);
    }
  });

  it("pairs every Briefing and Lecture with a metaphor and a real phenomenon", () => {
    const dossierNodes = [...nodesOfType("sessions"), ...nodesOfType("lectures")];
    expect(dossierNodes.length).toBeGreaterThan(0);
    for (const node of dossierNodes) {
      expect(typeof node.meta?.metaphor, `${node.id} has no metaphor`).toBe("string");
      expect((node.meta?.metaphor as string).trim().length, `${node.id} has an empty metaphor`).toBeGreaterThan(0);
      expect(typeof node.meta?.phenomenon, `${node.id} has no phenomenon`).toBe("string");
      expect(
        (node.meta?.phenomenon as string).trim().length,
        `${node.id} has an empty phenomenon`,
      ).toBeGreaterThan(0);
    }
  });

  it("weights its assessments to exactly 100", () => {
    const assessments = nodesOfType("assessments");
    expect(assessments.length).toBeGreaterThan(0);
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("carries at least one lecture whose slides point at a deck that actually exists", () => {
    const lectures = nodesOfType("lectures");
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length, "no lecture declares a slides deck").toBeGreaterThan(0);
    const deckExists = withSlides.some((node) => {
      const slug = (node.meta?.slides as string).replace(/^\/decks\//, "").replace(/\/$/, "");
      return existsSync(resolve(`src/decks/${slug}.deck.mdx`));
    });
    expect(deckExists, "no lecture's slides field resolves to a real deck file").toBe(true);
  });
});
