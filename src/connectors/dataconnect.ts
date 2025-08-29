import { useQuery, useMutation } from "@apollo/client";
import {
  CardsQuery,
  EnsureDefaultCardMutation,
} from "@dataconnect/generated/client";

/**
 * A custom React hook to manage card data for a specific owner.
 * @param ownerId The ID of the user whose cards are being managed.
 */
export function useCards(ownerId: string) {
  const { data, loading, error } = useQuery(CardsQuery, {
    variables: { ownerId },
    skip: !ownerId, // Don't run the query if ownerId is not available
  });

  const [ensureDefaultCardMutation] = useMutation(EnsureDefaultCardMutation);

  return {
    cards: data?.cards || [],
    loading,
    error,
    ensureDefaultCard: () => ensureDefaultCardMutation({ variables: { ownerId } }),
  };
}