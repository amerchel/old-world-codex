'use client'

import Image from "next/image";

export const KnowledgeMobile = () => {
    const year = new Date().getFullYear()

    return (
        <section className="min-h-screen bg-bg text-secondary px-0 py-8">
            <h1 className="text-2xl font-bold text-primary mb-6 text-center">
                Instrukcja gry
            </h1>

            <div className="w-full h-[75vh]">
                <iframe
                    src="/knowledge.pdf"
                    title="Instrukcja gry"
                    className="w-full h-full rounded-none border-none"
                />
            </div>
            {/* Stopka */}
            <footer className="absolute bottom-0 w-full bg-bg text-secondary text-center z-20 flex flex-col items-center justify-start px-4 pt-6 pb-4">
                <div className="-mt-10 mb-1 z-30">
                    <Image
                        src="/assets/nav/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-auto"
                    />
                </div>
                <p className="text-[0.65rem] text-primary mb-1">
                    Strona stworzona przez fanów dla fanów.
                </p>
                <p className="text-[0.6rem] text-secondary leading-tight">
                    &copy; {year} OldWorld Codex. Projekt niezwiązany z CD Projekt RED ani Go on Board.
                </p>
            </footer>
        </section>
    )
}
