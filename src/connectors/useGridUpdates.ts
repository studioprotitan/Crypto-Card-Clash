import { useSubscription } from "@apollo/client";
import { GridUpdatesSubscription } from "../../dataconnect/generated/client";

/**
 * A custom React hook to subscribe to real-time grid state updates.
 * @param ownerId The ID of the game/board being monitored.
 */
export function useGridUpdates(ownerId: string) {
  const { data, loading, error } = useSubscription(GridUpdatesSubscription, {
    variables: { ownerId },
    skip: !ownerId,
  });

  return {
    // The grid is a 2D array of cells
    grid: data?.gridUpdates?.cells || [],
    loading,
    error,
  };
}