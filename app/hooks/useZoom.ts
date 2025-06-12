import { useState } from 'react'

export const useZoom = () => {
    const [zoomedPage, setZoomedPage] = useState<number | null>(null)
    return { zoomedPage, setZoomedPage }
}
