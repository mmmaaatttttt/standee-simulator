import StandeeGrid from "components/standee-grid";
import useAnimationContext from "hooks/use-animation-context";

function StandeeGridContainer() {
  const { standeeTallies } = useAnimationContext();

  return <StandeeGrid tallies={standeeTallies} />;
}

export default StandeeGridContainer;
