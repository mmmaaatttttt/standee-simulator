import { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SimulatorButtonsContainer from "containers/simulator-buttons-container";
import StandeeGrid from "components/standee-grid";
import TotalCost from "components/total-cost";
import SettingsModalContainer from "containers/settings-modal-container";

const SimulatorContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <Box>
      <SettingsModalContainer isOpen={isModalOpen} close={closeModal} />
      <SimulatorButtonsContainer openModal={openModal} />
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <TotalCost />
        </Grid>
        <Grid item sm={12} md={8}>
          <StandeeGrid />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SimulatorContainer;
