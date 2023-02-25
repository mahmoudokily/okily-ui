import { PropsWithChildren } from "react";
import styled from "styled-components";
type DrawerContainerProps = {
  children: React.ReactNode;
};

const DrawerContainer = styled.div<DrawerContainerProps>`
  width: 210px;
  min-width: 210px;
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
  return (
    <DrawerContainer>
      <ContentContainer>
        <LogoContainer>
        </LogoContainer>
        {children}
      </ContentContainer>
    </DrawerContainer>
  );
};
