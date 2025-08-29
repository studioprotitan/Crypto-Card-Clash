import { Card, Context, Query } from "../generated/dataconnect";

/**
 * Resolver for the 'cards' query. Fetches all cards belonging to a specific owner.
 * @param args - The query arguments, containing the ownerId.
 * @param ctx - The request context, including the database client.
 * @returns A promise that resolves to an array of Card objects.
 */
export const cards: Query["cards"] = async (
  args: { ownerId: string },
  ctx: Context
): Promise<Card[]> => {
  return ctx.db.card.findMany({
    where: {
      ownerId: { equals: args.ownerId },
    },
  });
};

/**
 * Resolver for the 'defaultCard' query. Fetches the "Glitch Goblin" card.
 */
export const defaultCard: Query["defaultCard"] = async (
  _args: {},
  ctx: Context
): Promise<Card | null> => {
  return ctx.db.card.findFirst({
    where: { name: { equals: "Glitch Goblin" } },
  });
};