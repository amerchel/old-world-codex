import { useState } from 'react'

export const usePageInput = (goToPage: (page: number) => void, totalPages: number) => {
    const [pageInput, setPageInput] = useState('')

    const handleInputGo = () => {
        const num = parseInt(pageInput)
        if (!isNaN(num) && num >= 1 && num <= totalPages) {
            goToPage(num)
        }
    }

    return { pageInput, setPageInput, handleInputGo }
}
