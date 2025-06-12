import { useEffect } from 'react'

export const useKeyboardNavigation = (
    bookRef: any,
    pageInput: string,
    goToPage: (page: number) => void,
    setZoomedPage: (page: number | null) => void
) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                bookRef.current?.pageFlip()?.flipPrev()
            } else if (e.key === 'ArrowRight') {
                bookRef.current?.pageFlip()?.flipNext()
            } else if (e.key === 'Enter' && document.activeElement instanceof HTMLInputElement) {
                const num = parseInt(pageInput)
                if (!isNaN(num)) goToPage(num)
            } else if (e.key === 'Escape') {
                setZoomedPage(null)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [pageInput, goToPage, setZoomedPage])
}
