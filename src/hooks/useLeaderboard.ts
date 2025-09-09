import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

type LeaderboardEntry = {
  playerId: string;
  wins: number;
  losses: number;
  fuelEfficiency: number;
};

export const useLeaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const q = query(collection(db, "leaderboard"), orderBy("wins", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const data: LeaderboardEntry[] = [];
      snap.forEach((doc) => {
        data.push(doc.data() as LeaderboardEntry);
      });
      setEntries(data);
    });
    return () => unsub();
  }, []);

  return { entries };
};
