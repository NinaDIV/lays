"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { flavors, type FlavorId } from "@/lib/flavors";
import { useFlavorStore } from "@/store/useFlavorStore";

const selectorFlavors = ["blue", "silver", "original", "yellow"]
  .map((id) => flavors.find((flavor) => flavor.id === id))
  .filter(Boolean) as typeof flavors;

export function FlavorSelector() {
  const activeId = useFlavorStore((state) => state.activeId);
  const setActiveId = useFlavorStore((state) => state.setActiveId);
  const rootRef = useRef<HTMLDivElement>(null);
  const switching = useRef(false);

  const handleSelect = (id: FlavorId) => {
    if (id === activeId || switching.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setActiveId(id);
      return;
    }

    switching.current = true;
    const activePacket = rootRef.current?.querySelector<HTMLElement>(`[data-packet-for="${activeId}"]`);
    const targetPacket = rootRef.current?.querySelector<HTMLElement>(`[data-packet-for="${id}"]`);
    const hero = document.querySelector<HTMLElement>(".hero-packet");
    const rings = document.querySelector<HTMLElement>(".rings-motion-target");
    const copy = document.querySelector<HTMLElement>("[data-hero-copy]");

    if (!targetPacket || !hero || !copy) {
      setActiveId(id);
      switching.current = false;
      return;
    }

    gsap.set(hero, { transformOrigin: "50% 50%" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        gsap.set(hero, { clearProps: "rotate,scale,y,filter" });
        gsap.set([activePacket, targetPacket].filter(Boolean), { clearProps: "rotate,scale,y" });
        switching.current = false;
      },
    });

    tl.to(copy, { y: 16, opacity: 0, filter: "blur(10px)", duration: 0.26 }, 0)
      .to(rings ?? [], { rotate: "+=10", duration: 1.08, transformOrigin: "54% 50%" }, 0)
      .to(activePacket ?? [], { rotate: 24, scale: 0.94, duration: 0.28 }, 0)
      .to(targetPacket, { rotate: 0, y: -12, scale: 1.14, duration: 0.36, ease: "back.out(1.7)" }, 0.1)
      .to(hero, { rotate: 180, scale: 0.9, filter: "blur(1.5px)", duration: 0.48, ease: "power2.in" }, 0)
      .call(() => setActiveId(id), undefined, 0.48)
      .to(hero, { rotate: 360, scale: 1.08, filter: "blur(0px)", duration: 0.48, ease: "power2.out" }, 0.48)
      .to(hero, { rotate: 360, scale: 1, duration: 0.22, ease: "back.out(2.2)" }, 0.96)
      .to([activePacket, targetPacket].filter(Boolean), { y: 0, rotate: 0, scale: 1, duration: 0.34, ease: "back.out(1.8)" }, 0.82)
      .to(copy, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.34 }, 0.84);
  };

  return (
    <aside
      ref={rootRef}
      className="pointer-events-auto absolute inset-y-0 right-0 z-20 w-[24%] max-md:static max-md:order-3 max-md:w-full"
      aria-label="Select flavor"
    >
      <div className="relative h-full w-full max-md:flex max-md:h-[172px] max-md:items-center max-md:justify-center max-md:gap-[var(--space-16)] max-sm:overflow-x-auto max-sm:px-[var(--space-16)]">
        {selectorFlavors.map((flavor) => {
          const isActive = activeId === flavor.id;

          return (
            <button
              key={flavor.id}
              data-flavor-card
              data-flavor-id={flavor.id}
              onClick={() => handleSelect(flavor.id)}
              className="group absolute grid h-[160px] w-[122px] place-items-center rounded-[var(--radius-24)] outline-none transition-transform duration-[var(--duration-06)] ease-premium focus-visible:ring-2 focus-visible:ring-white max-md:relative max-md:right-auto max-md:top-auto max-md:h-[138px] max-md:w-[104px] max-sm:shrink-0"
              style={{
                top: flavor.thumbnail.top,
                right: flavor.thumbnail.right,
                transform: `rotate(${isActive ? 0 : flavor.thumbnail.rotate}deg) scale(${
                  flavor.thumbnail.scale * (isActive ? 2.28 : 2.2)
                })`,
              }}
              aria-label={`Select ${flavor.eyebrow}`}
            >
              <span
                data-packet-wrap
                data-packet-for={flavor.id}
                className="relative block h-full transition duration-[var(--duration-04)] ease-premium group-hover:-translate-y-[3px] group-hover:scale-105"
              >
                <Image
                  src={flavor.asset}
                  alt=""
                  width={1024}
                  height={1536}
                  sizes="130px"
                  className="h-full w-auto drop-shadow-[0_18px_22px_var(--shadow-color)] transition duration-[var(--duration-04)] ease-premium group-hover:brightness-110 group-hover:saturate-125"
                />
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
