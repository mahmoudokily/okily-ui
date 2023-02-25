import React, { PropsWithChildren } from "react";
import { Tooltip as ReactTooltip, ITooltip } from "react-tooltip";
import styled from "styled-components";
import { ColorProps, LayoutProps } from "styled-system";
import { Typography } from "./Typography";
import 'react-tooltip/dist/react-tooltip.css'

type Props = LayoutProps &
  ColorProps & {
    "data-testid"?: string;
  } & Omit<
    ITooltip,
    | "type"
    | "textColor"
    | "backgroundColor"
    | "className"
    | "wrapper"
    | "overridePosition"
    | "insecure"
  >;

const StyledTooltip = styled(ReactTooltip)``;

export const Tooltip: React.FC<PropsWithChildren<Props>> = ({
  ...props
}) => {
  return (
    <ReactTooltip
      {...props}
    />

  );
};
