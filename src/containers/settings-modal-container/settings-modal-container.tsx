import { useCallback, useMemo } from "react";
import useSettingsContext from "hooks/use-settings-context";
import SettingsModal from "components/settings-modal";
import { SliderChangeHandler } from "components/slider-with-title/types";

type SettingsModalContainerProps = {
  isOpen: boolean;
  close: () => void;
};

const MIN_COST = 1;
const MAX_COST = 100;

const MIN_STANDEES = 1;
const MAX_STANDEES = 200;

function SettingsModalContainer({
  isOpen,
  close,
}: SettingsModalContainerProps) {
  const settingsContext = useSettingsContext();

  const {
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
  } = settingsContext;

  const onStandeeChange: SliderChangeHandler = useCallback(
    (_, value) => {
      setNumStandees(value);
    },
    [setNumStandees],
  );

  const onGuaranteedCostChange: SliderChangeHandler = useCallback(
    (_, value) => {
      setGuaranteedCost(value);
    },
    [setGuaranteedCost],
  );

  const onRandomCostChange: SliderChangeHandler = useCallback(
    (_, value) => {
      setRandomCost(value);
    },
    [setRandomCost],
  );

  const onSwitchStrategyAfterChange: SliderChangeHandler = useCallback(
    (_, value) => {
      setSwitchStrategyAfter(value);
    },
    [setSwitchStrategyAfter],
  );

  const sliderData = useMemo(() => {
    return [
      {
        value: numStandees,
        onChange: onStandeeChange,
        title: `Total Number of Standees: ${numStandees}`,
        min: MIN_STANDEES,
        max: MAX_STANDEES,
        step: 1,
        shiftStep: 5,
      },
      {
        value: randomCost,
        onChange: onRandomCostChange,
        title: `Cost of a random Standee: ${randomCost}`,
        min: MIN_COST,
        max: MAX_COST,
        step: 1,
        shiftStep: 5,
      },
      {
        value: guaranteedCost,
        onChange: onGuaranteedCostChange,
        title: `Cost of a guaranteed new Standee: ${guaranteedCost}`,
        min: MIN_COST,
        max: MAX_COST,
        step: 1,
        shiftStep: 5,
      },
      {
        value: switchStrategyAfter,
        onChange: onSwitchStrategyAfterChange,
        title: `Switch to guaranteed strategy after ${switchStrategyAfter} Standee${
          switchStrategyAfter !== 1 ? "s" : ""
        } collected`,
        min: 0,
        max: numStandees,
        step: 1,
        shiftStep: 5,
      },
    ];
  }, [
    numStandees,
    onStandeeChange,
    randomCost,
    onRandomCostChange,
    guaranteedCost,
    onGuaranteedCostChange,
    switchStrategyAfter,
    onSwitchStrategyAfterChange,
  ]);

  return (
    <SettingsModal
      isOpen={isOpen}
      close={close}
      sliderData={sliderData}
      strategy={strategy}
      setStrategy={setStrategy}
    />
  );
}

export default SettingsModalContainer;
