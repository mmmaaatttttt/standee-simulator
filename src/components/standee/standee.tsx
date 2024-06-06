import { Star, StarBorder } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

type StandeeProps = {
  tally: number;
};

function Standee({ tally }: StandeeProps) {
  const color = tally === 0 ? grey[600] : "success.main";
  const Icon = tally === 0 ? StarBorder : Star;
  return (
    <Box
      sx={{
        alignItems: "center",
        border: 2,
        borderColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        m: 1,
        p: 1,
      }}
    >
      <Icon sx={{ color }} />
      <Typography paragraph sx={{ color, m: 0 }}>
        {tally}
      </Typography>
    </Box>
  );
}

export default Standee;
