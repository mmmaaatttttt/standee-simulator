import { createContext } from "react";

export type TallyType = {
  guaranteed: number;
  random: number;
};

export type AnimationContextType = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  isRunning: boolean;
  isAtStart: boolean;
  isFinished: boolean;
  standeeTallies: TallyType[];
};

const AnimationContext = createContext<AnimationContextType>(
  {} as AnimationContextType,
);

export default AnimationContext;
