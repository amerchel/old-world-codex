'use client'

import Image from "next/image";

export const HeroMobile = () => {
    return (
        <section
            id="hero"
            className="h-[100dvh] flex flex-col justify-center items-center px-6 py-12 bg-bg overflow-hidden"
        >

        <div className="text-secondary z-[1] w-full text-center">
                <h1 className="text-4xl font-semibold mb-6 bg-gradient-to-r from-primary/90 to-primary/10 bg-clip-text text-transparent">
                    Przeznaczenie wzywa
                </h1>
                <p className="text-base mb-5">Miło Cię widzieć, podróżniku!</p>
                <p className="text-base mb-9">
                    Zanurz się w mroczny, pełen magii i niebezpieczeństw świat Wiedźmina.
                    Tutaj każda decyzja ma znaczenie, a przygoda czai się za każdym rogiem.
                    Przygotuj miecze, wypij eliksir i ruszaj ku przeznaczeniu!
                </p>
            </div>

            <Image
                src="/assets/hero/heroImage.png"
                alt="hero"
                width={320}
                height={320}
                className="w-[80%] max-w-sm h-auto animate-float mt-8"
                priority
            />
        </section>

    );
};
