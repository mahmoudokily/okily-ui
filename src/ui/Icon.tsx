import { HTMLAttributes } from "react";
import styled from "styled-components";
import { compose, LayoutProps, space, SpaceProps } from "styled-system";
import { useAsset } from "./assetsCenter";

const ContainerSvgForType = styled.svg<AllProps>({});
type SvgProps = React.ComponentProps<typeof ContainerSvgForType>;

interface AllProps extends HTMLAttributes<HTMLOrSVGElement> { name: string }


const ContainerSvg = ({
      children,
      width,
      height,
      transform,
      ...props
}: SvgProps & {
      children: (p: SvgProps) => React.ReactNode;
}) => {
      return (
            <>
                  {typeof children === "function"
                        ? children({
                              ...props,
                        })
                        : null}
            </>
      );
};
const Icon: React.FC<AllProps> = ({ name, ...props }) => {
      const source = useAsset("svg", name || "");
      const SvgComponent = styled(
            source as unknown as React.FC<SvgProps>
      ) <AllProps>`
    ${compose(space)}
    display:flex;
    flex-shrink: 0;
    margin-top: 3px;
    min-width: 0;
    opacity: 0.7;
    cursor: pointer;
    width: 30px;
    fill: ${(props) => (props.color ? props.color : "black")};
    &:hover {
      opacity: 1;
    }
  `;

      return (
            <ContainerSvg {...props}>
                  {(p: any) => <SvgComponent {...p} />}
            </ContainerSvg>
      );
};
export default Icon;