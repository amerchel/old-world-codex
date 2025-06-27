'use client'

import Image from "next/image"

export const AboutMobile = () => {
    return (
        <section
            id="about"
            className="relative h-screen w-full px-6 py-12 bg-bg overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Tło */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
                style={{
                    backgroundImage: 'url("/assets/about/bgImg.png")',
                    backgroundAttachment: "scroll",
                    filter: "brightness(1.8)",
                }}
            />

            {/* Treść */}
            <div
                className="relative z-10 w-full max-w-md rounded-xl px-4 py-3 backdrop-blur-md shadow-lg"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(38,38,38,0.75) 40%, rgba(38,38,38,0) 120%)",
                }}
            >
                <ul className="text-secondary flex flex-col gap-4">
                    {/* Instrukcja */}
                    <li className="flex items-start gap-4 rounded-2xl list-none p-3 bg-hover-expand">
                        <Image
                            src="/assets/about/knowlageImg.png"
                            alt="KnowlageBase Image"
                            width={48}
                            height={48}
                            className="w-12 h-auto"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-primary">Wygodna Instrukcja</h3>
                            <p className="text-sm">
                                Przeglądaj instrukcję gry wygodnie w przeglądarce lub na telefonie, łatwo wyszukuj interesujące Cię zagadnienia.
                            </p>
                        </div>
                    </li>

                    {/* Bestiariusz */}
                    <li className="flex items-start gap-4 rounded-2xl list-none p-3 bg-hover-expand">
                        <Image
                            src="/assets/about/bestiaryImg.png"
                            alt="Bestiary Image"
                            width={48}
                            height={48}
                            className="w-12 h-auto"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-primary">Bestiariusz</h3>
                            <p className="text-sm">
                                Poznaj potwory i sprzymierzeńców, którzy mogą zmienić losy Twojej wędrówki.
                            </p>
                        </div>
                    </li>

                    {/* Szybki start */}
                    <li className="flex items-start gap-4 rounded-2xl list-none p-3 bg-hover-expand">
                        <Image
                            src="/assets/about/calcImg.png"
                            alt="Calc Image"
                            width={48}
                            height={48}
                            className="w-12 h-auto"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-primary">Asystent przygotowania rozgrywki</h3>
                            <p className="text-sm">
                                Asystent przygotowania rozgrywki to szybki i intuicyjny sposób na start w świecie Wiedźmina.
                                Wybierz liczbę graczy oraz postacie – resztą zajmie się nasze narzędzie. Rozgrywka gotowa w kilka chwil, bez pomyłek i bez stresu!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
