import React from "react";
import { createPortal } from "react-dom";
import styled, { ThemeContext } from "styled-components"
import { JSXElementProps } from "../helpers/CssHelper";
import { DOMHelper } from "../helpers/DomHelper";
import DV from "../helpers/DV";
import { Grid } from "../helpers/types";
import { CustomTheme } from './../theme/index';


interface OverlayElementProps {
   $breakpoint?: 'small' | 'medium' | 'large' | 'xlarge'
   $background: boolean
}

const overlayCSS = (theme: CustomTheme, background: boolean) => `
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: ${theme.overlay.space};
    touch-action: none;
   align-items: center;

    ${background ? `
        background: ${theme.overlay.background};
    ` : ""}
`

const OverlayElement = styled.div<OverlayElementProps>(({ theme, $breakpoint, $background }) => `
    position: fixed;
    
    z-index: ${theme.zIndex.overlay};
    ${$breakpoint
      ? `
        @media(max-width:${theme?.grid?.breakpoint?.[$breakpoint] - 1}px) {
            ${overlayCSS(theme, $background)}
        }
    `
      : overlayCSS(theme, $background)
   }
`)

export interface Props {
   children: JSX.Element
   renderInBody?: boolean
   $breakpoint?: 'small' | 'medium' | 'large' | 'xlarge'
   $background?: boolean
}

const Overlay = React.forwardRef<HTMLDivElement, Props>(({ children, renderInBody = true, $breakpoint, $background = true }, ref) => {
   const theme = React.useContext(ThemeContext)
   const el = React.useRef<HTMLDivElement>(null)

   /**
    * Checks the target element, prevents default and stops propagation, if the element is in the overlay and not scrollable.
    * 
    * @param e 
    */
   const wheel = (e: WheelEvent) => {
      const container = ((ref || el) as React.MutableRefObject<HTMLDivElement>).current

      if (($breakpoint && window.innerWidth < theme.grid.breakpoint[$breakpoint]) || !$breakpoint) {
         const delta = ((e.deltaY || -(e as any).wheelDelta || e.detail) >> 10) || 1
         const up = delta < 0
         let el = e.target as HTMLElement
         let scrollEl = DOMHelper.getScrollParent(el)
         while (scrollEl && (scrollEl == container || container.contains(scrollEl as Node))) {
            if (
               (up && scrollEl.scrollTop > 0) ||
               (!up && scrollEl.scrollHeight > scrollEl.scrollTop)
            )
               return
            else
               scrollEl = DOMHelper.getScrollParent(scrollEl)
         }

         e.preventDefault()
         e.stopPropagation()
      }
   }

   const selectStart = (e: Event) => {
      const container = ((ref || el) as React.MutableRefObject<HTMLDivElement>).current
      if (e.target == container)
         e.preventDefault()
   }

   React.useEffect(() => {
      DOMHelper.addEventListener(document, DOMHelper.MOUSE_WHEEL, wheel, { passive: false })
      DOMHelper.addEventListener(window, ["selectstart"], selectStart)

      return () => {
         DOMHelper.removeEventListener(document, DOMHelper.MOUSE_WHEEL, wheel, {})
         DOMHelper.removeEventListener(window, ["selectstart"], selectStart)
      }
   }, [])

   const Element = <OverlayElement ref={ref || el} $breakpoint={$breakpoint} $background={$background}>{children}</OverlayElement>

   return DOMHelper.canBeRenderedInPortal(renderInBody) ? createPortal(Element, document.body) : Element
})

export default Overlay