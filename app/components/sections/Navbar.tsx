'use client'

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
    return (
        <nav className="w-full bg-bg flex items-center justify-between px-8 py-6 z-20 relative flex-wrap sm:flex-nowrap">
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
                <li><a href="#knowlage" className="text-2xl nav-hover-gradient">Instrukcja</a></li>
                <li><a href="#bestiary" className="text-2xl nav-hover-gradient">Bestiariusz</a></li>
                <li><a href="#contact" className="text-2xl nav-hover-gradient">Kontakt</a></li>
                <li><a href="#register" className="text-2xl nav-hover-gradient">Rejestracja</a></li>
                <li><a href="#login" className="text-2xl nav-hover-gradient">Logowanie</a></li>
            </ul>

            <MobileMenu />
        </nav>
    );
};
