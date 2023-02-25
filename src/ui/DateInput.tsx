import { PropsWithChildren } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { Typography } from "./Typography";

export const StyledDateInput = styled.input`
  border: none;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  width: 100%;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryDark};

  ::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

export type BpDateInputProps = {
  label?: string;
  containerProps?: {} & SpaceProps;
};

export const StyledDateInputContainer = styled.div<SpaceProps>`
  ${space}
`;
export const StyledDateInputLabel = styled(Typography)`
  font-weight: normal;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const DateInput: React.FC<PropsWithChildren<BpDateInputProps>> = ({
  label,
  containerProps,
  ...props
}) => {
  return (
    <StyledDateInputContainer {...containerProps}>
      {label && (
        <StyledDateInputLabel $size="title10">{label}</StyledDateInputLabel>
      )}
      <StyledDateInput type="date" {...props} id="datepicker" />
    </StyledDateInputContainer>
  );
};
