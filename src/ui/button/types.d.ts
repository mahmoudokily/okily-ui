import { HTMLAttributes } from "react";
import { Shape, Size, Variant } from "../helpers/types";
import { JSXElementProps } from './../helpers/CssHelper';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   $variant?: Variant;
   $iconPosition?: "left" | "right";
   $fill?: boolean;
   $link?: boolean;
   $withBorder?: boolean;
   $shape?: Shape;
   $block?: boolean;
   $fixedSize?: boolean;
   $disabled?: boolean;
   $loading?: boolean;
   $size?: Size;
   $iconProps?: JSXElementProps;
   $icon?: ReactNode
   $withEffect?: boolean;
   $withShadow?: boolean;
   $tooltipText?: string;

}