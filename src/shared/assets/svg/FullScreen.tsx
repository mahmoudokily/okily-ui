import Svg from "../../../ui/Svg";

type Props = {
  size?: string;
  fill?: string;
};

//!not working
const FullScreen: React.FC<Props> = ({ size, fill }) => {
  return (
    <Svg
      iconSize={size}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1200"
      enableBackground="new 0 0 1200 1200"
    >
      <g
        fill={fill}
        fillRule="evenodd"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 2)"
      >
        <path d="m16.5 5.5v-4.978l-5.5.014" />
        <path d="m16.5.522-6 5.907" />
        <path d="m11 16.521 5.5.002-.013-5.5" />
        <path d="m16.5 16.429-6-5.907" />
        <path d="m.5 5.5v-5h5.5" />
        <path d="m6.5 6.429-6-5.907" />
        <path d="m6 16.516-5.5.007v-5.023" />
        <path d="m6.5 10.5-6 6" />
      </g>
    </Svg>
  );
};

export default FullScreen;
