'use client'

import { Button } from "../ui";
import Image from "next/image";

export const Outro = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-bg pb-48">
            <div
                className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0 blur-[2px]"
                style={{
                    backgroundImage: "url('/assets/outro/outro.png')",
                    backgroundAttachment: "fixed",
                }}
            />

            <div className="relative max-w-[150rem] z-10 flex flex-col items-center text-center px-4">
                <h2 className="text-[4.5rem] font-black text-primary mb-16 max-w-[90vw]">
                    Gotów na szlak?
                </h2>
                <p className="text-[1.8rem] text-secondary max-w-[50rem] mb-16">
                    Skorzystaj z interaktywnej instrukcji, poznaj potwory w bestiariuszu i przygotuj się
                    do walki z pomocą naszego kalkulatora.
                </p>
                <Button href="#register"> Stwórz konto! </Button>
            </div>
        </section>
    );
};
