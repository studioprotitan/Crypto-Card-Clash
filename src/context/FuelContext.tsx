import React, { createContext, useContext, useState, ReactNode } from "react";

type FuelContextType = {
  fuel: number;
  spendFuel: (amount: number) => void;
  refuel: (amount: number) => void;
};

const FuelContext = createContext<FuelContextType | undefined>(undefined);

export const FuelProvider = ({ children }: { children: ReactNode }) => {
  const [fuel, setFuel] = useState<number>(100);

  const spendFuel = (amount: number) => {
    setFuel((prev) => Math.max(prev - amount, 0));
  };

  const refuel = (amount: number) => {
    setFuel((prev) => prev + amount);
  };

  return (
    <FuelContext.Provider value={{ fuel, spendFuel, refuel }}>
      {children}
    </FuelContext.Provider>
  );
};

export const useFuel = (): FuelContextType => {
  const ctx = useContext(FuelContext);
  if (!ctx) throw new Error("useFuel must be used inside a FuelProvider");
  return ctx;
};
