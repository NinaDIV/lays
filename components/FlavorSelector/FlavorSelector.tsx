"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { flavors, type FlavorId } from "@/lib/flavors";
import { FLIP_HALF, FLIP_SETTLE, REDUCED_FADE, prefersReducedMotion } from "@/lib/motion";
import { useFlavorStore } from "@/store/useFlavorStore";

const selectorFlavors = ["bomba-intake", "bomba-dimensiones", "bomba-chorro", "bomba-rosca"]
  .map((id) => flavors.find((flavor) => flavor.id === id))
  .filter(Boolean) as typeof flavors;

export function FlavorSelector() {
  const activeId = useFlavorStore((state) => state.activeId);
  const setActiveId = useFlavorStore((state) => state.setActiveId);
  const rootRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  // The flavor the hero is currently heading toward. Tracks intent ahead of the
  // store, since `activeId` only flips at the mid-point of the animation.
  const pendingRef = useRef<FlavorId>(activeId);

  // Kill any in-flight flip if the component unmounts mid-animation.
  useEffect(() => {
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const handleSelect = (id: FlavorId) => {
    if (id === pendingRef.current) return;

    const hero = document.querySelector<HTMLElement>(".hero-packet");

    if (prefersReducedMotion()) {
      pendingRef.current = id;
      tlRef.current?.kill();
      if (!hero) {
        setActiveId(id);
        return;
      }
      // No spin — a gentle dissolve: fade the packet out, swap, fade back in.
      tlRef.current = gsap
        .timeline({
          onComplete: () => {
            gsap.set(hero, { clearProps: "opacity" });
            tlRef.current = null;
          },
        })
        .to(hero, { opacity: 0, duration: REDUCED_FADE * 0.45, ease: "power1.in" })
        .call(() => setActiveId(id))
        .to(hero, { opacity: 1, duration: REDUCED_FADE * 0.55, ease: "power1.out" });
      return;
    }

    const targetPacket = rootRef.current?.querySelector<HTMLElement>(`[data-packet-for="${id}"]`);

    if (!hero || !targetPacket) {
      pendingRef.current = id;
      setActiveId(id);
      return;
    }

    // The packet currently on screen is whatever the store shows right now — read
    // it live, since `activeId` from render can be stale during rapid clicks.
    const fromId = useFlavorStore.getState().activeId;
    pendingRef.current = id;

    const fromPacket = rootRef.current?.querySelector<HTMLElement>(`[data-packet-for="${fromId}"]`);
    const allPackets = gsap.utils.toArray<HTMLElement>(
      rootRef.current?.querySelectorAll("[data-packet-wrap]") ?? [],
    );

    // Interrupt any flip already in flight. kill() leaves transforms at their
    // current values (no clearProps), so the new tweens below tween *from* the
    // live mid-flight state — the hero keeps spinning forward instead of snapping.
    tlRef.current?.kill();

    gsap.set(hero, { transformOrigin: "50% 50%" });

    // Continue the spin forward from the current angle, but always land on the
    // next clean multiple of 360° so the packet settles perfectly upright — even
    // when this flip started part-way through an interrupted one.
    const startRot = (gsap.getProperty(hero, "rotation") as number) || 0;
    let endRot = Math.ceil(startRot / 360) * 360;
    if (endRot - startRot < 200) endRot += 360; // guarantee a meaningful turn
    const midRot = (startRot + endRot) / 2;

    const tl = gsap.timeline({
      // overwrite: "auto" lets each packet tween retarget conflicting in-flight
      // tweens on the same property, so retargeted thumbnails resolve smoothly.
      defaults: { ease: "power3.inOut", overwrite: "auto" },
      onComplete: () => {
        gsap.set(hero, { clearProps: "rotation,scale,filter" });
        gsap.set(allPackets, { clearProps: "rotate,scale,y" });
        tlRef.current = null;
      },
    });
    tlRef.current = tl;

    // Settle every packet back to rest first — clears any thumbnail left mid-pop
    // by an interrupted flip — then shrink the outgoing and pop the incoming.
    tl.to(allPackets, { y: 0, rotate: 0, scale: 1, duration: 0.3 }, 0)
      .to(fromPacket ?? [], { rotate: 24, scale: 0.94, duration: 0.28 }, 0)
      .to(targetPacket, { rotate: 0, y: -12, scale: 1.14, duration: 0.36, ease: "back.out(1.7)" }, 0.1)
      // Conceal half → swap at the edge-on midpoint → reveal half → scale settle.
      // The swap at FLIP_HALF triggers the background recolor, which is timed to
      // finish exactly when this flip does (see lib/motion.ts).
      .to(hero, { rotation: midRot, scale: 0.9, filter: "blur(1.5px)", duration: FLIP_HALF, ease: "power2.in" }, 0)
      .call(() => setActiveId(id), undefined, FLIP_HALF)
      .to(hero, { rotation: endRot, scale: 1.08, filter: "blur(0px)", duration: FLIP_HALF, ease: "power2.out" }, FLIP_HALF)
      .to(hero, { scale: 1, duration: FLIP_SETTLE, ease: "back.out(2.2)" }, FLIP_HALF * 2)
      .to([fromPacket, targetPacket].filter(Boolean), { y: 0, rotate: 0, scale: 1, duration: 0.34, ease: "back.out(1.8)" }, FLIP_HALF + 0.3);
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
              className="group absolute grid h-[160px] w-[122px] place-items-center rounded-[var(--radius-24)] outline-none transition-transform duration-[var(--duration-06)] ease-premium focus-visible:ring-2 focus-visible:ring-white max-md:relative max-md:right-auto max-md:top-auto max-md:h-[138px] max-md:w-[104px] max-sm:shrink-0 max-md:[--thumb-top:auto] max-md:[--thumb-right:auto]"
              style={{
                top: "var(--thumb-top)",
                right: "var(--thumb-right)",
                transform: `rotate(${isActive ? 0 : flavor.thumbnail.rotate}deg) scale(${
                  flavor.thumbnail.scale * (isActive ? 2.28 : 2.2)
                })`,
                "--thumb-top": flavor.thumbnail.top,
                "--thumb-right": flavor.thumbnail.right,
              } as React.CSSProperties}
              aria-label={`Select ${flavor.eyebrow}`}
            >
              <span
                data-packet-wrap
                data-packet-for={flavor.id}
                className="relative block h-full transition duration-[var(--duration-04)] ease-premium group-hover:-translate-y-[3px] group-hover:scale-105"
              >
                <Image
                  src={flavor.asset}
                  alt={flavor.eyebrow}
                  width={400}
                  height={400}
                  sizes="130px"
                  className="h-full w-auto object-contain drop-shadow-[0_12px_20px_var(--shadow-color)] transition duration-[var(--duration-04)] ease-premium group-hover:scale-110 group-hover:brightness-110"
                />
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
