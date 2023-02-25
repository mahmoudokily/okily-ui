import { ObjectOrArray, Theme } from "styled-system";
import { BreakPoints, breakpoints } from "./breakpoints";
import { colors, Colors as ColorsTypes } from "./colors";
import { Typographies, typography } from "./typography";
import "styled-components";
import { fontSizes, FontSizes as FontSizesTypes } from "./fonts";
import { Button as ButtonProps, button } from "./button";
import { type, Types } from "./type";
import { form, Form } from "./form";
import { Popover, popover } from "./popover";
import { zIndex, ZIndex } from "./zIndex";
import { Alert, alert } from "./alert";
import { Grid, ThemeVariable } from "../helpers/types";
import { Value } from "../helpers/CssHelper";
import { iconSize, IconSize } from "./iconSize";
import DV from "../helpers/DV";
import { tooltip, Tooltip } from "./tooltip";
export interface CustomTheme {
  colors: ColorsTypes;
  breakpoints: BreakPoints;
  typography: Typographies;
  fontSizes: FontSizesTypes;
  button: ButtonProps;
  type: Types;
  form: Form;
  popover: Popover;
  zIndex: ZIndex;
  alert: Alert;
  tooltip: Tooltip;
  iconSize: IconSize
  waveEffect: {
    transition: string
  },
  fixedBox: {
    boxShadow: string
  },
  grid: {
    breakpoint: Grid
    containerWidth: Grid
    columnGap: string
  },
  overlay: {
    space: string
    background: string
  }


}

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme { }
  export interface Colors extends ColorsTypes { }
  export interface FontSizes extends FontSizesTypes { }
}

const theme: CustomTheme = {
  typography,
  breakpoints,
  colors,
  fontSizes,
  button,
  type,
  form,
  popover,
  zIndex,
  alert,
  iconSize,
  waveEffect: {
    transition: `${DV.WAVE_EFFECT_TRANSITION_TYPE} ${DV.WAVE_EFFECT_TRANSITION_DURATION}ms 0ms`
  },
  fixedBox: {
    boxShadow: "0 0 35px 0 rgba(154,161,171,.15)"
  },
  grid: {
    breakpoint: {
      small: 576,
      medium: 768,
      large: 992,
      xlarge: 1200
    },
    containerWidth: {
      small: 540,
      medium: 720,
      large: 960,
      xlarge: 1140
    },
    columnGap: "15px"
  },
  overlay: {
    space: "1.75rem",
    background: "rgba(0,0,0,.3)"
  },
  tooltip
};

export default theme;
