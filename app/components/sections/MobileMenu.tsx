'use client'

import { useState } from "react";
import Image from "next/image";

export const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sm:hidden">
            <div className="absolute right-8 top-6 z-50">
                <Image
                    src={
                        menuOpen
                            ? "/assets/nav/closemenuIcon.png"
                            : "/assets/nav/menuIcon.png"
                    }
                    alt="menu button"
                    width={32}
                    height={32}
                    className="cursor-pointer transition-transform duration-200"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>

            <div
                className={`absolute top-20 right-8 z-40 bg-primary text-secondary rounded-lg px-6 py-4 shadow-md transform transition-all duration-300 origin-top-right ${
                    menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-4" onClick={() => setMenuOpen(false)}>
                    <li><a href="#knowlage" className="text-lg nav-hover-gradient">Instrukcja</a></li>
                    <li><a href="#bestiary" className="text-lg nav-hover-gradient">Bestiariusz</a></li>
                    <li><a href="#contact" className="text-lg nav-hover-gradient">Kontakt</a></li>
                    <li><a href="#register" className="text-lg nav-hover-gradient">Rejestracja</a></li>
                    <li><a href="#login" className="text-lg nav-hover-gradient">Logowanie</a></li>
                </ul>
            </div>
        </div>
    );
};
