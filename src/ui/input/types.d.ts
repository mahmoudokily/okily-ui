import { DefaultProps } from "../helpers";
import { JSXElementProps } from "../helpers/CssHelper";
import { Shape, Size, Variant } from "../helpers/types";

export type InputIconProps = {
   $type: "left" | "right";
   $shape?: Shape;
   $size?: Size;
   $disabled?: boolean;
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   $fill?: boolean;
   $size?: Size;
   $variant?: Variant;
   $disabled?: boolean;
   $inputElement?: boolean;
}
export interface Props extends DefaultProps {
   $variant?: Variant;
   $fill?: boolean;
   $withBorder?: boolean;
   $shape?: Shape;
   $size?: Size;
   $error?: string;
   $hint?: string;
   $disabled?: boolean;
   $prefix?: React.ReactNode;
   $suffix?: React.ReactNode;
   $prefixProps?: JSXElementProps;
   $suffixProps?: JSXElementProps;
   $containerProps?: DefaultProps;
   $inputProps?: InputProps;
   $placeholder?: string;
   $withEffect?: boolean;
   $withShadow?: boolean;
   $withGradient?: boolean;
}
export interface InputContainerProps extends DefaultProps {
   $variant?: Variant;
   $fill?: boolean;
   $withBorder?: boolean;
   $shape?: Shape;
   $size?: Size;
   $disabled?: boolean;
   $withShadow?: boolean;
   $withGradient?: boolean;
}
type WithEffectProps = {
   $withEffect?: boolean;
}