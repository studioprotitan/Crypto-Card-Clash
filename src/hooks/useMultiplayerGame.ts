import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, setDoc, updateDoc, onSnapshot, getDoc } from "firebase/firestore";

type PlayerState = {
  fuel: number;
  deck: string[];
  captured: string[];
  lastMove?: string;
};

export const useMultiplayerGame = (gameId: string, playerId: string) => {
  const [playerState, setPlayerState] = useState<PlayerState | null>(null);
  const [opponentState, setOpponentState] = useState<PlayerState | null>(null);
  const [turn, setTurn] = useState<string>("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "games", gameId), (snap) => {
      if (!snap.exists()) return;
      const data = snap.data();
      if (data.players[playerId]) {
        setPlayerState(data.players[playerId]);
      }
      const oppId = Object.keys(data.players).find((id) => id !== playerId);
      if (oppId) {
        setOpponentState(data.players[oppId]);
      }
      setTurn(data.status.turn);
    });
    return () => unsub();
  }, [gameId, playerId]);

  const initPlayer = async () => {
    const ref = doc(db, "games", gameId);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        players: {
          [playerId]: { fuel: 100, deck: [], captured: [] },
        },
        status: { turn: playerId, winner: null },
      });
    } else {
      await updateDoc(ref, {
        [`players.${playerId}`]: { fuel: 100, deck: [], captured: [] },
      });
    }
  };

  const spendFuel = async (amount: number) => {
    if (!playerState) return;
    await updateDoc(doc(db, "games", gameId), {
      [`players.${playerId}.fuel`]: Math.max(playerState.fuel - amount, 0),
    });
  };

  const captureCard = async (card: string) => {
    if (!playerState) return;
    await updateDoc(doc(db, "games", gameId), {
      [`players.${playerId}.captured`]: [...playerState.captured, card],
    });
  };

  return { playerState, opponentState, turn, initPlayer, spendFuel, captureCard };
};
