import { useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useAnimationFrame from "hooks/useAnimationFrame";
import SimulatorButtons from "components/simulator-buttons";
import StandeeGrid from "components/standee-grid";
import TotalCost from "components/total-cost";

const MIN_STANDEES = 1;
const MAX_STANDEES = 200;
const DEFAULT_STANDEES = 144;

const MIN_COST = 1;
const MAX_COST = 100;
const DEFAULT_RANDOM_COST = 10;
const DEFAULT_GUARANTEED_COST = 30;

const SimulatorContainer = () => {
  const [standeeTallies, setStandeeTallies] = useState<number[]>(
    new Array(DEFAULT_STANDEES).fill(0),
  );
  const [guaranteedCost, setGuaranteedCost] = useState<number>(
    DEFAULT_GUARANTEED_COST,
  );
  const [randomCost, setRandomCost] = useState<number>(DEFAULT_RANDOM_COST);
  const [switchStrategyAfter, setSwitchStrategyAfter] =
    useState<number>(DEFAULT_STANDEES);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const getStandee = useCallback(() => {
    setStandeeTallies((oldTallies) => {
      const foundStandeeCount = oldTallies.filter((tally) => tally > 0).length;
      let standeeIdx;
      if (foundStandeeCount >= switchStrategyAfter) {
        standeeIdx = oldTallies.findIndex((tally) => tally === 0);
      } else {
        standeeIdx = Math.floor(Math.random() * oldTallies.length);
      }
      return oldTallies.map((tally, idx) =>
        idx === standeeIdx ? tally + 1 : tally,
      );
    });
  }, [switchStrategyAfter]);

  useEffect(() => {
    if (standeeTallies.every((tally) => tally === 0)) {
      setTotalCost(0);
    } else if (
      standeeTallies.filter((tally) => tally > 0).length < switchStrategyAfter
    ) {
      setTotalCost((cost) => cost + randomCost);
    } else {
      setTotalCost((cost) => cost + guaranteedCost);
    }
  }, [standeeTallies, guaranteedCost, randomCost, switchStrategyAfter]);

  const { start, stop, isRunning } = useAnimationFrame(getStandee, 600);

  const reset = useCallback(() => {
    stop();
    setStandeeTallies(new Array(standeeTallies.length).fill(0));
    setIsFinished(false);
  }, [stop, standeeTallies.length]);

  useEffect(() => {
    if (standeeTallies.every((tally) => tally > 0)) {
      stop();
      setIsFinished(true);
    }
  }, [standeeTallies, stop]);

  return (
    <Box>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
      >
        <Box>
          <Typography variant="h4" id="modal-modal-title">
            Simulator Settings
          </Typography>
          <Slider
            aria-label="Number of Standees"
            defaultValue={DEFAULT_STANDEES}
            valueLabelDisplay="auto"
            onChange={(_, value) =>
              setStandeeTallies(new Array(value as number).fill(0))
            }
            shiftStep={5}
            step={1}
            min={MIN_STANDEES}
            max={MAX_STANDEES}
          />

          <Slider
            aria-label="Cost for a Random Standee"
            defaultValue={DEFAULT_RANDOM_COST}
            valueLabelDisplay="auto"
            onChange={(_, value) => setRandomCost(value as number)}
            shiftStep={5}
            step={1}
            min={MIN_COST}
            max={MAX_COST}
          />

          <Slider
            aria-label="Cost for a Guaranteed New Standee"
            defaultValue={DEFAULT_GUARANTEED_COST}
            valueLabelDisplay="auto"
            onChange={(_, value) => setGuaranteedCost(value as number)}
            shiftStep={5}
            step={1}
            min={MIN_COST}
            max={MAX_COST}
          />
        </Box>
      </Modal>
      <SimulatorButtons
        start={start}
        stop={stop}
        reset={reset}
        isFinished={isFinished}
        isRunning={isRunning}
        openModal={openModal}
      />
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <TotalCost total={totalCost} />
        </Grid>
        <Grid item sm={12} md={8}>
          <StandeeGrid tallies={standeeTallies} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SimulatorContainer;
