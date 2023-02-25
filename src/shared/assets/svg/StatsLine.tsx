import React from "react";
import Svg from "../../../ui/Svg";

type Props = {
  size?: string;
  fill?: string;
  percent: number;
  colorValue: 1 | 2;
};

export const StatsLine: React.FC<Props> = ({ fill, size, percent, colorValue, ...props }) => {
  let strokeColor;

  colorValue === 1 ? strokeColor = "#F7D87B" : strokeColor = "#3D729C"; {/**TODO: DYNAMIC CSS */ }

  return (
    <Svg
      viewBox="0 0 100 6"
      iconSize={size}
      {...props}
    >
      <line x1={percent} y1={"0"} x2={"0"} y2={"0"} style={{ stroke: strokeColor, strokeWidth: "6" }} />
    </Svg>
  );
};