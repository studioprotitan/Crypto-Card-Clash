import { defineFlow } from "@genkit-ai/flow";
import { z } from "zod";
import { createClient } from "@dataconnect/generated";

// Define Zod schema for AI validation
export const cardOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["PILOT", "MONSTER", "RELIC", "BUFF", "AVATAR"]),
  imageUrl: z.string().optional(),
  metadataUrl: z.string().optional(),
  createdAt: z.string(),
  isOwned: z.boolean().optional(),
});

type Card = z.infer<typeof cardOutputSchema>;

// Define the Genkit flow
export const queryCardsFlow = defineFlow(
  {
    name: "queryCards",
    inputSchema: z.object({
      ownerId: z.string(),
    }),
    outputSchema: z.array(cardOutputSchema),
  },
  async (input) => {
    const client = createClient();
    const result = await client.cards({ ownerId: input.ownerId });

    // Ensure strong typing for each card
    const cards: Card[] = result.cards.map((card: any) => ({
      ...card,
      isOwned: card.isOwned ?? false,
    }));

    return cards;
  }
);
