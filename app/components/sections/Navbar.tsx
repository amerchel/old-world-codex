'use client'

import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "../sections/mobile/NavbarMobile";
import { usePathname } from 'next/navigation'



export const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className="w-full bg-bg flex items-center justify-between px-8 py-6 z-20 sticky top-0 flex-wrap sm:flex-nowrap">

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Image
                    src="/assets/nav/logo.png"
                    alt="logo"
                    width={56}
                    height={56}
                    className="w-14 h-auto"
                />
                <Link href="/" className="text-4xl font-semibold text-primary">
                    OldWorld Codex
                </Link>
            </div>

            <ul className="hidden sm:flex flex-row gap-8 text-secondary">
                <li>
                    <Link href="/knowledge" className="text-2xl nav-hover-gradient">
                        Instrukcja
                    </Link>
                </li>
                <li>
                    <Link
                        href="/setup"
                        className={`text-2xl transition-all duration-500 ${
                            pathname === '/setup'
                                ? 'bg-gradient-to-r from-primary to-bg bg-clip-text text-transparent'
                                : 'text-secondary nav-hover-gradient'
                        }`}
                    >
                        Szybki Start
                    </Link>
                </li>

                <li><a href="#bestiary" className="text-2xl nav-hover-gradient">Bestiariusz</a></li>
                <li>
                    <Link
                        href="/inventory"
                        className={`text-2xl transition-all duration-500 ${
                            pathname === '/inventory'
                                ? 'bg-gradient-to-r from-primary to-bg bg-clip-text text-transparent'
                                : 'text-secondary nav-hover-gradient'
                        }`}
                    >
                        Ekwipunek
                    </Link>
                </li>
                <li><a href="#login" className="text-2xl nav-hover-gradient">Logowanie</a></li>
            </ul>


            <NavbarMobile />
        </nav>
    );
};
