import styled from "styled-components";
import { FixedBoxElementProps } from "./types";




export const FixedBoxElement = styled.div<FixedBoxElementProps>(({ theme, boxShadow, width }) => `
    position: fixed;
    z-index: ${theme.zIndex.fixedBox};
    overflow: auto;
    ${boxShadow ? `
        box-shadow: ${theme.fixedBox.boxShadow};
    ` : ""}
    @media(max-width:${theme.grid.breakpoint.medium - 1}px) {
        position: static;
        ${!width ? "width: 100% !important;" : ""}
        height: auto !important;
        max-height: 100% !important;
    }
`)