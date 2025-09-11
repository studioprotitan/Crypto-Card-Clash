// src/components/Leaderboard.tsx
"use client";
import React from "react";
import styles from "./Leaderboard.module.css";

type Player = {
  id: string;
  wins: number;
  losses: number;
  fuelEfficiency: number;
};

interface LeaderboardProps {
  players: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Player</th>
          <th className={styles.th}>Wins</th>
          <th className={styles.th}>Losses</th>
          <th className={styles.th}>Fuel Efficiency</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id} className={styles.tr}>
            <td className={styles.td}>{player.id}</td>
            <td className={styles.td}>{player.wins}</td>
            <td className={styles.td}>{player.losses}</td>
            <td className={styles.td}>{player.fuelEfficiency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Leaderboard;
