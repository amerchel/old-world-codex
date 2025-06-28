'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Footer } from '@/app/components/sections/Footer'
import Image from 'next/image'
import { instrukcje, krokiMap } from './setupData'
import { AnimatePresence, motion } from 'framer-motion'

const tooltipTypes: ('rozgrywka' | 'ikonografia')[] = ['rozgrywka', 'ikonografia']

export default function Setup() {
    const [players, setPlayers] = useState<number>(2)
    const [isMobile, setIsMobile] = useState(false)
    const [tooltip, setTooltip] = useState<'rozgrywka' | 'ikonografia' | null>(null)
    const router = useRouter()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto relative">
            <a
                onClick={() => router.back()}
                className="absolute top-4 left-4 text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition"
            >
                ← Powrót
            </a>

            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center">Szybki Start</h1>
            <p className="text-secondary text-lg text-center mb-8">
                Skonfiguruj graczy, wybierz szkoły i rozpocznij rozgrywkę.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[1, 2, 3, 4, 5].map(n => (
                    <button
                        key={n}
                        onClick={() => setPlayers(n)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                            players === n
                                ? 'bg-primary text-bg border-primary'
                                : 'border-secondary text-secondary hover:bg-primary hover:text-bg'
                        }`}
                    >
                        {n} {n === 1 ? 'gracz' : 'graczy'}
                    </button>
                ))}
            </div>

            <p className="text-center text-secondary mb-10 italic max-w-xl mx-auto text-sm sm:text-base">
                {instrukcje[players]}
            </p>

            <div className="bg-bg border border-primary rounded-lg p-4 sm:p-6 mb-12 text-sm sm:text-base">
                <h2 className="text-2xl font-semibold text-primary mb-4 text-center">Kroki przygotowania rozgrywki</h2>
                <ol className="list-decimal list-inside space-y-2 text-white marker:text-yellow-400 marker:font-bold">
                    {krokiMap[players].map((krok, index) => (
                        <li key={index}>
                            {krok.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="flex flex-col items-center gap-6 mb-12">
                {tooltipTypes.map((type) => (
                    <div key={type} className="w-full max-w-screen-xl mx-auto">
                        <button
                            onClick={() => setTooltip(prev => (prev === type ? null : type))}
                            className="w-full px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-bg transition text-center"
                        >
                            {type === 'rozgrywka' ? 'Rozgrywka' : 'Ikonografia'}
                        </button>

                        <AnimatePresence>
                            {tooltip === type && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden mt-4 border border-secondary rounded-lg shadow-lg bg-bg"
                                >
                                    <Image
                                        src={`/assets/${type}.jpg`}
                                        alt={type}
                                        width={1517}
                                        height={1223}
                                        layout="responsive"
                                        objectFit="contain"
                                        className="rounded-b-lg"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="mt-20 -mb-20 sm:hidden">{isMobile && <Footer />}</div>
        </main>
    )
}
