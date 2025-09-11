// src/hooks/useFuel.ts
import { useState } from "react";

export function useFuel(initialFuel: number = 5) {
  const [fuel, setFuel] = useState(initialFuel);

  const consumeFuel = (amount: number) => {
    setFuel((prev) => Math.max(prev - amount, 0));
  };

  const refuel = () => {
    setFuel(initialFuel);
  };

  return { fuel, consumeFuel, refuel };
}
