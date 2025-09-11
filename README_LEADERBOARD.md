# 🏆 Firestore Leaderboard Scaffold

This scaffold provides a simple real-time leaderboard synced from Firestore.

## 📂 Structure

- `src/hooks/useLeaderboard.ts` → Hook to fetch and subscribe to leaderboard data.
- `src/components/Leaderboard.tsx` → Table UI component to display the leaderboard.

## 📖 Firestore Schema

leaderboard/{playerId}
  wins: number
  losses: number
  fuelEfficiency: number

## 🚀 Usage

In your app:

tsx
import Leaderboard from "./components/Leaderboard";

function App() {
  return <Leaderboard />;
}


Make sure your Firestore contains a `leaderboard` collection with player stats.
