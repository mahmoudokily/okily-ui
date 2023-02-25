import React, { Children } from "react";
import ReactSelect, { StylesConfig, Props as SelectProps } from "react-select";
import styled from "styled-components";
import { Box } from "./Box";
import { Typography } from "./Typography";

export const Select = React.forwardRef<any, SelectProps & { error?: any }>(
  ({ error, ...props }, ref) => {
    const customStyle: StylesConfig = {
      control: (styles, props) => ({
        ...styles,
        borderRadius: 10,
        borderColor: props.isDisabled ? "white" : "#dbdbdb",
        // backgroundColor: "white",

        ":hover": {
          borderColor: "#3D729C",
        },
        ":focus": {
          borderColor: "#3D729C",
        },
        ":active": {
          borderColor: "#3D729C",
        },
        outline: "#3D729C",
      }),
      placeholder: (styles) => ({
        ...styles,
        color: "#b1bbc4",
        fontSize: "0.7rem",
      }),
      indicatorsContainer: (styles) => ({
        ...styles,
      }),
      dropdownIndicator: (styles, props) => ({
        ...styles,
        color: "#122967",
        display: props.isDisabled ? "none" : "",
      }),
      input: (styles, props) => ({
        ...styles,
        color: "#122967",
        fontSize: "0.7rem!important",
      }),
      container: (styles, props) => ({
        ...styles,
        width: "100%",
      }),
      menuList: (styles) => ({
        ...styles,

        background: "#E6F5FD",
        color: "#122967",
        borderRadius: "10px",
      }),
      menu: (styles) => ({
        ...styles,
        color: "#122967",
        fontSize: "0.7rem!important",

        borderRadius: "10px",
      }),
      valueContainer: (styles) => ({
        ...styles,
        color: "#122967",
        fontSize: "0.7rem!important",

        borderRadius: "10px",
      }),
    };

    return (
      <Box >
        <ReactSelect
          className="basic-single"
          classNamePrefix="select"
          ref={ref}
          menuShouldScrollIntoView={false}
          isClearable={true}
          {...props}
          styles={customStyle}
        />
        {error && (
          <Typography $capitalizeFirstLetter $size="caption20" color="error" mt={1}>
            {error}
          </Typography>
        )}
      </Box>
    );
  }
);
export const getObjectFromString = (
  value: string | string[] | any[],
  dataKey?: string
) => {
  if (!value) return null;
  if (Array.isArray(value)) {
    if (dataKey) {
      return value.map(({ dataKey }) => ({
        label: dataKey,
        value: dataKey,
      }));
    }
    return value.map((v) => ({
      label: v,
      value: v,
    }));
  }
  if (typeof value === "string") {
    return { label: value, value: value };
  }
};

export type SelectItem = {
  label: string;
  value: string;
};
export const getStringFromObject = (obj: SelectItem | SelectItem[]) => {
  if (!obj) return null;
  if (Array.isArray(obj)) {
    return obj.map((o) => o.value);
  }
  return obj.value;
};
