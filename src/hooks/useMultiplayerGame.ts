// src/hooks/useMultiplayerGame.ts
import { useState } from "react";

export type PlayerState = {
  id: string;
  fuel: number;
  captured: string[];
};

export type GameState = {
  inMatch: boolean;
  turn?: string;
  playerState?: PlayerState;
  opponentState?: PlayerState;
  result?: "win" | "loss";
};

export function useMultiplayerGame(
  gameId?: string,
  playerId?: string
): {
  inMatch: boolean;
  turn?: string;
  playerState?: PlayerState;
  opponentState?: PlayerState;
  result?: "win" | "loss";
  joinMatch: () => void;
  endMatch: () => void;
  initPlayer: () => void;
  spendFuel: (amount: number) => void;
  captureCard: (card: string) => void;
} {
  const [gameState, setGameState] = useState<GameState>({ inMatch: false });

  const initPlayer = () => {
    setGameState({
      inMatch: true,
      turn: playerId,
      playerState: {
        id: playerId || "P1",
        fuel: 100,
        captured: [],
      },
      opponentState: {
        id: "P2",
        fuel: 100,
        captured: [],
      },
    });
  };

  const joinMatch = () => initPlayer();

  const endMatch = () => {
    setGameState((prev) => ({
      ...prev,
      inMatch: false,
      result: Math.random() > 0.5 ? "win" : "loss",
    }));
  };

  const spendFuel = (amount: number) => {
    if (!gameState.playerState) return;
    setGameState((prev) => ({
      ...prev,
      playerState: {
        ...prev.playerState!,
        fuel: Math.max(0, prev.playerState!.fuel - amount),
      },
    }));
  };

  const captureCard = (card: string) => {
    if (!gameState.playerState) return;
    setGameState((prev) => ({
      ...prev,
      playerState: {
        ...prev.playerState!,
        captured: [...prev.playerState!.captured, card],
      },
    }));
  };

  return {
    ...gameState,
    joinMatch,
    endMatch,
    initPlayer,
    spendFuel,
    captureCard,
  };
}
