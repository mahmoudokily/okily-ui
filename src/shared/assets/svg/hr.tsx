import styled from "styled-components";
import { Box } from "../../../ui";

type Props = {
    size?: string;
    fill?: string;
};

// export const Hr: React.FC<Props> = ({ size, fill, ...props }) => {
//     return (
//         <svg
//             viewBox="0 0 200 20"
//         >
//             <defs>
//                 <linearGradient>
//                     <stop
//                         style={{ stopColor: "#000000", stopOpacity: 0 }}
//                         offset="0"
//                     />
//                     <stop
//                         style={{ stopColor: "#3d729c", stopOpacity: "0.42745098" }}
//                         offset="0.5"
//                     />
//                     <stop
//                         style={{ stopColor: "#000000", stopOpacity: 0 }}
//                         offset="1"
//                     />
//                 </linearGradient>
//                 <linearGradient
//                     id="gradient"
//                     x1="9.771739"
//                     y1="28.029461"
//                     x2="202.12071"
//                     y2="28.029461"
//                     gradientUnits="userSpaceOnUse"
//                     gradientTransform="matrix(1.0397768,0,0,1.1489534,-3.9888033,-1.218848)"
//                 />
//             </defs>
//             <g
//                 transform="translate(-6.1716243,-24.485698)">
//                 <rect
//                     style={{
//                         fill: "url('#gradient')",
//                         fillOpacity: 1,
//                         strokeWidth: 9.6397,
//                         strokeDasharray: "none",
//                         width: "100px",
//                         height: "13pt",
//                         x: "6.1716247",
//                         y: "24.485699",
//                     }}
//                 />
//             </g>
//         </svg>

//     );
// };

export const Hr = styled(Box) <Props>`
    width: 100%;
    height: 200pt,
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(61,114,156,1) 50%, rgba(255,255,255,1) 100%);
`