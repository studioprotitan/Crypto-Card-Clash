import { Card, Context, Mutation, Rarity } from "../generated/dataconnect";

/**
 * Resolver for the 'ensureDefaultCard' mutation.
 * Finds a card by name or creates it with default values if it doesn't exist.
 * @param args - The mutation arguments, containing the card name.
 * @param ctx - The request context, including the database client.
 * @returns A promise that resolves to the found or created Card object.
 */
export const ensureDefaultCard: Mutation["ensureDefaultCard"] = async (
  args: { name: string },
  ctx: Context
): Promise<Card> => {
  // This is an "upsert" operation: update if exists, insert if not.
  return ctx.db.card.upsert({
    where: { name: args.name },
    update: {}, // No fields to update if it exists
    create: {
      name: args.name,
      rarity: Rarity.common, // Default values for a new card
      power: 1,
    },
  });
};