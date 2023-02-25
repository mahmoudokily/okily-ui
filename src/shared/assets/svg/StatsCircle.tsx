import styled from "styled-components";
import { Box } from "../../../ui";

export type Props = {
  percent: number;
}

// export const StatsCircle = styled(Box)<Props>`
// background : ${({percent,theme}) => `conic-gradient(${theme?.colors?.chart} 0% ${percent}% , ${theme.colors.primary} ${percent}% 100%)`};
// border-radius:50%;
// `