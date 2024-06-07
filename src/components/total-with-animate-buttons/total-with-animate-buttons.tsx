import { PlayArrow, Pause, RestartAlt } from "@mui/icons-material";

type TotalWithAnimateButtonsProps = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  isRunning: boolean;
  total: number;
};

function TotalWithAnimateButtons({
  start,
  stop,
  reset,
  isRunning,
  total,
}: TotalWithAnimateButtonsProps) {
  const toggle = isRunning ? (
    <Pause onClick={stop} />
  ) : (
    <PlayArrow onClick={start} />
  );

  return (
    <>
      {toggle}
      <RestartAlt onClick={reset} />
      {total.toLocaleString()}
    </>
  );
}

export default TotalWithAnimateButtons;
