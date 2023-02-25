




import React from "react";
import Svg from "../../../ui/Svg";
type Props = {
      size?: string;
      fill?: string;
};
const Save: React.FC<Props> = ({ fill, size, ...props }) => {
      return (
            <Svg
                  fill={fill}
                  {...props}
                  iconSize={size}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2,21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8a1,1,0,0,0-.293-.707l-5-5A1,1,0,0,0,16,2H3A1,1,0,0,0,2,3Zm13-1H9V15h6ZM4,4H15.586L20,8.414V20H17V14a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v6H4ZM7,9A1,1,0,0,1,8,8h4a1,1,0,0,1,0,2H8A1,1,0,0,1,7,9Z" />
            </Svg>

      );
};

export default Save;