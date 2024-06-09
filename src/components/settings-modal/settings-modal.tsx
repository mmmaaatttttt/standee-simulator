import { memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { SettingsModalProps } from "./types";
import SliderWithTitle from "components/slider-with-title";

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
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
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
          <ButtonGroup variant="outlined" aria-label="Strategy Selection">
            <Button onClick={() => setStrategy("guaranteed")}>
              Guaranteed
            </Button>
            <Button onClick={() => setStrategy("random")}>Random</Button>
            <Button onClick={() => setStrategy("mixed")}>Mixed</Button>
          </ButtonGroup>
        </Box>
        {strategy === "mixed" ? <SliderWithTitle {...sliderData[3]} /> : null}
      </Box>
    </Modal>
  );
}

const MemoizedSettingsModal = memo(SettingsModal);

export default MemoizedSettingsModal;

