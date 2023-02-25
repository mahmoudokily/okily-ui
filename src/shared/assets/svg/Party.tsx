import Svg from "../../../ui/Svg";
type Props = {
  size?: string;
  fill?: string;
};
const Party: React.FC<Props> = ({ fill, size, ...props }) => {
  return (
    <Svg
      fill={fill}
      iconSize={size}
      {...props}
      viewBox="0 0 43 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7759 6.09055C16.5541 3.04665 19.8554 1 23.6307 1C28.1256 1 31.9485 3.9011 33.3291 7.93237C33.7776 7.83754 34.2428 7.78777 34.7194 7.78777C38.4227 7.78777 41.4293 10.7958 41.4293 14.5009C41.4293 18.206 38.4227 21.2141 34.7194 21.2141L6.93967 21.2147C3.66152 21.2147 1 18.5519 1 15.2721C1 11.9924 3.66152 9.32961 6.93967 9.32961C7.34553 9.32961 7.74195 9.37039 8.125 9.44825C9.48597 7.41902 11.8001 6.08246 14.4239 6.08246C14.542 6.08246 14.6593 6.08515 14.7759 6.09055Z"
        // fill={fill}
        // stroke={fill}
        strokeWidth="2"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="15.3262"
        y="12.09"
        width="13.0585"
        height="13.0585"
        fill={fill}
        stroke={fill}
        strokeWidth="3"
      />
      <rect
        x="18.2969"
        y="14.8206"
        width="7.13033"
        height="7.13033"
        fill={fill}
      />
      <line
        x1="12.1846"
        y1="27.5214"
        x2="12.1846"
        y2="31.9647"
        stroke={fill}
        strokeWidth="2"
      />
      <rect
        x="6.74512"
        y="31.9415"
        width="10.1845"
        height="10.0585"
        fill={fill}
      />
      <rect
        x="6.74512"
        y="31.9415"
        width="10.1845"
        height="10.0585"
        stroke="white"
      />
      <rect
        x="8.23438"
        y="33.4334"
        width="7.21966"
        height="7.13033"
        fill="white"
      />
      <line
        x1="22.2329"
        y1="23.0788"
        x2="22.2329"
        y2="27.5221"
        stroke={fill}
        strokeWidth="2"
      />
      <line
        x1="11.1846"
        y1="26.5225"
        x2="21.3691"
        y2="26.5225"
        stroke={fill}
        strokeWidth="2"
      />
      <line
        x1="32.2964"
        y1="27.5215"
        x2="32.2964"
        y2="32.5215"
        stroke={fill}
        strokeWidth="2"
      />
      <rect
        x="26.8569"
        y="31.9414"
        width="10.1845"
        height="10.0585"
        fill={fill}
      />
      <rect
        x="26.8569"
        y="31.9414"
        width="10.1845"
        height="10.0585"
        stroke="white"
      />
      <rect
        x="28.3457"
        y="33.4333"
        width="7.21966"
        height="7.13033"
        fill="white"
      />
      <path
        d="M21.4756 26.5224L33.2812 26.5224"
        stroke={fill}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default Party;
