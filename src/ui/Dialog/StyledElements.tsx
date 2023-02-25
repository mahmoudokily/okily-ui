import styled, { css } from "styled-components";
import { ButtonProps, CardProps } from "./types";
import { SpaceProps, space } from "styled-system";

export const Overlay = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  height: 100vh;
  min-height: 100vh;
  background: rgba(12, 12, 13, 0.6);
`;
export const Card = styled.div<CardProps>`
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(12, 12, 13, 0.1);
  position: relative;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: 100%;
  max-width: 100%;
  align-items: center;
  background-position: top-left;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;
export const DialogHeader = styled.span<SpaceProps>`
  font-size: ${({ theme }) => theme.typography.title20.fontSize};
  font-weight: ${({ theme }) => theme.typography.title20.fontWeight};
  flex-shrink: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  position:'absolute'
  top:0;
  left:0;
  margin-top:30px;
  color: ${({ theme }) => theme.colors.primaryDark};
  ${space}
`;
export const BodyScrollarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 100px 40px 40px 40px;
  height: 100%;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  flex: 1;
`;
export const DialogBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 20px;
  position: relative;
`;
export const DialogFooter = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap;
  button {
    margin-left: 10px;
  }
  @media screen and (max-width: 460px) {
    justify-content: center;
    align-content: center;
    button {
      margin-top: 10px;
    }
  }
  > button {
    min-width: 170px;
    min-height: 45px;
    border-radius: 10px;
  }
  > button:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  width: auto;
  min-width: 64px;
  padding: 0px 8px;
  height: 32px;
  border-radius: 10px;
  color: #0c0c0d;
  background: rgba(12, 12, 13, 0.1);
  cursor: pointer;
  &:hover {
    background: rgba(12, 12, 13, 0.2);
  }
  transition: background 100ms ease-in-out;

  ${({ primary }) =>
    primary &&
    css`
      background: #0060df;
      color: #ffffff;
      &:hover {
        background: #003eaa;
      }
    `};
  margin: ${({ margin }) => (margin ? margin : "")};
`;
