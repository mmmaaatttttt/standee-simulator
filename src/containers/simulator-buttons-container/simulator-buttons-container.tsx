import SimulatorButtons from "components/simulator-buttons";
import useAnimationContext from "hooks/use-animation-context";

type SimulatorButtonsContainerProps = {
  openModal: () => void;
};

function SimulatorButtonsContainer({
  openModal,
}: SimulatorButtonsContainerProps) {
  const { start, stop, reset, isAtStart, isFinished, isRunning } =
    useAnimationContext();

  return (
    <SimulatorButtons
      start={start}
      stop={stop}
      reset={reset}
      isAtStart={isAtStart}
      isFinished={isFinished}
      isRunning={isRunning}
      openModal={openModal}
    />
  );
}

export default SimulatorButtonsContainer;
