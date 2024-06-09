import { createContext } from "react";

export type Strategy = "random" | "guaranteed" | "mixed";

export type SettingsContextType = {
  guaranteedCost: number;
  randomCost: number;
  numStandees: number;
  switchStrategyAfter: number;
  strategy: Strategy;
  setGuaranteedCost: (value: number) => void;
  setRandomCost: (value: number) => void;
  setNumStandees: (value: number) => void;
  setSwitchStrategyAfter: (value: number) => void;
  setStrategy: (value: Strategy) => void;
};

const SettingsContext = createContext<SettingsContextType>(
  {} as SettingsContextType,
);

export default SettingsContext;
