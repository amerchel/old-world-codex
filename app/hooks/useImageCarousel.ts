import { useEffect, useState } from 'react'

type InventoryItem = {
    name: string
    images: string[]
    description: string
    stats: string[]
}

type InventorySection = {
    category: string
    items: InventoryItem[]
}

export function useImageCarousel(data: InventorySection[]) {
    const items = data.flatMap(section => section.items)

    const [activeImageIndex, setActiveImageIndex] = useState<number[]>(items.map(() => 0))
    const [fade, setFade] = useState<boolean[]>(items.map(() => true))

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(Array(items.length).fill(false))

            setTimeout(() => {
                setActiveImageIndex(prev =>
                    prev.map((idx, i) => {
                        const total = items[i].images.length
                        return (idx + 1) % total
                    })
                )
                setFade(Array(items.length).fill(true))
            }, 200)
        }, 5000)

        return () => clearInterval(interval)
    }, [items])

    return { activeImageIndex, fade, setActiveImageIndex }
}
