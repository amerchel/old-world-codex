'use client'

import React from 'react'
import Link from 'next/link'

type ButtonProps =
    | {
    children: React.ReactNode
    href: string
    className?: string
}
    | {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    className?: string
}

export const Button = (props: ButtonProps) => {
    if ('href' in props) {
        return (
            <Link
                href={props.href}
                className={`btn-primary inline-block ${props.className ?? ''}`}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            type={props.type ?? 'button'}
            onClick={props.onClick}
            disabled={props.disabled}
            className={`btn-primary ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''} ${props.className ?? ''}`}
        >
            {props.children}
        </button>
    )
}
