import Box from "@mui/material/Box";
import Standee from "components/standee";

type StandeeGridProps = {
  tallies: number[];
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
        <Standee tally={tally} key={idx} />
      ))}
    </Box>
  );
}

export default StandeeGrid;
