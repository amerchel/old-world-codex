'use client'

import Image from "next/image";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-between w-full px-6 h-screen transform -translate-y-[4.3rem] overflow-hidden bg-fixed"
        >
            <div className="flex flex-col items-start text-secondary z-[1] flex-1 max-w-1/2 pl-16">
                <h1 className="text-[4.5rem] font-semibold mb-12 bg-gradient-to-r from-primary/90 to-primary/10 bg-clip-text text-transparent">
                    Przeznaczenie wzywa
                </h1>
                <p className="text-[1.8rem] mb-12">Miło Cię widzieć, podróżniku!</p>
                <p className="text-[1.8rem] mb-12">
                    Zanurz się w mroczny, pełen magii i niebezpieczeństw świat Wiedźmina.
                    Tutaj każda decyzja ma znaczenie, a przygoda czai się za każdym rogiem.
                    Przygotuj miecze, wypij eliksir i ruszaj ku przeznaczeniu!
                </p>
            </div>

            <Image
                src="/assets/hero/heroImage.png"
                alt="hero"
                width={576}
                height={576}
                className="w-[clamp(20rem,40vw,36rem)] h-auto z-[1] flex-1 pb-12 animate-float"
                priority
            />
        </section>
    );
};
