import { Strategy } from "contexts/settings-context";
import { SliderDataType } from "components/slider-with-title/types";

export type SettingsModalProps = {
  isOpen: boolean;
  close: () => void;
  sliderData: SliderDataType[];
  strategy: Strategy;
  setStrategy: (value: Strategy) => void;
};
