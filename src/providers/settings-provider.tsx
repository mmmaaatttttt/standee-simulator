import React, { useState, useEffect } from "react";
import SettingsContext from "contexts/SettingsContext";

const DEFAULT_STANDEES = 144;
const DEFAULT_RANDOM_COST = 10;
const DEFAULT_GUARANTEED_COST = 30;
const DEFAULT_SWITCH_AFTER = 0;

type Strategy = "random" | "guaranteed" | "mixed";

type SettingsProviderProps = {
  children: React.ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [guaranteedCost, setGuaranteedCost] = useState<number>(
    DEFAULT_GUARANTEED_COST,
  );
  const [randomCost, setRandomCost] = useState<number>(DEFAULT_RANDOM_COST);
  const [numStandees, setNumStandees] = useState<number>(DEFAULT_STANDEES);
  const [switchStrategyAfter, setSwitchStrategyAfter] =
    useState<number>(DEFAULT_SWITCH_AFTER);
  const [strategy, setStrategy] = useState<Strategy>("guaranteed");

  useEffect(() => {
    if (strategy === "guaranteed") {
      setSwitchStrategyAfter(DEFAULT_SWITCH_AFTER);
    } else if (strategy === "random") {
      setSwitchStrategyAfter(numStandees);
    }
  }, [numStandees, strategy]);

  return (
    <SettingsContext.Provider
      value={{
        guaranteedCost,
        setGuaranteedCost,
        randomCost,
        setRandomCost,
        numStandees,
        setNumStandees,
        switchStrategyAfter,
        setSwitchStrategyAfter,
        strategy,
        setStrategy,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
