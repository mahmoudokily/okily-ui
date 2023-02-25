import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { Flex } from "./Flex";
import { defaultProps, DefaultProps } from "./helpers";
import { Typography } from "./Typography";

export const InputLabelElement = styled.div`
  display: flex;
  align-items: center;
`;

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  tooltipText?: string;
  textProps?: DefaultProps;
  labelColor?: string;
};
const LabelElement = styled.label<InputLabelProps>`
  height: auto;
  display: inline-flex;
  margin-bottom: 5px;
  ${({ required }) =>
    required &&
    css`
      &:before {
        content: "*";
        align-items: center;
        color: red;
        margin:0;
        padding:0;
        height:0px;
      }
    `};
  ${defaultProps}
`;
export const InputLabel: React.FC<PropsWithChildren<InputLabelProps>> = ({
  children,
  tooltipText,
  textProps,
  labelColor,
  ...props
}) => {
  return (
    <LabelElement {...props}>
      <Typography
        $size="title10"
        color={labelColor}
        $tooltipText={tooltipText as string}
        {...textProps}
      >
        {children} :
      </Typography>
    </LabelElement>
  );
};
