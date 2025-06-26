'use client'

import Link from 'next/link'
import { useTableOfContents } from './useTableOfContents'
import { JSX } from 'react'

type Props = {
    bookRef: React.RefObject<any>
    pageInput: string
    setPageInput: (val: string) => void
    handleInputGo: () => void
    showTOC: boolean
    setShowTOC: (val: boolean) => void
    tableofcontent: { tytul: string; strona: number }[]
    currentPage: number
    goToPage: (page: number) => void
    onMouseLeave: () => void
}

export const useNavigationControls = ({
                                          bookRef,
                                          pageInput,
                                          setPageInput,
                                          handleInputGo,
                                          showTOC,
                                          setShowTOC,
                                          tableofcontent,
                                          currentPage,
                                          goToPage,
                                          onMouseLeave,
                                      }: Props) => {
    const tocItems = useTableOfContents(tableofcontent, currentPage, goToPage, setShowTOC)

    const NavigationPanel: JSX.Element = (
        <div
            onMouseLeave={onMouseLeave}
            className="absolute -bottom-[48px] left-1/2 transform -translate-x-1/2 z-20 flex flex-wrap flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center text-center px-4 w-full max-w-[95vw]"
        >
            <button
                onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
                className="text-primary hover:scale-110 transition text-4xl px-4"
            >
                ◀
            </button>

            <input
                type="number"
                min={1}
                max={37}
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value)}
                placeholder="Idź do strony"
                className="w-28 min-w-0 px-3 py-1 rounded-md bg-bg/40 text-secondary text-sm text-center placeholder:text-primary focus:outline-none custom-no-spinner"
            />

            <button
                onClick={handleInputGo}
                className="text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition"
            >
                Przejdź
            </button>

            <span className="text-primary hidden sm:inline">|</span>

            {/* Spis treści */}
            <div className="relative w-[140px] min-w-0">
                <button
                    onClick={() => setShowTOC(!showTOC)}
                    className="text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition w-full"
                >
                    Spis treści
                </button>

                <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 w-[300px] rounded p-4 text-sm shadow-xl transition-all duration-300 ease-in-out origin-bottom ${
                        showTOC
                            ? 'opacity-100 scale-100 translate-y-[-8px]'
                            : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgba(38,38,38,0.85), rgba(38,38,38,0.5))',
                    }}
                >
                    <ul className="space-y-2 whitespace-nowrap pr-2">{tocItems}</ul>
                </div>
            </div>

            {/* Szybki start */}
            <Link
                href="/setup"
                rel="noopener noreferrer"
                className="text-sm py-1 px-4 border border-primary rounded-md text-primary hover:bg-primary hover:text-bg transition text-center"
            >
                Szybki start →
            </Link>

            <button
                onClick={() => bookRef.current?.pageFlip()?.flipNext()}
                className="text-primary hover:scale-110 transition text-4xl px-4 focus-none"
            >
                ▶
            </button>
        </div>
    )

    return { NavigationPanel }
}
