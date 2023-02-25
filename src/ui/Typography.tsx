import { PropsWithChildren, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "./";
import { DefaultProps, defaultProps } from "./helpers/styledSystem";
import { TypographyType } from "./theme/typography";
import { Tooltip } from "./";
import { TypographySize, Variant } from "./helpers/types";
interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
  Omit<DefaultProps, "color"> {
  $size?: TypographySize;
  $variant?: Variant;
  $onClick?: any;
  $onCopy?: any;
  $clipboardText?: string;
  $tooltipId?: string;
  $tooltipText?: string;
  $capitalizeFirstLetter?: boolean;
  $ellipsis?: boolean;
}

const TypographyElement = styled.span<Props>`
  display: inline-block;
  ${({ $size = 'body30', theme, color, $variant = 'primary' }) =>
    css`
      color: ${color || theme.type[$variant]?.button?.placeholder};
      font-size: ${theme.typography[$size as TypographyType].fontSize}px;
      font-weight: ${theme.typography[$size as TypographyType].fontWeight};
    `};
  ${defaultProps}
`;
export const Typography = ({
  $tooltipId,
  $tooltipText,
  $onCopy,
  $clipboardText,
  $capitalizeFirstLetter,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const { $size, $ellipsis } = props;

  let ellipsisStyle = {};
  if ($ellipsis) {
    ellipsisStyle = {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    };
  }
  const tooltipIdInner = useMemo(() => uuidv4(), []);
  const tooltipProps = useMemo(
    () =>
      $tooltipId || $tooltipText
        ? { "data-for": $tooltipId || tooltipIdInner, "data-tip": true }
        : {},
    [$tooltipId, $tooltipText, tooltipIdInner]
  );
  const clipboardProps = useMemo(
    () =>
      $clipboardText
        ? {
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            const el = e.target;
            if (props.onClick) props.$onClick();
            const range = document.createRange();
            if (!(el && el instanceof Node && el.contains(el))) {
              range.selectNodeContents(el as Node);
              const sel = window?.getSelection();
              sel?.removeAllRanges();
              sel?.addRange(range);
            }
          },
        }
        : {},
    [$clipboardText]
  );
  let text = children;
  if ($capitalizeFirstLetter && typeof text === "string") {
    text = text[0].toUpperCase() + text.slice(1, text.length);
  }

  const childrenText = useMemo(
    () => (
      <TypographyElement
        $size={$size}
        {...clipboardProps}
        {...tooltipProps}
        {...ellipsisStyle}
        {...props}
      >
        {text}
      </TypographyElement>
    ),
    [Text, $size, tooltipProps, props, ellipsisStyle, clipboardProps]
  );
  return (
    <>
      {$tooltipText && (
        <Tooltip
          content={$tooltipText}
          anchorId={$tooltipId || tooltipIdInner}

        />
      )}
      {$clipboardText ? (
        <CopyToClipboard onCopy={$onCopy} textToCopy={$clipboardText}>
          {childrenText}
        </CopyToClipboard>
      ) : (
        childrenText
      )}
    </>
  );
};
