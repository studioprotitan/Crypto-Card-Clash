import { runFlow } from "@genkit-ai/flow";
import { queryCards } from "./queryCards";
import { forgeRelic } from "./forgeRelic";

describe("Flow Sanity Checks", () => {
  it("should query cards and return a mock result", async () => {
    const result = await runFlow(queryCards, { q: "Test" });
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "Test Warrior" }),
        expect.objectContaining({ name: "Test Mage" }),
      ])
    );
  });

  it("should forge a relic by calling an LLM", async () => {
    const result = await runFlow(forgeRelic, { card1: "Sword", card2: "Shield" });
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("rarity");
    expect(result).toHaveProperty("power");
  });
});