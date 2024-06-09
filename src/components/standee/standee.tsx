import { memo } from "react";
import { Star, StarBorder } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { keyframes } from "@emotion/react";

const jiggle = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2) rotate(-3deg);
  }
  50% {
    transform: scale(1.2) rotate(3deg);
  }
  75% {
    transform: scale(1.2) rotate(-3deg);
  }
  100% {
    transform: scale(1);
  }
`;

type StandeeProps = {
  tally: number;
};

function Standee({ tally }: StandeeProps) {
  const color = tally === 0 ? grey[600] : "success.main";
  const Icon = tally === 0 ? StarBorder : Star;
  return (
    <Box
      key={tally}
      sx={{
        animation: `${jiggle} 0.6s ease-in-out`,
        alignItems: "center",
        border: 2,
        borderColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        m: 0.5,
        p: 0.5,
      }}
    >
      <Icon sx={{ color }} />
      <Typography paragraph sx={{ color, m: 0, fontSize: "small" }}>
        {tally}
      </Typography>
    </Box>
  );
}

const MemoizedStandee = memo(Standee);

export default MemoizedStandee;
