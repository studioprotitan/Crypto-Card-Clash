import React, { useEffect } from "react";
import { useMultiplayerGame } from "../../hooks/useMultiplayerGame";
import styles from "./Coliseum.module.css";

const Coliseum: React.FC<{ gameId: string; playerId: string }> = ({ gameId, playerId }) => {
  const { playerState, opponentState, turn, initPlayer, spendFuel } =
    useMultiplayerGame(gameId, playerId);

  useEffect(() => {
    initPlayer();
  }, []);

  if (!playerState) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🏛️ Multiplayer Coliseum</h2>
      <p className={styles.turn}>
        It’s {turn === playerId ? "your" : "opponent’s"} turn
      </p>

      <h3 className={styles.fuel}>⛽ Fuel: {playerState.fuel}</h3>
      <button
        className={styles.button}
        onClick={() => spendFuel(10)}
        disabled={turn !== playerId}
      >
        Play Card (-10 Fuel)
      </button>

      <h3>Opponent Fuel: {opponentState?.fuel ?? "??"}</h3>

      <div>
        <h3>Your Captured</h3>
        <pre>{JSON.stringify(playerState.captured, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Coliseum;
