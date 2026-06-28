"use client";

import { Bell, Search, ShoppingBag } from "lucide-react";

const navItems = ["Home", "Shop", "Recep", "Contact", "About Us"];

export function Navbar() {
  return (
    <header className="pointer-events-auto absolute left-0 right-0 top-0 z-30 flex h-[118px] items-center justify-between px-[clamp(24px,5.85vw,96px)]">
      <a
        href="#"
        className="font-script text-[40px] font-black leading-none text-white drop-shadow-[0_6px_12px_rgb(114_35_0_/_0.12)]"
        aria-label="Juic home"
      >
        Juic.
      </a>

      <nav
        aria-label="Primary navigation"
        className="absolute left-1/2 top-[26px] hidden h-[56px] -translate-x-1/2 items-center rounded-[var(--radius-pill)] bg-white px-[var(--space-24)] text-[18px] font-semibold text-[#2b221e] shadow-[var(--shadow-soft)] md:flex"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="group relative flex h-full items-center px-[var(--space-24)] first:font-black"
          >
            {item}
            <span className="absolute bottom-[13px] left-[24px] h-[2px] w-[calc(100%-48px)] origin-left scale-x-0 rounded-full bg-[#2b221e] transition-transform duration-[var(--duration-04)] ease-premium group-hover:scale-x-100" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[var(--space-24)]">
        <button
          className="grid size-[44px] place-items-center rounded-full text-white outline-none transition duration-[var(--duration-02)] ease-premium hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Search"
        >
          <Search strokeWidth={3.5} size={34} />
        </button>
        <button
          className="relative grid size-[44px] place-items-center rounded-full text-white outline-none transition duration-[var(--duration-02)] ease-premium hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Cart with 2 notifications"
        >
          <ShoppingBag strokeWidth={2.8} size={31} />
          <span className="absolute -right-[2px] -top-[2px] grid size-[24px] animate-badge-pulse place-items-center rounded-full bg-[#f21414] text-[15px] font-black leading-none text-white shadow-[0_5px_12px_rgb(117_0_0_/_0.28)]">
            2
          </span>
        </button>
        <button
          className="hidden size-[44px] place-items-center rounded-full text-white outline-none focus-visible:ring-2 focus-visible:ring-white sm:grid md:hidden"
          aria-label="Notifications"
        >
          <Bell strokeWidth={2.7} size={28} />
        </button>
      </div>
    </header>
  );
}
