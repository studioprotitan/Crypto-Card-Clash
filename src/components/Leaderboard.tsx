import React from "react";
import { useLeaderboard } from "../hooks/useLeaderboard";

const Leaderboard: React.FC = () => {
  const { entries } = useLeaderboard();

  return (
    <div style={{ padding: "1rem", border: "2px solid #444" }}>
      <h2>🏆 Coliseum Leaderboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #999" }}>Player</th>
            <th style={{ borderBottom: "1px solid #999" }}>Wins</th>
            <th style={{ borderBottom: "1px solid #999" }}>Losses</th>
            <th style={{ borderBottom: "1px solid #999" }}>Fuel Efficiency</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i}>
              <td>{entry.playerId}</td>
              <td>{entry.wins}</td>
              <td>{entry.losses}</td>
              <td>{entry.fuelEfficiency.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
