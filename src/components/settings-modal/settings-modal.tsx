import { memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { SettingsModalProps } from "./types";
import { Strategy } from "contexts/settings-context";
import SliderWithTitle from "components/slider-with-title";
import capitalize from "utils/capitalize";

const strategies: Strategy[] = ["guaranteed", "random", "mixed"];

function SettingsModal({
  isOpen,
  close,
  sliderData,
  strategy,
  setStrategy,
}: SettingsModalProps) {
  return (
    <Modal open={isOpen} onClose={close} aria-labelledby="modal-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -10%)",
          width: "75%",
          maxWidth: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          id="modal-modal-title"
          sx={{ textAlign: "center" }}
        >
          Simulator Settings
        </Typography>
        <SliderWithTitle {...sliderData[0]} />
        <SliderWithTitle {...sliderData[1]} />
        <SliderWithTitle {...sliderData[2]} />
        <Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            What Strategy would you like to use?
          </Typography>
          <ButtonGroup
            aria-label="Strategy Selection"
            size="large"
            sx={{ m: 2 }}
          >
            {strategies.map((currStrategy) => (
              <Button
                key={currStrategy}
                color="primary"
                variant={strategy === currStrategy ? "contained" : "outlined"}
                onClick={() => setStrategy(currStrategy)}
              >
                {capitalize(currStrategy)}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        {strategy === "mixed" ? <SliderWithTitle {...sliderData[3]} /> : null}
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={close}
        >
          OK
        </Button>
      </Box>
    </Modal>
  );
}

const MemoizedSettingsModal = memo(SettingsModal);

export default MemoizedSettingsModal;

