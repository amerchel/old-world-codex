'use client'

import Image from "next/image";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative h-8 mt-[-5.5rem] bg-bg text-secondary text-center z-10 flex flex-col items-center justify-center px-4">
            <Image
                src="/assets/nav/logo.png"
                alt="logo"
                width={56}
                height={56}
                className="w-14 h-auto mb-1"
            />
            <p className="text-xs text-primary mb-1">
                Strona stworzona przez fanów dla fanów. Wiedźmin: Stary Świat to przygoda, którą dzielimy razem.
            </p>
            <p className="text-xs text-secondary">
                &copy; {year} OldWorld Codex. Fanowski projekt niezwiązany z CD Projekt RED ani Go on Board.
            </p>
        </footer>
    );
};
