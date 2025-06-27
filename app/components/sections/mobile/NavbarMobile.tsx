"use client";

import { useState } from "react";
import Image from "next/image";
import { Frame, NavLink } from "../../ui";
import Link from "next/link";

export const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden relative z-50 w-full">
      <div className="flex items-center justify-between px-4 py-4 bg-bg z-50">
        <Link
          href="/"
          className="text-xl font-semibold text-primary flex flex-row items-center gap-3"
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

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}>
          <Image
            src={
              open
                ? "/assets/nav/closemenuIcon.png"
                : "/assets/nav/menuIcon.png"
            }
            alt="menu button"
            width={32}
            height={32}
            className="cursor-pointer transition-transform duration-200"
          />
        </button>
      </div>

      {/* Menu mobilne */}
      <Frame
        additionalClasses={`absolute top-[72px] right-4 z-40 rounded-lg shadow-md transform transition-all duration-300 origin-top-right ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul
          className="flex flex-col gap-4 text-center"
          onClick={() => setOpen(false)}
        >
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
      </Frame>
    </div>
  );
};
