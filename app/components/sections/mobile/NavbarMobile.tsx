'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export const NavbarMobile = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="sm:hidden relative z-50 w-full">
            <div className="flex items-center justify-between px-4 py-4 bg-bg z-50">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/assets/nav/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-10 h-auto"
                    />
                    <span className="text-xl font-semibold text-primary">OldWorld Codex</span>
                </Link>

                {/* Hamburger */}
                <button onClick={() => setOpen(!open)}>
                    <Image
                        src={open ? "/assets/nav/closemenuIcon.png" : "/assets/nav/menuIcon.png"}
                        alt="menu button"
                        width={32}
                        height={32}
                        className="cursor-pointer transition-transform duration-200"
                    />
                </button>
            </div>

            {/* Menu mobilne */}
            <div
                className={`absolute top-[72px] right-4 z-40 bg-primary text-secondary rounded-lg px-6 py-4 shadow-md transform transition-all duration-300 origin-top-right ${
                    open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-4 text-center" onClick={() => setOpen(false)}>
                    <li>
                        <Link href="/knowledge" className="text-lg nav-hover-gradient-mobile">
                            Instrukcja
                        </Link>
                    </li>
                    <li>
                        <Link href="/setup" className="text-lg nav-hover-gradient-mobile">
                            Szybki Start
                        </Link>
                    </li>
                    <li>
                        <a href="#bestiary" className="text-lg nav-hover-gradient-mobile">
                            Bestiariusz
                        </a>
                    </li>
                    <li>
                        <a href="/inventory" className="text-lg nav-hover-gradient-mobile">
                            Ekwipunek
                        </a>
                    </li>
                    <li>
                        <a href="#login" className="text-lg nav-hover-gradient-mobile">
                            Logowanie
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
