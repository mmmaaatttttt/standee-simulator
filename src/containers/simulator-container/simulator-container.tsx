import { useState, ChangeEvent } from "react";
import useAnimationFrame from "../../hooks/useAnimationFrame";
import StandeeGrid from "components/standee-grid/standee-grid";
import Slider from "@mui/material/Slider";

const MIN_STANDEES = 1;
const MAX_STANDEES = 200;
const DEFAULT_STANDEES = 144;

const SimulatorContainer = () => {
  const [standeeTallies, setStandeeTallies] = useState<number[]>(
    new Array(DEFAULT_STANDEES).fill(0),
  );
  const updateStandeeTallies = (value: number) => {
    setStandeeTallies(new Array(value).fill(0));
  };
  const [guaranteedCost, setGuaranteedCost] = useState<number>(30);
  const [randomCost, setRandomCost] = useState<number>(10);

  const { start, stop } = useAnimationFrame(() => {
    setRandomCost((prevCount) => prevCount + 1);
  }, 120); // 30 times per minute

  return (
    <div>
      <Slider
        aria-label="Number of Standees"
        defaultValue={DEFAULT_STANDEES}
        valueLabelDisplay="auto"
        onChange={(_, value) => updateStandeeTallies(value as number)}
        shiftStep={5}
        step={1}
        min={MIN_STANDEES}
        max={MAX_STANDEES}
      />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <StandeeGrid tallies={standeeTallies} />
    </div>
  );
};
export default SimulatorContainer;
