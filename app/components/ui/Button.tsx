'use client'

import React from "react"
import Link from "next/link"

type ButtonProps =
    | {
    children: React.ReactNode
    href: string
}
    | {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

export const Button = (props: ButtonProps) => {
    if ("href" in props) {
        return (
            <Link href={props.href} className="btn-primary inline-block">
                {props.children}
            </Link>
        )
    }

    return (
        <button type={props.type ?? "button"} onClick={props.onClick} className="btn-primary">
            {props.children}
        </button>
    )
}
