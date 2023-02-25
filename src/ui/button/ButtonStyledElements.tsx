import styled from "styled-components";
import { defaultProps } from "../helpers";
import { CSSHelper } from "../helpers/CssHelper";
import IconElement from "../IconElement";
import Svg from "../Svg";
import { CustomTheme } from "../theme";
import { ButtonProps } from "./types";




const sizeStyles = (t: CustomTheme, v = "default", fixedSize = false) => `
   font-size: ${t.button.fontSize[v]};
        ${fixedSize
      ? `
            width: ${t.button.fixedSize[v]};
            height: ${t.button.fixedSize[v]}; width: ${t.button.fixedSize[v]};
            max-height: ${t.button.fixedSize[v]};
            min-height: ${t.button.fixedSize[v]};


        `
      : `
            padding: ${t.button.padding[v].y} ${t.button.padding[v].x};
            > ${IconElement} {
                padding: 0 ${t.button.padding[v].xHalf};
                margin-top: -${t.button.padding[v].y};
                margin-bottom: -${t.button.padding[v].y};
                &[data-src-icon-position="left"] {
                    margin-right: ${t.button.padding[v].xHalf};
                    margin-left: -${t.button.padding[v].x};
                }
                &[data-src-icon-position="right"] {
                    margin-right: -${t.button.padding[v].x};
                    margin-left: ${t.button.padding[v].xHalf};
                }
            }
        `
   }
`;
export const ButtonElement = styled.button<ButtonProps>`
${({ theme, $block, $withShadow = true, $disabled, $fill, $fixedSize, $iconPosition, $iconProps, $link, $loading, $shape = 'default', $size = 'default', $variant = 'primary', $withBorder = true }) => `
   position:relative;
   overflow:hidden;
   display:inline-flex;
   flex-wrap:noWrap;
   align-items: center;
   justify-content: center;
   align-content: center;
   box-sizing: border-box;
   text-align: center;
   cursor: pointer;
   user-select: none;
   flex-shrink: 0;
   word-wrap: break-word;
   word-break: break-word;
     ${$withShadow ? `
             box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

       `: ``}
     ${Svg}{
        width:${CSSHelper.setIconSize($size, theme)};
        height:${CSSHelper.setIconSize($size, theme)};
      }
   border-radius:${theme?.button?.radius[$shape]};
   ${$withBorder ? `border: solid 1px ${theme?.type?.[$variant]?.main};` : ""}
   transition: ${theme.button?.transition};
   transition-property: border, background, color, fill, box-shadow;
   a& { text-decoration: none; }
   &:focus,&:active {outline: 0;}
   ${$block ? `
        justify-content: center;
        width: 100%;
             `
         : ""
      }
   ${$fixedSize
         ? `       
        justify-content: center;
    `
         : ""
      }
    ${!$link
         ? `
   ${$fill
            ? `
      background: ${theme.type?.[$variant].main};
      color: ${theme.type?.[$variant]?.font};
      fill: ${theme.type?.[$variant]?.font};
      > ${IconElement} { background: ${theme.type?.[$variant]?.main};}
      &[data-src-placeholder-style="true"] {color: ${theme?.type?.[$variant]?.button?.placeholderFill}; }
      &[data-src-active="true"] {
                border-color: ${theme.type?.[$variant].dark};
                background: ${theme.type?.[$variant].dark};
                > ${IconElement} {
                    background: ${theme.type?.[$variant].main};
                }
            }


      
      ` : `
         background: ${theme?.type?.[$variant].button?.background};
            color: ${theme?.type?.[$variant].main};
            fill: ${theme?.type?.[$variant].main};
            &[data-src-placeholder-style="true"] {
                color: ${theme?.type[$variant].button?.placeholder};
            }
    
            &:hover,
            &[data-src-active="true"] {
                background: ${theme?.type?.[$variant].main};
                color: ${theme.type?.[$variant].font};
                fill: ${theme?.type?.[$variant].button?.background};
            }
      
      `}
      
   
   ` : `
        border-color: transparent;
        background: transparent;
        cursor: pointer;
        text-align: left;
        color: ${theme.type[$variant].main};
        fill: ${theme.type[$variant].main};
        &:hover,
        &[data-src-active="true"] {
            color: ${theme.type[$variant].darkest};
            fill: ${theme.type[$variant].darkest};
        }
   `}
   ${$disabled
         ? `
        opacity: ${theme.button.disabledOpacity};
        pointer-events: none;
    `
         : ""
      }
   ${$loading
         ? `
        pointer-events: none;
        > *:not(.src-wave-ripple):not([data-src-loading="true"]) {
            visibility: hidden;
         
        }
    `
         : ""
      }


`}
  ${({ theme, $size, $fixedSize }) => sizeStyles(theme, $size, $fixedSize)}
  ${defaultProps}
`