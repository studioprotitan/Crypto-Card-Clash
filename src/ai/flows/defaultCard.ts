import { defineFlow } from "@genkit-ai/flow";
import { z } from "zod";
import { DataConnect } from "../../connectors/dataconnect";

const CardTypeSchema = z.object({
  name: z.string(),
  rarity: z.string(), // <- string only for now, avoid enum mismatch
  power: z.number(),
});

export const defaultCardFlow = defineFlow(
  {
    name: "defaultCardFlow",
    inputSchema: z.void(),
    outputSchema: CardTypeSchema,
  },
  async () => {
    const client = await DataConnect.getClient();
    return await client.defaultCard(); // Should always resolve to Glitch Goblin
  }
);