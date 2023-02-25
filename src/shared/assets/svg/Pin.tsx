import React from "react";
import Svg from "../../../ui/Svg";

type Props = {
  size?: string;
  fill?: string;
  num: number | 0;
};
export const Pin: React.FC<Props> = ({ fill, size, ...props }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill={fill}
      iconSize={size}
      {...props}
    >
      <path
        d="M 12,2 C 7.589,2 4,5.589 4,9.995 3.971,16.44 11.696,21.784 12,22 12,22 20.029,16.44 20,10 20,5.589 16.411,2 12,2 Z"
        fill={fill}
      />
    </Svg>
  );
};

export const Pins: React.FC<Props> = ({ fill, size, num, ...props }) => {
  let distance;
  let isPositive = Math.sign(num) === 1;

  if (num < 20) {
    distance = "30%";
  } else if (num < 30) {
    distance = "45%";
  } else if (num < 45) {
    distance = "55%";
  } else if (num < 80) {
    distance = "70%";
  } else if (num >= 80) {
    distance = "80%";
  }

  return (
    <Svg
      viewBox="3 0 65 25"
      iconSize={size}
      {...props}
    >
      <path
        d="M 12,2 C 7.589,2 4,5.589 4,9.995 3.971,16.44 11.696,21.784 12,22 12,22 20.029,16.44 20,10 20,5.589 16.411,2 12,2 Z"
        fill="#0173CC"
        style={!isPositive ? { display: "none" } : { display: "auto" }}
      />
      <path
        d="m 20.652013,2.1573093 c -4.411,0 -8,3.589 -8,7.9949997 -0.029,6.445 7.696,11.789 8,12.005 0,0 8.029,-5.56 8,-12 0,-4.4109997 -3.589,-7.9999997 -8,-7.9999997 z"
        fill="#1B83D3"
        style={!isPositive || num < 20 ? { display: "none" } : { display: "auto" }}
      />
      <path
        d="m 27.873783,2.0558016 c -4.411,0 -8,3.589 -8,7.9950004 -0.029,6.445 7.696,11.789 8,12.005 0,0 8.029,-5.56 8,-12 0,-4.4110004 -3.589,-8.0000004 -8,-8.0000004 z"
        fill="#3C95DA"
        style={!isPositive || num < 30 ? { display: "none" } : { display: "auto" }}
      />
      <path
        d="m 35.810201,2.0344046 c -4.410985,0 -8.000028,3.5888745 -8.000028,7.9948614 -0.029,6.444979 7.696031,11.788952 8.000028,12.004952 0,0 8.029029,-5.559805 8.000029,-11.999784 0,-4.4109881 -3.589041,-8.0000294 -8.000029,-8.0000294 z"
        fill="#58A3DD"
        style={!isPositive || num < 45 ? { display: "none" } : { display: "auto" }}
      />
      <path
        d="m 43.946738,2.1048254 c -4.410985,0 -8.000028,3.5888745 -8.000028,7.9948616 -0.029,6.444979 7.696031,11.788952 8.000028,12.004952 0,0 8.029029,-5.559805 8.000029,-11.999784 0,-4.4109883 -3.589041,-8.0000296 -8.000029,-8.0000296 z"
        fill="#7BB5E2"
        style={!isPositive || num < 80 ? { display: "none" } : { display: "auto" }}
      />
      <g>
        <circle r="8" cy="50%" cx={distance} fill="#ffffff" stroke="#0173CC" strokeWidth="0.50" style={!isPositive ? { display: "none" } : { display: "auto" }}></circle>
        <text
          x={distance}
          y="53%"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{ fontSize: "6pt" }}
        >
          {num > 99 ? "99+" : num}
        </text>
      </g>

    </Svg>
  );
};