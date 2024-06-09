import { useContext } from "react";
import SettingsContext from "contexts/settings-context";

function useSettingsContext() {
  const context = useContext(SettingsContext);

  return context;
}

export default useSettingsContext;
