import React, { useState, useEffect } from "react";
import SettingsContext, { Strategy } from "contexts/settings-context";

const INITIAL_STANDEES = 144;
const INITIAL_RANDOM_COST = 10;
const INITIAL_GUARANTEED_COST = 30;
const INITIAL_SWITCH_AFTER = 0;

type SettingsProviderProps = {
  children: React.ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [guaranteedCost, setGuaranteedCost] = useState<number>(
    INITIAL_GUARANTEED_COST,
  );
  const [randomCost, setRandomCost] = useState<number>(INITIAL_RANDOM_COST);
  const [numStandees, setNumStandees] = useState<number>(INITIAL_STANDEES);
  const [switchStrategyAfter, setSwitchStrategyAfter] =
    useState<number>(INITIAL_SWITCH_AFTER);
  const [strategy, setStrategy] = useState<Strategy>("guaranteed");

  useEffect(() => {
    if (strategy === "guaranteed") {
      setSwitchStrategyAfter(INITIAL_SWITCH_AFTER);
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
