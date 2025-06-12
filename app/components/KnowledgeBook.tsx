'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Search } from 'lucide-react'

import { useFlipSync } from '@/app/hooks/useFlipSync'
import { useKeyboardNavigation } from '@/app/hooks/useKeyboardNavigation'
import { usePageInput } from '@/app/hooks/usePageInput'
import { useNavigationControls } from '@/app/hooks/useNavigationControls'
import { useTOCHide } from '@/app/hooks/useTOCHide'
import { ZoomView } from '@/app/components/ui/ZoomView'
import { useZoom } from '@/app/hooks/useZoom'
import {tableofcontent} from "@/app/constants/tableofcontent";

// Łączna liczba stron w książce
const totalPages = 36

export const KnowledgeBook = () => {
    // Referencja do instancji HTMLFlipBook
    const bookRef = useRef<any>(null)

    // Czy spis treści jest widoczny
    const [showTOC, setShowTOC] = useState(false)

    // Numer aktualnie wyświetlanej strony (fizycznej)
    const [currentPage, setCurrentPage] = useState(0)

    // Hook do obsługi powiększenia konkretnej strony
    const { zoomedPage, setZoomedPage } = useZoom()

    // Nasłuchiwanie zdarzenia przewracania strony
    useFlipSync(bookRef, setCurrentPage)

    // Funkcja do przeskakiwania do konkretnej strony logicznej
    const goToPage = (logicalPage: number) => {
        const physicalPage = logicalPage - 1
        bookRef.current?.pageFlip()?.turnToPage(physicalPage)
    }

    // Hook do obsługi inputa strony + przycisku "Przejdź"
    const { pageInput, setPageInput, handleInputGo } = usePageInput(goToPage, totalPages)

    // Obsługa klawiatury (← → Enter Esc)
    useKeyboardNavigation(bookRef, pageInput, goToPage, setZoomedPage)

    // Hook renderujący cały dolny panel nawigacji, spis treści itd.
    const { NavigationPanel } = useNavigationControls({
        bookRef,
        pageInput,
        setPageInput,
        handleInputGo,
        showTOC,
        setShowTOC,
        tableofcontent,
        currentPage,
        goToPage,
        onMouseLeave: useTOCHide(setShowTOC),
    })

    return (
        <>
        <Link
            href="/"
            className="absolute top-8 left-8 z-50 text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition"
        >
            ← Powrót
        </Link>

    <div className="fixed inset-0 flex flex-col items-center justify-center bg-bg z-10 px-4">
            <div className="relative flex items-center justify-center w-full max-w-[95vw] max-h-[85vh]">
                <HTMLFlipBook
                    ref={bookRef}
                    width={900}
                    height={1225}
                    size="stretch"
                    drawShadow
                    showCover={false}
                    flippingTime={500}
                    maxShadowOpacity={0.5}
                    useMouseEvents={false}
                    className="shadow-xl"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                >
                    {/* Generowanie stron książki */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
                        const isLeftPage = num % 2 !== 0
                        return (
                            <div key={`page-${num}`} className="page relative group">
                                {/* Obraz z daną stroną */}
                                <img
                                    src={`/assets/knowledge/knowledge-${String(num).padStart(2, '0')}.png`}
                                    alt={`Strona ${num}`}
                                    className="w-full h-auto object-contain select-none"
                                />
                                {/* Przycisk powiększenia – nie pokazuj na pierwszej stronie */}
                                {num !== 1 && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setZoomedPage(num)
                                        }}
                                        className={`absolute top-2 ${isLeftPage ? 'left-2' : 'right-2'} z-30 bg-primary/40 text-bg rounded-full p-2 shadow-md cursor-pointer backdrop-blur-sm`}
                                        title="Powiększ stronę"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        )
                    })}
                </HTMLFlipBook>

                {/* Powiększony widok strony */}
                {zoomedPage && (
                    <ZoomView pageNumber={zoomedPage} onClose={() => setZoomedPage(null)} />
                )}

                {/* Dolny panel nawigacyjny */}
                {NavigationPanel}
            </div>
        </div>
    </>
    )
}
