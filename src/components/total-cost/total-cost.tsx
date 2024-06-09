import { memo } from "react";
import { Toll } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TotalCostProps = {
  total: number;
};

function TotalCost({ total }: TotalCostProps) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2">Coins spent:</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "secondary.main",
        }}
      >
        <Typography variant="h1">{total.toLocaleString()}</Typography>
        <Toll sx={{ fontSize: 60 }} />
      </Box>
    </Box>
  );
}

const MemoizedTotalCost = memo(TotalCost);

export default MemoizedTotalCost;
