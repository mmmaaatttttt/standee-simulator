import { useContext } from "react";
import AnimationContext from "contexts/animation-context";

function useAnimationContext() {
  const context = useContext(AnimationContext);

  return context;
}

export default useAnimationContext;
