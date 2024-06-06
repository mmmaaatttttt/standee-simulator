import StandeeGrid from "components/standee-grid";

function Chart() {
  return (
    <>
      <h1>Chart</h1>
      <StandeeGrid
        tallies={new Array(100).fill(0).map(x => (Math.random() > 0.5 ? 1 : 0))}
      />
    </>
  );
}

export default Chart;
