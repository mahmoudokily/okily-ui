/// <reference path="../modules/global.d.tsx" />
import React from "react"
import { createGlobalStyle } from "styled-components"
import { Value } from "../helpers/CssHelper"
import { DOMHelper } from "../helpers/DomHelper"
import { Transition } from "./Transition"

let id = 0

const getID = () => id++

if (typeof global !== "undefined")
    (global as any).srcCSSTransitionCleanID = () => id = 0

const style = {
    "src-overlay-fixed-box-up": (transition: any, _duration: any, _type: any, theme: any) => `
        @media(max-width:${theme?.grid.breakpoint.medium - 1}px) {
            will-change: opacity;

            &.src-overlay-fixed-box-up-show {
                opacity: 0;
            }

            &.src-overlay-fixed-box-up-show-active {
                transition: opacity ${transition};
                opacity: 1;
            }

            &.src-overlay-fixed-box-up-hide {
                opacity: 1;
            }

            &.src-overlay-fixed-box-up-hide-active {
                transition: opacity ${transition};
                opacity: 0;
            }
        }

        @media(min-width:${theme?.grid.breakpoint.medium}px) {
            > * {
                will-change: opacity, transform;
            }
            
            &.src-overlay-fixed-box-up-show > * {
                opacity: 0;
                transform: translateY(60px);
            }
    
            &.src-overlay-fixed-box-up-show-active > * {
                transition: ${transition};
                transition-property: opacity, transform;
                opacity: 1;
                transform: translateY(0);
            }
    
            &.src-overlay-fixed-box-up-hide > * {
                opacity: 1;
                transform: translateY(0);
            }
    
            &.src-overlay-fixed-box-up-hide-active > * {
                transition: ${transition};
                transition-property: opacity, transform;
                opacity: 0;
                transform: translateY(60px);
            }
        }
    `,
    "src-overlay-modal-down": (transition: any, _duration: any, _type: any, theme: any) => `
        will-change: opacity;

        > * {
            will-change: transform;
        }

        &.src-overlay-modal-down-show  {
            opacity: 0;

            > * {
                transform: translateY(-${theme.overlay.space});
            }
        }
        
        &.src-overlay-modal-down-show-active {
            transition: opacity ${transition};
            opacity: 1;

            > * {
                transition: transform ${transition};
                transform: translateY(0);
            }
        }

        &.src-overlay-modal-down-hide {
            opacity: 1;

            > * {
                transform: translateY(0px);
            }
        }

        &.src-overlay-modal-down-hide-active {
            transition: opacity ${transition};
            opacity: 0;

            > * {
                transition: transform ${transition};
                transform: translateY(-${theme.overlay.space});
            }
        }
    `,
    "src-fade": (transition: any) => `
        will-change: opacity;

        &.src-fade-show {
            opacity: 0;
        }

        &.src-fade-show-active {
            transition: opacity ${transition};
            opacity: 1;
        }

        &.src-fade-hide {
            opacity: 1;
        }

        &.src-fade-hide-active {
            transition: opacity ${transition};
            opacity: 0;
        }
    `,
    "src-dp-fade-in": (transition: any) => `
        will-change: opacity, transform;

        &.src-dp-fade-in-show {
            opacity: 0;
            transform: scale(.85);
        }

        &.src-dp-fade-in-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);
        }

        &.src-dp-fade-in-hide {
            opacity: 1;
            transform: scale(1);
        }

        &.src-dp-fade-in-hide-active {
            transition: opacity ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(.85);
        }
    `,
    "src-dp-fade-out": (transition: any) => `
        will-change: opacity, transform;

        &.src-dp-fade-out-show {
            opacity: 0;
            transform: scale(1.15);
        }

        &.src-dp-fade-out-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);
        }

        &.src-dp-fade-out-hide {
            opacity: 1;
            transform: scale(1);
        }

        &.src-dp-fade-out-hide-active {
            transition: opacity ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(1.15);
        }
    `,
    "src-button-loading": (transition: any) => `
        &.src-button-loading-show {
            opacity: 0;
            transform: scale(.5);

            & ~ *:not(.src-wave-ripple) {
                visibility: visible !important;
            }
        }

        &.src-button-loading-show-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 1;
            transform: scale(1);

            & ~ *:not(.src-wave-ripple) {
                transition: transform ${transition};
                transform: translateX(100%);
            }
        }

        &.src-button-loading-hide {
            opacity: 1;
            transform: scale(1);

            & ~ *:not(.src-wave-ripple) {
                transform: translateX(100%);
            }
        }

        &.src-button-loading-hide-active {
            transition: ${transition};
            transition-property: opacity, transform;
            opacity: 0;
            transform: scale(.5);

            & ~ *:not(.src-wave-ripple) {
                transition: transform ${transition};
                transform: translateX(0%);
            }
        }
    `
}

interface GlobalStyleProps {
    id: number
    className: string
    type: string
    duration: number
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>(({ theme, id, className, type, duration }) => `
    .src-transition-${id}: {
        ${String((style as any)[className as string] ? (style as any)[className](`${duration}ms 0ms ${type}`, duration, type, (theme as any).src) : "")}
    } 
`)

export interface Props {
    children: JSX.Element
    $status?: boolean
    $display?: boolean
    $value?: Value
    $className: string
    $type?: string
    $duration?: number
    $showAnimation?: boolean
    $hideAnimation?: boolean
    $beforeShow?: () => Promise<void>
    $beforeHide?: () => Promise<void>
    $afterShow?: () => void
    $afterHide?: () => void
}

const CSSTransition: React.FC<Props> = ({ children, $status, $display, $className, $type = "ease-in-out", $duration = 200, $showAnimation = true, $hideAnimation = true, $beforeShow, $beforeHide, $afterShow, $afterHide }) => {
    const [id] = React.useState<number>(() => getID())

    const show = (el: HTMLElement): Promise<void> => new Promise(resolve => {
        if (!$showAnimation)
            return resolve()

        DOMHelper.requestAnimationFrame.call(window, () => {
            el.classList.add(`src-transition-${id}`, `${$className}-show`)
            let ignored = el.offsetWidth
            el.classList.add(`${$className}-show-active`)

            setTimeout(() => {
                el.classList.remove(`${$className}-show-active`, `${$className}-show`, `src-transition-${id}`)
                resolve()
            }, $duration)
        })
    })

    const hide = (el: HTMLElement): Promise<void> => new Promise(resolve => {
        if (!$hideAnimation)
            return resolve()

        DOMHelper.requestAnimationFrame.call(window, () => {
            el.classList.add(`src-transition-${id}`, `${$className}-hide`)
            let ignored = el.offsetWidth
            el.classList.add(`${$className}-hide-active`)

            setTimeout(() => {
                el.classList.remove(`${$className}-hide`, `${$className}-hide-active`, `src-transition-${id}`)
                resolve()
            }, $duration)
        })
    })

    return (
        <>
            <GlobalStyle id={id} className={$className} type={$type} duration={$duration} />
            <Transition $status={$status} $display={$display} $beforeShow={$beforeShow} $beforeHide={$beforeHide} $show={show} $hide={hide} $afterShow={$afterShow} $afterHide={$afterHide}>{children}</Transition>
        </>
    )
}

export default CSSTransition;