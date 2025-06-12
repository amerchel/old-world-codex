declare module "react-pageflip" {
    import {
        CSSProperties,
        ForwardRefExoticComponent,
        ReactNode,
        RefAttributes,
    } from "react";

    export interface HTMLFlipBookProps {
        children: ReactNode;
        width: number;
        height: number;
        size?: "stretch" | "fixed";
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        maxShadowOpacity?: number;
        showCover?: boolean;
        mobileScrollSupport?: boolean;
        drawShadow?: boolean;
        flippingTime?: number;
        useMouseEvents?: boolean;
        usePortrait?: boolean;
        startPage?: number;
        className?: string;
        style?: CSSProperties;
    }

    export interface HTMLFlipBookRef {
        pageFlip(): {
            flip: (page: number) => void;
            flipNext: () => void;
            flipPrev: () => void;
        };
    }

    const HTMLFlipBook: ForwardRefExoticComponent<
        HTMLFlipBookProps & RefAttributes<HTMLFlipBookRef>
    >;

    export default HTMLFlipBook;
}
