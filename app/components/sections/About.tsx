'use client'

import Image from "next/image";

export const About = () => {
    return (
        <section
            id="about"
            className="relative w-full h-[105vh] overflow-hidden flex items-center justify-end bg-bg"
        >
            <div
                className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: 'url("/assets/about/bgImg.png")',
                    backgroundAttachment: 'fixed',
                }}
            />

            <div
                className="relative rounded-xl px-3 py-4 mr-24 max-w-4xl w-[90%] z-10"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(38,38,38,0.75) 40%, rgba(38,38,38,0) 120%)",
                }}
            >
                <div className="flex flex-row items-center">
                    <ul className="text-secondary flex flex-col gap-5">
                        <li className="bg-hover-expand flex flex-row items-center rounded-2xl list-none p-4">
                            <Image
                                src="/assets/about/knowlageImg.png"
                                alt="KnowlageBase Image"
                                width={64}
                                height={64}
                                className="w-16 h-auto mr-4"
                            />
                            <div>
                                <h3 className="text-[1.4rem] font-semibold text-primary">
                                    Wygodna Instrukcja
                                </h3>
                                <p className="text-[1.25rem]">
                                    Przeglądaj instrukcję gry wygodnie w przeglądarce lub na
                                    telefonie, łatwo wyszukuj interesujące Cię zagadnienia
                                </p>
                            </div>
                        </li>

                        <li className="bg-hover-expand flex flex-row items-center rounded-2xl list-none p-4">
                            <Image
                                src="/assets/about/bestiaryImg.png"
                                alt="Bestiary Image"
                                width={64}
                                height={64}
                                className="w-16 h-auto mr-4"
                            />
                            <div>
                                <h3 className="text-[1.4rem] font-semibold text-primary">
                                    Bestiariusz
                                </h3>
                                <p className="text-[1.25rem]">
                                    W bestiariuszu poznasz nie tylko przerażające potwory, z którymi przyjdzie Ci
                                    się zmierzyć, lecz także niezwykłych sprzymierzeńców, którzy mogą odmienić losy
                                    twojej wędrówki.
                                </p>
                            </div>
                        </li>

                        <li className="bg-hover-expand flex flex-row items-center rounded-2xl list-none p-4">
                            <Image
                                src="/assets/about/calcImg.png"
                                alt="Calc Image"
                                width={64}
                                height={64}
                                className="w-16 h-auto mr-4"
                            />
                            <div>
                                <h3 className="text-[1.4rem] font-semibold text-primary">
                                    Kalkulator walk
                                </h3>
                                <p className="text-[1.25rem]">
                                    Wprowadź statystyki i karty akcji – kalkulator sam obliczy wynik walki i pokaże
                                    jej przebieg. Nie musisz martwić się kolejnością kart, my zrobimy to za Ciebie.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
