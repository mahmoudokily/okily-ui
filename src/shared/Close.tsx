import React from "react";
import Svg from "../ui/Svg";
type Props = {
  size?: string;
  fill?: string;
};
const Close: React.FC<Props> = ({ fill, size, ...props }) => {
  return (
    <Svg
      fill={fill}
      iconSize={size}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g data-name="close">
          <rect
            width={size}
            height={size}
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
        </g>
      </g>
    </Svg>
  );
};

export default Close;
