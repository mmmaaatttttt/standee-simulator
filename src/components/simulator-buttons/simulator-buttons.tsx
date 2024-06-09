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
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {!isFinished && !isRunning && (
        <PlayArrow sx={iconStyles} onClick={start} />
      )}
      {!isFinished && isRunning && (
        <Pause sx={iconStyles} onClick={stop} />
      )}
      {!isAtStart && <RestartAlt sx={iconStyles} onClick={reset} />}
      {isAtStart && <Settings sx={iconStyles} onClick={openModal} />}
    </Box>
  );
}

const MemoizedSimulatorButtons = memo(SimulatorButtons);

export default MemoizedSimulatorButtons;
