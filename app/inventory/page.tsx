'use client'

import Image from 'next/image'
import { inventoryData } from '@/app/constants/inventoryData'
import { useImageCarousel } from '@/app/hooks/useImageCarousel'

export default function InventoryPage() {
    const { activeImageIndex, setActiveImageIndex } = useImageCarousel(inventoryData)

    let globalIndex = 0

    return (
        <main className="max-w-[1300px] mx-auto px-4 sm:px-12 py-16">
            {inventoryData.map((section, sectionIndex) => (
                <section key={sectionIndex} className="mb-16">
                    <h2 className="text-2xl font-semibold text-primary mb-8 border-b border-primary pb-2">
                        {section.category}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-20 gap-y-16">
                        {section.items.map(({ name, images, description, stats }) => {
                            const itemIndex = globalIndex++ // Numer indeksu kart

                            return (
                                <div
                                    key={itemIndex}
                                    className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center border border-primary rounded-xl p-4 sm:p-8 bg-bg/60 shadow w-full max-w-full relative"
                                >
                                    <div className="absolute inset-0 border border-dashed border-white opacity-10 pointer-events-none" />

                                    {/* LEWA STRONA: Obraz / Karuzela */}
                                    <div className="w-full max-w-full md:w-[55%] flex flex-col items-center relative">
                                        <div className="relative w-full aspect-[3/4]">
                                            {images.length === 1 ? (
                                                // Jeden obraz – bez karuzeli
                                                <Image
                                                    src={images[0]}
                                                    alt={name}
                                                    width={480}
                                                    height={680}
                                                    className="rounded object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-full"
                                                />
                                            ) : (
                                                <>
                                                    {/* karuzela */}
                                                    {images.map((src, idx) => (
                                                        <Image
                                                            key={idx}
                                                            src={src}
                                                            alt={name}
                                                            width={480}
                                                            height={680}
                                                            className={`
                                                                object-contain rounded transition-opacity duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-full h-full
                                                                ${idx === activeImageIndex[itemIndex] ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                                                            `}
                                                        />
                                                    ))}

                                                    {/* Strzałki do karuzeli */}
                                                    <button
                                                        onClick={() =>
                                                            setActiveImageIndex(prev => {
                                                                const clone = [...prev]
                                                                const total = images.length
                                                                clone[itemIndex] = (clone[itemIndex] - 1 + total) % total
                                                                return clone
                                                            })
                                                        }
                                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-primary text-2xl p-2 z-20 bg-black/40 rounded-full"
                                                    >
                                                        {'<'}
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setActiveImageIndex(prev => {
                                                                const clone = [...prev]
                                                                const total = images.length
                                                                clone[itemIndex] = (clone[itemIndex] + 1) % total
                                                                return clone
                                                            })
                                                        }
                                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-primary text-2xl p-2 z-20 bg-black/40 rounded-full"
                                                    >
                                                        {'>'}
                                                    </button>

                                                    {/* Kropki pod zdjęciami */}
                                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                        {images.map((_, imgIdx) => (
                                                            <button
                                                                key={imgIdx}
                                                                onClick={() =>
                                                                    setActiveImageIndex(prev => {
                                                                        const clone = [...prev]
                                                                        clone[itemIndex] = imgIdx
                                                                        return clone
                                                                    })
                                                                }
                                                                className={`w-3 h-3 rounded-full ${imgIdx === activeImageIndex[itemIndex] ? 'bg-primary' : 'bg-white/30'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* PRAWA STRONA: Tekst */}
                                    <div className="w-full max-w-full md:w-[55%] text-secondary flex flex-col justify-between h-full">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{name}</h3> {/* Nazwa przedmiotu */}
                                            <p className="whitespace-pre-line text-sm sm:text-base mb-4">{description}</p> {/* Opis */}
                                        </div>
                                        {stats.length > 0 && (
                                            <ul className="text-sm sm:text-base mt-6 space-y-2 divide-y divide-white/30">
                                                {stats.map((stat, idx) => (
                                                    <li key={idx} className="pt-2 first:pt-0">{stat}</li> // Statystyki
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            ))}
        </main>
    )
}
