'use client'

import { Button } from "../../ui"
import Image from "next/image"

export const OutroMobile = () => {
    const year = new Date().getFullYear()

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-bg px-6 pb-40 pt-12">
            {/* Tło */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 blur-sm opacity-30"
                style={{
                    backgroundImage: "url('/assets/outro/outro.png')",
                    backgroundAttachment: "scroll",
                }}
            />

            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-black text-primary mb-8 leading-snug">
                    Gotów na szlak?
                </h2>
                <p className="text-sm text-secondary mb-8 max-w-xs mx-auto leading-relaxed">
                    Skorzystaj z interaktywnej instrukcji, poznaj potwory w bestiariuszu i przygotuj się
                    do walki z pomocą naszego kalkulatora.
                </p>
                <Button href="#register">Stwórz konto!</Button>
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
