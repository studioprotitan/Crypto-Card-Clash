import { useSubscription } from "@apollo/client";
import { CardUpdatesSubscription } from "../../dataconnect/generated/client";

/**
 * A custom React hook to subscribe to real-time card updates for a specific owner.
 * @param ownerId The ID of the user whose cards are being monitored.
 */
export function useCardUpdates(ownerId: string) {
  const { data, loading, error } = useSubscription(CardUpdatesSubscription, {
    variables: { ownerId },
    skip: !ownerId,
  });

  return {
    updatedCards: data?.cardUpdates || [],
    loading,
    error,
  };
}