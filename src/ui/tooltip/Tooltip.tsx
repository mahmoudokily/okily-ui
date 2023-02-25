

import React, { useEffect, useState } from "react";
import { createPortal, findDOMNode } from "react-dom";
import { DOMHelper } from "../helpers/DomHelper";
import DV from "../helpers/DV";
import TooltipHelper from "../helpers/TooltipHelpers";
import { Size, Variant } from "../helpers/types";
import { ArrowElement } from "../popover/PopoverStyledElement";
import { TooltipAttributes } from "../popover/types";
import { TooltipElement } from "./TooltipStyledElements";
import CSSTransition from '../transition/CSSTransition'
import { DefaultProps } from "../helpers";




export interface TooltipProps extends DefaultProps {
   children: [JSX.Element, JSX.Element];
   $variant?: Variant;
   $size?: Size;
   $position?: string;
   $renderInBody?: boolean
   $transitionClassName?: string
   $transitionType?: string
   $transitionDuration?: number
   $showAnimation?: boolean
   $hideAnimation?: boolean

}
interface State {
   status: boolean
   attrs: TooltipAttributes
}

export const Tooltip: React.FC<TooltipProps> = ({
   $size = "default",
   $position = "top",
   $transitionClassName = "psrc-fade",
   $transitionType = "ease-in-out",
   $transitionDuration = 300,
   $showAnimation = true,
   $hideAnimation = true,
   $variant = 'primary',
   $renderInBody = true,
   ...props }) => {
   const el = React.useRef<any>()
   const arrowEl = React.createRef<HTMLDivElement>()
   const containerEl = React.useRef<HTMLDivElement>()
   const [status, setStatus] = useState<boolean>(false);
   const [attrs, setAttrs] = useState<any>({})

   useEffect(() => {
      // beforeShow()
      if (!DOMHelper.isMobile && containerEl?.current) {
         DOMHelper.addEventListener(containerEl?.current as HTMLElement, ["mouseover"], open)
         DOMHelper.addEventListener(containerEl?.current as HTMLElement, ["mouseleave"], close)
      } else {
         DOMHelper.addEventListener(document.body, ["click"], closeIfNotInRange)
         if (status)
            DOMHelper.addEventListener(window, ["resize", "scroll"], setPosition, true)
      }

      DOMHelper.addEventListener(containerEl?.current as HTMLElement, ["click"], toggle)

      return () => {

         if (!DOMHelper.isMobile) {
            DOMHelper.removeEventListener(containerEl?.current as HTMLElement, ["mouseover"], open)
            DOMHelper.removeEventListener(containerEl?.current as HTMLElement, ["mouseleave"], close)
         } else {
            DOMHelper.removeEventListener(document.body, ["click"], closeIfNotInRange)
            DOMHelper.removeEventListener(window, ["resize", "scroll"], setPosition)
         }
         DOMHelper.removeEventListener(containerEl?.current as HTMLElement, ["click"], toggle)
      }
   }, [status, containerEl])

   const open = () => {
      if (!status) {
         setStatus(true)
      }
   }
   const close = () => {
      if (status) {
         setStatus(false)
      }
   }
   const closeIfNotInRange = (e: Event) => {
      if (status && !(e.target === containerEl.current || containerEl.current?.contains(e.target as HTMLElement))) {
         setStatus(false)
      }
   }
   const toggle = () => {
      setStatus(!status)
   }

   const setPosition = () => {
      if (status) {
         setAttrs(TooltipHelper.getAttributes(el?.current as HTMLElement, containerEl.current as HTMLElement, $position, undefined, arrowEl?.current as HTMLElement))
      }
   }

   const beforeShow = () => new Promise<void>((resolve) => {
      setPosition()
      resolve()

   })

   const Element = (
      <CSSTransition $status={status} $className={$transitionClassName} $type={$transitionType} $duration={$transitionDuration} $showAnimation={$showAnimation} $hideAnimation={$hideAnimation} $beforeShow={beforeShow}>
         <TooltipElement style={{ transform: attrs?.transform }} ref={el} $variant={$variant} arrow={attrs?.arrow} $size={$size} {...props}>
            {props.children[1]}
            <ArrowElement zIndex="tooltip" ref={arrowEl} style={{ transform: attrs.arrowTransform }} />
         </TooltipElement>
      </CSSTransition>
   )



   return (
      <>
         {React.cloneElement(props?.children[0], {
            ref: containerEl,
         })}
         {DOMHelper.canBeRenderedInPortal($renderInBody) ? createPortal(Element, document.body) : Element}
      </>

   )
}