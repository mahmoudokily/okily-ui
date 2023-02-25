import React from "react";
import styled from "styled-components";
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  size,
  space,
} from "styled-system";
import { DefaultProps } from "./helpers";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, DefaultProps {
  withEffect?: boolean;

}

export const BoxEl = styled.div<BoxProps>`
  box-sizing: border-box;
  ${compose(
  space,
  color,
  size,
  layout,
  background,
  flexbox,
  grid,
  border,
  shadow,
  position
)}
`;


export const Box = React.forwardRef<any, BoxProps>(({ ...props }, ref) => {
  return <BoxEl ref={ref}{...props} />
})

