import { useRef } from 'react'

export const useTOCHide = (setShowTOC: (val: boolean) => void) => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowTOC(false)
        }, 150)
    }

    return handleMouseLeave
}
