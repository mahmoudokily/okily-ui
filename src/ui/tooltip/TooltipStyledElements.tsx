import styled from "styled-components"
import { defaultProps, DefaultProps } from "../helpers";
import { Value } from "../helpers/CssHelper"
import { Size } from "../helpers/types"
import { ArrowElement } from "../popover/PopoverStyledElement"
import { CustomTheme } from './../theme/index';


interface Props extends DefaultProps {
   $variant: string
   arrow: string
   $size: Size;
}

const customKeys = (v: Value, t: CustomTheme) => `
        padding: ${t.tooltip.padding[v].y} ${t.tooltip.padding[v].x};
        font-size: ${t.tooltip.fontSize[v]};
    `


export const TooltipElement = styled.div<Props> `
${({ theme, $variant, arrow }) => `
   position: fixed;
    z-index: ${theme.zIndex.tooltip};
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: ${theme.tooltip.radius};
    background: ${theme.type[$variant].main};
    color: ${theme.type[$variant].font};
    fill: ${theme.type[$variant].font};
   ${arrow == "right" ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem .5rem 0;
            border-right-color: ${theme.type[$variant].main};
        }
    ` : ""}
  ${arrow == "left" ? `
        ${ArrowElement}:before {
            border-width: .5rem 0 .5rem .5rem;
            border-left-color: ${theme.type[$variant].main};
        }
    ` : ""}
 ${arrow == "top" ? `
        ${ArrowElement}:before {
            border-width: .5rem .5rem 0;
            border-top-color: ${theme.type[$variant].main};
        }
    ` : ""}
      ${arrow == "bottom" ? `
        ${ArrowElement}:before {
            border-width: 0 .5rem .5rem .5rem;
            border-bottom-color: ${theme.type[$variant].main};
        }
    ` : ""}

   
   `}
   ${({ $size, theme }) => customKeys($size, theme)}
   ${defaultProps}
   `