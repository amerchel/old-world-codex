import { ReactNode } from 'react'

type Entry = { tytul: string; strona: number }

export const useTableOfContents = (
    entries: Entry[],
    currentPage: number,
    goToPage: (page: number) => void,
    setShowTOC: (val: boolean) => void
): ReactNode[] => {
    return entries.map(({ tytul, strona }) => (
        <li
            key={`toc-${strona}`}
            onClick={() => {
                setShowTOC(false)
                setTimeout(() => goToPage(strona), 0)
            }}
            className={`cursor-pointer flex justify-between gap-4 px-2 py-1 rounded transition duration-200
        ${
                currentPage + 1 === strona
                    ? 'bg-gradient-to-r from-[#cda42a]/20 to-[#eac360]/70 text-secondary'
                    : 'text-secondary hover:bg-gradient-to-r hover:from-[#cda42a]/20 hover:to-[#eac360]/70 hover:text-text hover:font-bold'
            }`}
        >
            <span>{tytul}</span>
            <span className="text-sm opacity-70">{strona}</span>
        </li>
    ))
}
