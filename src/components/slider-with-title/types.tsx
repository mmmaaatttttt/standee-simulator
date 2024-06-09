export type SliderChangeHandler = (event: Event, value: number) => void;

export type SliderDataType = {
  value: number;
  title: string;
  onChange: SliderChangeHandler;
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  shiftStep: number;
};
