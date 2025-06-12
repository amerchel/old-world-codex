'use client'

import "../styles/globals.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { usePathname } from 'next/navigation';
import { Navbar } from "@/app/components/sections/Navbar";
import { NavbarMobile } from "@/app/components/sections/mobile/NavbarMobile";
import { Footer } from "@/app/components/sections/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="pl">
        <body className="bg-bg text-secondary font-sans">
        {!pathname.startsWith("/knowledge") && (
            <div className="hidden sm:block">
                <Navbar />
            </div>
        )}
        <div className="block sm:hidden">
            <NavbarMobile />
        </div>

        {children}

        {!pathname.startsWith("/knowledge") && (
            <div className="hidden sm:block">
                <Footer />
            </div>
        )}
        </body>
        </html>
    );
}
