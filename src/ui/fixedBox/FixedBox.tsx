import React, { useEffect } from "react"
import { findDOMNode } from "react-dom"
import { DOMHelper } from "../helpers/DomHelper"
import DV from "../helpers/DV"
import { FixedBoxElement } from "./FixedBoxStyledElements"
import { FixedBoxProps } from "./types"
import CSSTransition from '../transition/CSSTransition'
import Overlay from "../overlay/Overlay"




export const FixedBox: React.FC<FixedBoxProps> = ({
   children,
   $boxProps = DV.JSX_ELEMENT_PROPS,
   $space = 0,
   $boxShadow = true,
   $transitionClassName = "src-overlay-fixed-box-up",
   $transitionDuration = 300,
   $showAnimation = true,
   $hideAnimation = true,
   $onRef,
   $setStatus, $status, $minWidth, $transitionType }) => {

   const box = React.createRef<HTMLDivElement>()
   const container = React.useRef<HTMLElement>()
   useEffect(() => {
      console.log($status)
      setPosition()
      console.log(container)
      if (container?.current)
         DOMHelper.addEventListener(container?.current as HTMLElement, ["click"], toggle)
      if ($onRef)
         $onRef({ setPosition: setPosition })

      if ($status) {
         setPosition()
         DOMHelper.addEventListener(window, ["resize", "scroll"], setPosition)
         DOMHelper.addEventListener(window, ["click"], detect)
      } else {
         DOMHelper.removeEventListener(window, ["resize", "scroll"], setPosition)
         DOMHelper.removeEventListener(window, ["click"], detect)
      }
      return () => {
         DOMHelper.removeEventListener(container.current as HTMLElement, ["click"], toggle)
      }
   }, [$status, container])



   /**
    * Sets the box position.
    */
   const setPosition = (): void => {
      if (!(container?.current && box?.current))
         return

      let crect: DOMRect = container?.current?.getBoundingClientRect()
      let brect: DOMRect | undefined = box?.current?.getBoundingClientRect()
      let style: string = ""

      // x
      if ($minWidth) {
         style += `
                left: ${crect.left}px;
                width: ${crect.width}px;
            `
      } else {
         let width: number = Math.max(crect.width, $minWidth as number)
         style += `width:${width}px;`

         let diffLeft: number = window.innerWidth - (crect.left + width)
         let diffRight: number = crect.left - width

         if (diffLeft >= 0 || diffLeft >= diffRight)
            style += `left:${crect.left}px;`
         else
            style += `left:${crect.left + crect.width - width}px;`
      }

      // y
      let diffTop: number = (crect.top + crect.height) - (brect.height + 1)
      let diffBottom: number = window.innerHeight - (crect.top + crect.height + brect.height + $space)

      if (diffBottom >= 0 || diffBottom >= diffTop) {
         let height: number = diffBottom > 0 ? brect.height : (window.innerHeight - (crect.top + crect.height + $space))
         style += `
                top: ${crect.top + crect.height + $space}px;
                height: ${height}px;
            `
      } else {
         let height: number = diffTop > 0 ? brect.height : crect.top
         style += `
                top: ${(crect.top + crect.height) - (height + 1)}px;
                height: ${height}px;
            `
      }

      box.current.setAttribute("style", style)
   }

   /**
    * Closes the box.
    */
   const close = (): void => $setStatus(false)

   /**
    * Detects target if it is in the range, if it is not, closes the box.
    * 
    * @param e 
    */
   const detect = (e: Event): void => {
      const target = e.target as Node

      if (
         box?.current &&
         e.target != container?.current &&
         !container?.current?.contains(target) &&
         e.target != box.current &&
         !box.current.contains(target)
      )
         close()
   }
   const open = () => {
      $setStatus(true)
   }

   /**
    * Toggles element if it is clickable.
    * 
    * @param e 
    */
   const toggle = (e: Event): void => {
      if (DOMHelper.checkIfTargetIsClickable(e.target as HTMLElement, container?.current as HTMLElement))
         $setStatus(!$status)
   }

   /**
    * Calls the set position method before showing the box element.
    */
   const beforeShow = () => new Promise<void>(resolve => {
      setPosition()
      resolve()
   })

   const FixedBoxEl = <FixedBoxElement {...$boxProps} ref={box} boxShadow={$boxShadow}>{children[1]}</FixedBoxElement>

   return (
      <>
         {React.cloneElement(children[0], {
            ref: container
         })}
         mm
         <CSSTransition $status={$status} $className={$transitionClassName} $type={$transitionType} $duration={$transitionDuration} $showAnimation={$showAnimation} $hideAnimation={$hideAnimation} $beforeShow={beforeShow}>
            {/* <Overlay $breakpoint="medium">{FixedBoxEl}</Overlay> */}
            {FixedBoxEl}
         </CSSTransition>
      </>
   )

}