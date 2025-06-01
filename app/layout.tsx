import "../styles/globals.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OldWorld Codex",
    description: "Fanowski projekt Wiedźmin: Stary Świat",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
        <body className="bg-bg text-secondary font-sans">{children}</body>
        </html>
    );
}
