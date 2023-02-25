import { DefaultProps } from "../helpers";

export interface FixedBoxElementProps extends DefaultProps {
   $boxShadow?: boolean
}

export interface FixedBoxOnRef {
   setPosition: () => void
}

export interface FixedBoxProps {
   children: [JSX.Element, JSX.Element]
   $boxProps?: JSXElementProps
   $status: boolean
   $setStatus: SetValue<boolean>
   $minWidth?: number
   $space?: number
   $boxShadow?: boolean
   $transitionClassName?: string
   $transitionType?: string
   $transitionDuration?: number
   $showAnimation?: boolean
   $hideAnimation?: boolean
   $onRef?: (args: FixedBoxOnRef) => void
}