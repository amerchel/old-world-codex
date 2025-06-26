'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Footer } from '@/app/components/sections/Footer'

const schools = [
    'Szkoła Wilka',
    'Szkoła Kota',
    'Szkoła Gryfa',
    'Szkoła Niedźwiedzia',
    'Szkoła Żmii'
]

import { instrukcje, krokiMap } from './setupData'

export default function SetupImported() {
    const [players, setPlayers] = useState<number>(2)
    const [assignments, setAssignments] = useState<{ name: string; school: string }[]>([])
    const [isMobile, setIsMobile] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const initial = Array.from({ length: players }, () => ({ name: '', school: '' }))
        setAssignments(initial)
    }, [players])

    const update = (i: number, key: 'name' | 'school', value: string) => {
        const clone = [...assignments]
        clone[i][key] = value
        setAssignments(clone)
    }

    const takenSchools = assignments.map((a) => a.school).filter(Boolean)

    const rozpocznijGre = () => {
        localStorage.setItem('players', JSON.stringify(assignments))
        router.push('/game')
    }

    const incomplete = assignments.some(a => !a.name || !a.school)

    return (
        <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto relative">
            <a
                onClick={() => router.back()}
                className="absolute top-4 left-4 text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition"
            >
                ← Powrót
            </a>

            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center">
                Szybki Start
            </h1>
            <p className="text-secondary text-lg text-center mb-8">
                Skonfiguruj graczy, wybierz szkoły i rozpocznij rozgrywkę.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((n) => (
                    <button
                        key={n}
                        onClick={() => setPlayers(n)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${players === n ? 'bg-primary text-bg border-primary' : 'border-secondary text-secondary hover:bg-primary hover:text-bg'}`}
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
                                <span key={i}>{line}<br /></span>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="mt-20 -mb-20 sm:hidden">{isMobile && <Footer />}</div>
        </main>
    )
}
