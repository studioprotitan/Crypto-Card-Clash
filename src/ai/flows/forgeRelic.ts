import { defineFlow } from "@genkit-ai/flow";
import { z } from "zod";
import { generate } from "@genkit-ai/ai";

export const forgeRelic = defineFlow(
  {
    name: "forgeRelic",
    inputSchema: z.object({
      card1: z.string(),
      card2: z.string(),
    }),
    outputSchema: z.object({
      name: z.string(),
      rarity: z.enum(["common", "rare", "epic", "legendary"]),
      power: z.number(),
    }),
  },
  async (input, ctx) => {
    const llmResponse = await generate(ctx, {
      model: "models/gemini-1.5-flash",
      input: `Forge a relic from ${input.card1} and ${input.card2}`,
    });
    return llmResponse.output()!;
  }
);
