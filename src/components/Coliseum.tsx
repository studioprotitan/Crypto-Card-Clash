import React, { useEffect } from "react";
import { useMultiplayerGame } from "../hooks/useMultiplayerGame";

const Coliseum: React.FC<{ gameId: string; playerId: string }> = ({ gameId, playerId }) => {
  const { playerState, opponentState, turn, initPlayer, spendFuel, captureCard } =
    useMultiplayerGame(gameId, playerId);

  useEffect(() => {
    initPlayer();
  }, []);

  if (!playerState) return <div>Loading...</div>;

  return (
    <div style={{ padding: "1rem", border: "2px solid #ccc" }}>
      <h2>🏛️ Multiplayer Coliseum</h2>
      <p>It’s {turn === playerId ? "your" : "opponent’s"} turn</p>

      <h3>⛽ Fuel: {playerState.fuel}</h3>
      <button onClick={() => spendFuel(10)} disabled={turn !== playerId}>
        Play Card (-10 Fuel)
      </button>

      <h3>Opponent Fuel: {opponentState?.fuel ?? "??"}</h3>

      <div style={{ marginTop: "1rem" }}>
        <h3>Your Captured</h3>
        <pre>{JSON.stringify(playerState.captured, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Coliseum;
