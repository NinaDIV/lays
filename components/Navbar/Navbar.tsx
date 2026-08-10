"use client";

import { Droplets, MessageCircle } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Información y Envíos", href: "/informacion" },
];

export function Navbar() {
  const openWhatsApp = () => {
    window.open("https://wa.me/51900094969?text=Hola,%20quisiera%20consultar%20sobre%20la%20Mini%20Bomba%20de%20Agua%2012V", "_blank");
  };

  return (
    <header className="pointer-events-auto absolute left-0 right-0 top-0 z-30 flex h-[118px] items-center justify-between px-[clamp(24px,5.85vw,96px)]">
      <Link
        href="/"
        className="flex items-center gap-2 font-script text-[36px] font-black leading-none text-white drop-shadow-[0_6px_12px_rgba(0,100,180,0.3)]"
        aria-label="AquaPump 12V"
      >
        <Droplets className="size-9 text-cyan-300 animate-pulse" />
        AquaPump<span className="text-cyan-300 font-sans text-2xl font-bold">12V</span>
      </Link>

      <nav
        aria-label="Navegación principal"
        className="absolute left-1/2 top-[26px] hidden h-[56px] -translate-x-1/2 items-center rounded-[var(--radius-pill)] bg-white/90 px-[var(--space-24)] text-[16px] font-semibold text-[#093554] shadow-[var(--shadow-soft)] backdrop-blur-md md:flex"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative flex h-full items-center px-[var(--space-16)] first:font-black"
          >
            {item.label}
            <span className="absolute bottom-[13px] left-[16px] h-[2px] w-[calc(100%-32px)] origin-left scale-x-0 opacity-0 rounded-full bg-[#093554] transition-all duration-[var(--duration-04)] ease-premium group-hover:scale-x-100 group-hover:opacity-100" />
          </Link>
        ))}
        <a
          href="#wa"
          onClick={(e) => { e.preventDefault(); openWhatsApp(); }}
          className="group relative flex h-full items-center px-[var(--space-16)]"
        >
          Contacto
          <span className="absolute bottom-[13px] left-[16px] h-[2px] w-[calc(100%-32px)] origin-left scale-x-0 opacity-0 rounded-full bg-[#093554] transition-all duration-[var(--duration-04)] ease-premium group-hover:scale-x-100 group-hover:opacity-100" />
        </a>
      </nav>

      {/* WhatsApp contact button is completely hidden on mobile screens to only show logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={openWhatsApp}
          className="hidden md:flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2.5 text-[15px] font-bold text-white shadow-lg backdrop-blur-sm transition duration-[var(--duration-02)] ease-premium hover:scale-105 hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-white"
        >
          <MessageCircle className="size-5 fill-white stroke-emerald-600" />
          <span>900094969</span>
        </button>
      </div>
    </header>
  );
}
