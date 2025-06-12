'use client'

import { useEffect, useState } from 'react'
import { KnowledgeBook } from '@/app/components/KnowledgeBook'
import { KnowledgeMobile } from '@/app/components/sections/mobile/KnowledgeMobile'

export default function KnowledgePage() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () =>
            setIsMobile(window.innerWidth < 1280 || window.innerHeight < 800)

        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    useEffect(() => {
        if (!isMobile) {
            document.body.classList.add('noscroll')
            return () => document.body.classList.remove('noscroll')
        }
    }, [isMobile])

    return isMobile ? (
        <KnowledgeMobile />
    ) : (
        <div className="hidden sm:flex flex-col items-center justify-between h-screen bg-bg text-secondary relative">
            <div className="flex flex-col items-center justify-center w-full pt-6 pb-2">
                <KnowledgeBook />
            </div>
        </div>
    )
}
