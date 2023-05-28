import React, { useCallback } from "react";
import { Flex } from "../Flex";
import { Typography } from "../Typography";
import { InputContainer, InputElement, InputIcon } from "./inputStyledElements";
import { Props } from "./types";




export const Input = React.forwardRef<any, Props>(
  (
    {
      $containerProps, $withEffect = true, $inputProps, $placeholder, $error, $fill, $hint, $withBorder, $prefixProps, $shape, $size, $suffixProps, $variant, $disabled, $prefix, $suffix, ...props
    },
    ref
  ) => {
    const Prefix = useCallback(() => {
      return (
        <InputIcon
          $type="left"
          $disabled={$disabled}
          $size={$size}
          $shape={$shape}
          {...$prefixProps}
        >
          {$prefix}
        </InputIcon>
      )
    }, [$prefix, $prefixProps, $disabled, $shape, $size])
    const Suffix = useCallback(() => {
      return (
        <InputIcon
          $type="right"
          $shape={$shape}
          $disabled={$disabled}
          {...$suffixProps}
        >
          {$suffix}
        </InputIcon>
      )
    }, [$suffix, $shape, $suffixProps, $disabled])


    return (
      <Flex {...props}>
        <InputContainer $withBorder={$withBorder} $size={$size} $shape={$shape} $fill={$fill} $variant={$variant}  {...$containerProps}>
          {$prefix && <Prefix />}
          <InputElement
            $size={$size}
            $variant={$variant}
            ref={ref}
            $fill={$fill}
            $disabled={$disabled}
            placeholder={$placeholder}
            {...$inputProps}
          />
          {$suffix && <Suffix />}
        </InputContainer>
        {$hint && (
          <Typography $size="caption10" color="#737373" mt={2}>
            {$hint}
          </Typography>
        )}
        {$error && (
          <Typography $capitalizeFirstLetter $size="caption10" color="error" mt={1}>
            {$error}
          </Typography>
        )}
      </Flex>

    );
  }
);

Input.defaultProps = {
  $size: 'default',
  $variant: 'light',
  $disabled: false,
  $fill: false,
  $shape: 'default',
  $withBorder: true,

}