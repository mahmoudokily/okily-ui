import React from "react";
import Svg from "../../../ui/Svg";
type Props = {
  size?: string;
  fill?: string;
};
const Add: React.FC<Props> = ({ fill, size, ...props }) => {
  return (
    <Svg
      fill={fill}
      iconSize={size}
      {...props}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
    //   style="enable-background:new 0 0 490 490;"
    //   xml:space="preserve"
    >
      <polygon
        points="222.031,490 267.969,490 267.969,267.969 490,267.969 490,222.031 267.969,222.031 267.969,0 222.031,0 
	222.031,222.031 0,222.031 0,267.969 222.031,267.969 "
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </Svg>
  );
};

export default Add;
