import Box from "@mui/material/Box";
import Standee from "components/standee";

type StandeeGridProps = {
  tallies: number[];
};

function StandeeGrid({ tallies }: StandeeGridProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
        borderRadius: 2,
        border: 2,
        borderColor: "primary.main"
      }}
    >
      {tallies.map((tally, idx) => (
        <Standee tally={tally} key={idx} />
      ))}
    </Box>
  );
}

export default StandeeGrid;
