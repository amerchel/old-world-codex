'use client'

import React from 'react'

interface ZoomViewProps {
    pageNumber: number
    onClose: () => void
}

export const ZoomView: React.FC<ZoomViewProps> = ({ pageNumber, onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-auto"
            onClick={onClose}
        >
            <div
                className="relative w-full min-h-full flex items-start justify-center p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-white bg-black bg-opacity-50 rounded-full px-3 py-1 z-50"
                >
                    ✖
                </button>
                <img
                    src={`/assets/knowledge/knowledge-${String(pageNumber).padStart(2, '0')}.png`}
                    alt={`Strona ${pageNumber}`}
                    className="w-full max-w-6xl h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
        </div>
    )
}
