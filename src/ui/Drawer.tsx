import { PropsWithChildren, useState } from "react";
import styled from "styled-components";
import { Absolute } from "./Absolute";
import { Button } from "./button/Button";
type DrawerContainerProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const DrawerContainer = styled.div<DrawerContainerProps>`
  width: ${({ isOpen }) => isOpen ? '200px' : '80px'};
  min-width: ${({ isOpen }) => isOpen ? '200px' : '80px'};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  background-position: center;
`;
const LogoContainer = styled.div`
  width: 100px;
  height: 182px;
  background-color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 20px;
`;
const ContentContainer = styled.div`
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Drawer: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  return (
    <DrawerContainer isOpen={isOpen}>
      <ContentContainer>
        {children}
      </ContentContainer>
      <Absolute bottom={0}>
        <Button onClick={() => SetIsOpen(!isOpen)}>
          Toggle
        </Button>
      </Absolute>
    </DrawerContainer>
  );

};
