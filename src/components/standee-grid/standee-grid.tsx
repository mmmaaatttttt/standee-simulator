import { memo } from "react";
import Box from "@mui/material/Box";
import Standee from "components/standee";
import { TallyType } from "contexts/animation-context";

type StandeeGridProps = {
  tallies: TallyType[];
};

function StandeeGrid({ tallies }: StandeeGridProps) {
  return (
    <Box
      sx={{
        border: 2,
        borderColor: "primary.main",
        borderRadius: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        p: 2,
        mx: 3,
      }}
    >
      {tallies.map((tally, idx) => (
        <Standee tally={tally.guaranteed + tally.random} key={idx} />
      ))}
    </Box>
  );
}

const MemoizedStandeeGrid = memo(StandeeGrid);

export default MemoizedStandeeGrid;
