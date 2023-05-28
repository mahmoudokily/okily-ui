import { PropsWithChildren } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
}
export const List = styled.ul<PropsWithChildren<SpaceProps>>`
  width: 100%;
  height: 100%;
  flex: 1;
  list-style: none;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: 30px;
  overflow: hidden;
  ${space}
`;
export const LiElement = styled.li<PropsWithChildren<ListItemProps>>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.white : ""};
  height: 39px;
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primaryDark : theme.colors.white};
  margin-left: 30px;
  line-height: 28px;
  margin-bottom: 10px;
  padding: 5px 20px;
  transition: 300ms all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ListItem: React.FC<PropsWithChildren<ListItemProps>> = ({
  children,
  ...props
}) => {
  return <LiElement {...props}>{children}</LiElement>;
};
