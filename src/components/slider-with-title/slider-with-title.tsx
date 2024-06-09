import { memo } from "react";
import Box from "@mui/material/Box";
import Slider, { SliderProps } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { SliderDataType } from "./types";

function SliderWithTitle({
  value,
  title,
  onChange,
  defaultValue,
  min,
  max,
  step,
  shiftStep,
}: SliderDataType) {
  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {title}: {value}
      </Typography>
      <Slider
        aria-label={title}
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        onChange={onChange as SliderProps["onChange"]}
        shiftStep={shiftStep}
        step={step}
        min={min}
        max={max}
      />
    </Box>
  );
}

const MemoizedSliderWithTitle = memo(SliderWithTitle);

export default MemoizedSliderWithTitle;
