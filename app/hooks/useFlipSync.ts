import { useEffect } from 'react'

export const useFlipSync = (bookRef: any, setCurrentPage: (page: number) => void) => {
    useEffect(() => {
        const flipbook = bookRef.current?.pageFlip()
        const onFlip = (e: { page: number }) => setCurrentPage(e.page)
        flipbook?.on('flip', onFlip)
        return () => flipbook?.off('flip', onFlip)
    }, [bookRef, setCurrentPage])
}
