import { runFlow } from "@genkit-ai/flow";
import { defaultCardFlow } from "./defaultCard";
import { describe, it, expect } from "vitest";

describe("DefaultCard Heartbeat", () => {
  it("should always return Glitch Goblin", async () => {
    const result = await runFlow(defaultCardFlow);
    expect(result).toBeDefined();
    expect(result.name).toBe("Glitch Goblin");
  });
});