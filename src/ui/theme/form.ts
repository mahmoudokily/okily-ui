import { Coordinator, ThemeVariable } from "../helpers/types";

export const form: Form = {
  disabledOpacity: 0.7,
  radioSpanSpace: ".46875rem",
  radioSpanFontSize: {
    small: ".875rem",
    default: "1rem",
    large: "1rem",
  },
  inputPadding: {
    small: {
      x: ".5rem",
      y: ".35rem",
    },
    default: {
      x: "0.7rem",
      y: "0.5rem",
    },
    large: {
      x: "1rem",
      y: "0.6rem",
    },
  },
  inputRadius: {
    default: "0.3rem",
    square: "0",
    rounded: "2rem",
  },
  inputFontSize: {
    small: "0.6rem",
    default: "0.7rem",
    large: "0.9rem",
  },
  optionPadding: {
    small: ".15625rem",
    default: ".3125rem",
    large: ".625rem",
  },
  optionMargin: {
    small: {
      x: ".28rem",
      y: ".06rem",
    },
    default: {
      x: ".45rem",
      y: ".125rem",
    },
    large: {
      x: ".5rem",
      y: ".175rem",
    },
  },
  optionFontSize: {
    small: ".875rem",
    default: ".875rem",
    large: "1rem",
  },
};

export interface Form {
  disabledOpacity: number;
  radioSpanSpace: string;
  inputBorder?: string;
  radioSpanFontSize: ThemeVariable<string>;
  inputPadding?: ThemeVariable<Coordinator<string>>;
  inputRadius?: ThemeVariable<string>;
  inputFontSize?: ThemeVariable<string>;
  optionPadding?: ThemeVariable<string>;
  optionMargin?: ThemeVariable<Coordinator<string>>;
  optionFontSize?: ThemeVariable<string>;
}
