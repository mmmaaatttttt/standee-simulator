import { useMemo } from "react";
import { TallyType } from "contexts/animation-context";
import useAnimationContext from "hooks/use-animation-context";
import useSettingsContext from "hooks/use-settings-context";
import TotalCost from "components/total-cost";

const totalStandeeCost = (
  tallies: TallyType[],
  randomCost: number,
  guaranteedCost: number,
) =>
  tallies.reduce(
    (cost, tally) =>
      cost + tally.guaranteed * guaranteedCost + tally.random * randomCost,
    0,
  );

function TotalCostContainer() {
  const { randomCost, guaranteedCost } = useSettingsContext();
  const { standeeTallies } = useAnimationContext();

  const total = useMemo(
    () => totalStandeeCost(standeeTallies, randomCost, guaranteedCost),
    [standeeTallies, randomCost, guaranteedCost],
  );

  return <TotalCost total={total} />;
}

export default TotalCostContainer;
