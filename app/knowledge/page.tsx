'use client'

import { KnowledgeMobile } from "../components/sections/mobile/KnowledgeMobile"

export default function KnowledgePage() {
    return (
        <>
            {/* Desktop */}
            <div className="hidden sm:block">
                <main className="min-h-screen px-6 py-12 bg-bg text-secondary">
                    <div className="w-full max-w-5xl mx-auto">
                        <iframe
                            src="/knowledge.pdf"
                            title="Instrukcja gry"
                            className="w-full aspect-[1/1.414] rounded-md shadow-xl"
                        />
                    </div>
                </main>
            </div>

            {/* Mobile */}
            <div className="block sm:hidden">
                <KnowledgeMobile />
            </div>
        </>
    )
}
