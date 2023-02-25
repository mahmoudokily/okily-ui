






import React from "react";
import Svg from "../../../ui/Svg";
type Props = {
      size?: string;
      fill?: string;
};
const True: React.FC<Props> = ({ fill, size, ...props }) => {
      return (



            <Svg
                  iconSize={size}
                  fill={fill}
                  {...props}
                  viewBox="0 0 24 24"  ><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </Svg>


      );
};

export default True;