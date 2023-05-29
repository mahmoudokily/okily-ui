import styled, { css } from "styled-components";
import { Box } from "../Box";
import Svg from "../Svg";
import { Typography } from "../Typography";
import { defaultProps } from "../helpers";
import { CSSHelper } from "../helpers/CssHelper";
import { CustomTheme } from "../theme";
import { InputContainerProps, InputIconProps, InputProps } from "./types";

const placeholder = [
  "::-webkit-input-placeholder",
  "::-moz-placeholder",
  ":-moz-placeholder",
  ":-ms-input-placeholder",
  "::placeholder",
];

export const InputError = styled(Typography).attrs({ variant: "h6" })`
  margin-top: 2px;
  color: ${({ theme }) => theme.type.danger.main};
`;

export const InputIcon = styled(Box)<InputIconProps>`
  ${({ theme, $type, $shape = "default", $size = "default ", $disabled }) => `
    overflow: hidden;
    flex: 0 0 auto;
    display: inline-flex;
    height:100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;

      ${
        $disabled
          ? `
        opacity: ${theme?.form?.disabledOpacity};
        cursor: not-allowed;
        user-select: none;
        `
          : ``
      }
    font-size: ${theme?.form?.inputFontSize?.[$size]};
        ${
          $type === "left"
            ? `
            border-top-left-radius: ${theme?.form?.inputRadius?.[$shape]};
            border-bottom-left-radius: ${theme?.form?.inputRadius?.[$shape]};
        `
            : `
            
            border-top-right-radius: ${theme?.form?.inputRadius?.[$shape]};
            border-bottom-right-radius: ${theme?.form?.inputRadius?.[$shape]};
        `
        }
    }`}
`;

const sizeStyles = (v = "large", t: CustomTheme) => `
        padding: ${t?.form?.inputPadding?.[v]?.y} ${t?.form?.inputPadding?.[v]?.x};
        font-size: ${t?.form?.inputFontSize?.[v]};
    `;

export const InputElement = styled.input<InputProps>`
  ${({
    theme,
    $variant = "primary",
    $fill = false,
    $disabled,
    $inputElement = true,
  }) => `
    
    width:100%;
    max-width:100%;
    box-sizing: border-box;
    border: 0px;
    transition: 200ms 0s ease-in-out;
    transition-property: border, background;
    &:focus,
    &:active {
        outline: 0;
    }
    background-color:transparent;
    ${
      $inputElement
        ? `
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        ${placeholder
          .map(
            (item) => `
            &${item} {
                opacity: 1;
                color: ${
                  $fill
                    ? theme?.type[$variant]?.form?.inputPlaceholderFill
                    : theme?.type[$variant]?.form?.inputPlaceholder
                };
            }
        `
          )
          .join(" ")}
    `
        : `
        cursor: default;
        user-select: none;
        &[data-src-placeholder-style="true"] {
            color: ${
              $fill
                ? theme?.type[$variant]?.form?.inputPlaceholderFill
                : theme?.type[$variant]?.form?.inputPlaceholder
            };
        }
    `
    }
    { ${
      $fill
        ? `
        color: ${theme.type[$variant].font};
        `
        : `
        color: ${theme?.type[$variant].form?.inputFont};

      `
    }
    ${
      $disabled
        ? `
        opacity: ${theme?.form?.disabledOpacity};
         ${
           $fill
             ? ""
             : `
         background:${theme?.type[$variant]?.form?.disabledBackgroundColor};
         `
         }
            border: none;
            ::placeholder{
              opacity:0;
            }
    `
        : ""
    }
`};

  ${({ $size, theme }) => sizeStyles($size, theme)};
  ${defaultProps};
`;

export const InputContainer = styled(Box)<InputContainerProps>`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin: 0;
  justify-content: center;

  ${({
    $fill,
    theme,
    $withGradient = false,
    $withShadow = true,
    $shape = "default",
    $variant = "primary",
    $withBorder = true,
    $size = "default",
    $error,
  }) => css`
      border-radius: ${theme?.form?.inputRadius?.[$shape]};
      border: ${$withBorder ? `solid 2px ${theme.type[$variant].dark}` : "0"};
       ${Svg}{
        width:${CSSHelper.setIconSize($size, theme)};
        height:${CSSHelper.setIconSize($size, theme)};
      }
        ${
          $fill
            ? `
        span {
        color: ${theme.type[$variant].font}!important;
      }
      ${
        $withShadow
          ? `
             box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

       `
          : ``
      }
         background:${
           $withGradient
             ? `
         linear-gradient(to top, rgba(167,27,23,0) 100%,rgba(5,3,8,0.20) 100%),${theme.type[$variant].main};
         `
             : `${theme.type[$variant].main};`
         } 
        color: ${"#122967" || theme?.type[$variant].form?.inputFont};
        fill: ${theme.type[$variant].font};
        :focus-within{
            border-color: ${$error ? "red" : theme.type[$variant].darkest};
            background: ${theme.type[$variant].dark};
        }
        `
            : `
        span {
        color: ${theme.type[$variant].main}!important;
      }
       border-color: ${theme.type[$variant].main};
        background: ${theme?.type[$variant].form?.inputBackground};
         color: ${theme.type[$variant].font};
        fill: ${theme?.type[$variant].main};
        :focus-within {
            border-color: ${$error ? "red" : theme.type[$variant].darkest};
            
        }
      `
        }
  }

 
   `}
`;
