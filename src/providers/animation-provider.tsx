import { memo, useState, useCallback, useEffect } from "react";
import useSettingsContext from "hooks/use-settings-context";
import { Strategy } from "contexts/settings-context";
import useAnimationFrame from "hooks/use-animation-frame";
import AnimationContext, { TallyType } from "contexts/animation-context";

type AnimationProviderProps = {
  children: React.ReactNode;
};

const INITIAL_TALLIES: TallyType = {
  guaranteed: 0,
  random: 0,
};

const initializeTallies = (length: number) =>
  Array.from({ length }, () => ({ ...INITIAL_TALLIES }));

const uniqueStandeeCount = (tallies: TallyType[]) =>
  tallies.filter((tally) => tally.guaranteed + tally.random > 0).length;

function AnimationProvider({ children }: AnimationProviderProps) {
  const { numStandees, switchStrategyAfter } = useSettingsContext();
  const [standeeTallies, setStandeeTallies] = useState<TallyType[]>(
    initializeTallies(numStandees),
  );

  useEffect(() => {
    initializeTallies(numStandees);
  }, [numStandees]);

  const getStandee = useCallback(() => {
    setStandeeTallies((oldTallies) => {
      const foundStandeeCount = uniqueStandeeCount(oldTallies);
      let standeeIdx;
      if (foundStandeeCount >= switchStrategyAfter) {
        standeeIdx = oldTallies.findIndex(
          (tally) => tally.guaranteed === 0 && tally.random === 0,
        );
      } else {
        standeeIdx = Math.floor(Math.random() * oldTallies.length);
      }
      return oldTallies.map((tally, idx) => {
        if (idx !== standeeIdx) return tally;
        const newTally = { ...tally };
        const strategy: Strategy =
          foundStandeeCount >= switchStrategyAfter ? "guaranteed" : "random";
        newTally[strategy]++;
        return newTally;
      });
    });
  }, [switchStrategyAfter]);

  const endCheck = useCallback(() => {
    return standeeTallies.every((tally) => tally.guaranteed + tally.random > 0);
  }, [standeeTallies]);

  const { start, stop, reset, isRunning, isAtStart, isFinished } =
    useAnimationFrame(getStandee, endCheck, 600);

  const resetAll = useCallback(() => {
    reset();
    initializeTallies(numStandees);
  }, [reset, numStandees]);

  const value = {
    start,
    stop,
    reset: resetAll,
    isRunning,
    isAtStart,
    isFinished,
    standeeTallies,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

const MemoizedProvider = memo(AnimationProvider);

export default MemoizedProvider;
