import { useState } from "react";
import useAnimationFrame from "../../hooks/useAnimationFrame";
import Chart from "components/chart";
import StandeeGrid from "components/standee-grid/standee-grid";

const ChartContainer = () => {
  const [standeeTallies, setStandeeTallies] = useState<number[]>(
    new Array(20).fill(0)
  );
  const [guaranteedCost, setGuaranteedCost] = useState<number>(30);
  const [randomCost, setRandomCost] = useState<number>(10);

  const { start, stop } = useAnimationFrame(() => {
    setRandomCost(prevCount => prevCount + 1);
  }, 120); // 30 times per minute

  return (
    <div>
      <h1>Count: {randomCost}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <Chart />
    </div>
  );
};
export default ChartContainer;
