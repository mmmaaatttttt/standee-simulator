import { memo } from "react";
import { PlayArrow, Pause, RestartAlt, Settings } from "@mui/icons-material";
import Box from "@mui/material/Box";

type SimulatorButtonsProps = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  openModal: () => void;
  isAtStart: boolean;
  isFinished: boolean;
  isRunning: boolean;
};

const iconStyles = {
  cursor: "pointer",
  fontSize: 60,
  m: 1,
};

function SimulatorButtons({
  start,
  stop,
  reset,
  openModal,
  isAtStart,
  isFinished,
  isRunning,
}: SimulatorButtonsProps) {
  let toggle = null;

  if (!isFinished) {
    toggle = isRunning ? (
      <Pause sx={iconStyles} onClick={stop} />
    ) : (
      <PlayArrow sx={iconStyles} onClick={start} />
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {toggle}
      <RestartAlt sx={iconStyles} onClick={reset} />
      {isAtStart ? <Settings sx={iconStyles} onClick={openModal} /> : null}
    </Box>
  );
}

const MemoizedSimulatorButtons = memo(SimulatorButtons);

export default MemoizedSimulatorButtons;
