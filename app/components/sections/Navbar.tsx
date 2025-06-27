"use client";

import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "../sections/mobile/NavbarMobile";
import { NavLink } from "../ui";

export const Navbar = () => {
  return (
    <nav className="w-full bg-bg flex items-center justify-between px-8 py-6 z-20 sticky top-0 flex-wrap sm:flex-nowrap">
      <Link
        href="/"
        className="text-4xl font-semibold text-primary flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <Image
          src="/assets/nav/logo.png"
          alt="logo"
          width={56}
          height={56}
          className="w-14 h-auto"
        />
        <p>OldWorld Codex</p>
      </Link>

      <ul className="hidden sm:flex flex-row gap-8 text-secondary">
        <li>
          <NavLink href="/knowledge">Instrukcja</NavLink>
        </li>
        <li>
          <NavLink href="#bestiary">Bestiariusz</NavLink>
        </li>
        <li>
          <NavLink href="#contact">Kontakt</NavLink>
        </li>
        <li>
          <NavLink href="#register">Rejestracja</NavLink>
        </li>
        <li>
          <NavLink href="#login">Logowanie</NavLink>
        </li>
      </ul>

      <NavbarMobile />
    </nav>
  );
};
