import React from "react";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { Flex } from "../Flex";

import IconElement from "../IconElement";
import WithEffect from "../input/WithEffect";
import { SimpleLoader } from "../Loader";
import { Tooltip } from "../tooltip/Tooltip";
import { Typography } from "../Typography";
import WaveEffect from "../WaveEffect";
import { ButtonElement } from "./ButtonStyledElements";
import { ButtonProps } from "./types";






export const Button = React.forwardRef<any, PropsWithChildren<ButtonProps>>(
  ({
    children,
    $iconPosition = "left",
    $icon,
    $loading,
    $variant = 'primary',
    $withEffect = true,
    $tooltipText,
    ...props
  },
    ref
  ) => {
    const IconEl = $icon ? (
      <IconElement data-src-icon-position={$iconPosition}>{$icon}</IconElement>
    ) : null;
    const El = (
      <ButtonElement ref={ref} $variant={$variant} {...props}>
        {$iconPosition === "left" && IconEl}
        {$loading && <SimpleLoader variant={$variant} mr={2} />}
        {/* {!typeof children === 'string' ? children : children} */}
        {!$loading || typeof children !== "string" ? children : '  loading...'}
        {$iconPosition === "right" && IconEl}
      </ButtonElement>
    )
    let Ell = El

    if ($withEffect)
      Ell = (<WaveEffect >
        {El}
      </WaveEffect>)
    return Ell

  })
