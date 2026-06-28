"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ConcentricBackground } from "@/components/Background/ConcentricBackground";
import { FlavorSelector } from "@/components/FlavorSelector/FlavorSelector";
import { HeroCopy } from "@/components/Hero/HeroCopy";
import { Navbar } from "@/components/Navbar/Navbar";
import { ProductViewer } from "@/components/ProductViewer/ProductViewer";
import { flavors, getFlavor } from "@/lib/flavors";
import { applyFlavorVars } from "@/lib/theme";
import { useLenis } from "@/hooks/useLenis";
import { useFlavorStore } from "@/store/useFlavorStore";

export function LandingHero() {
  useLenis();
  const stageRef = useRef<HTMLElement>(null);
  const themeReadyRef = useRef(false);
  const activeId = useFlavorStore((state) => state.activeId);
  const activeFlavor = useMemo(() => getFlavor(activeId), [activeId]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    applyFlavorVars(stage, flavors[0]);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const rings = gsap.utils.toArray<SVGCircleElement>(stage.querySelectorAll("[data-bg-ring]"));
    const ringStroke = `rgba(${activeFlavor.ringColor.split(" ").join(", ")}, ${activeFlavor.ringOpacity})`;

    if (themeReadyRef.current) {
      gsap.to(rings, {
        attr: { stroke: ringStroke },
        duration: 0.72,
        stagger: { each: 0.075, from: "center" },
        ease: "power3.inOut",
      });
    } else {
      gsap.set(rings, { attr: { stroke: ringStroke } });
    }

    gsap.to(stage, {
      "--stage-c1": activeFlavor.gradient.c1,
      "--stage-c2": activeFlavor.gradient.c2,
      "--stage-c3": activeFlavor.gradient.c3,
      "--stage-c4": activeFlavor.gradient.c4,
      "--ring-color": activeFlavor.ringColor,
      "--ring-opacity": activeFlavor.ringOpacity,
      "--accent": activeFlavor.accent,
      "--accent-rgb": activeFlavor.accentRgb,
      "--shadow-color": activeFlavor.shadow,
      duration: 1.08,
      ease: "power3.inOut",
    });

    themeReadyRef.current = true;
  }, [activeFlavor]);

  return (
    <main
      ref={stageRef}
      className="relative m-[10px] min-h-[calc(100vh-20px)] overflow-hidden rounded-[var(--radius-32)] px-[clamp(24px,5.85vw,96px)] pb-[var(--space-32)] pt-[118px] shadow-[0_16px_50px_rgb(96_31_0_/_0.1)] max-md:flex max-md:flex-col max-md:gap-[var(--space-24)] max-md:pt-[96px]"
    >
      <ConcentricBackground />
      <Navbar />

      <div className="relative z-10 grid min-h-[calc(100vh-170px)] grid-cols-[33%_43%_24%] items-center max-lg:grid-cols-[35%_45%_20%] max-md:flex max-md:min-h-0 max-md:flex-col">
        <div data-hero-copy>
          <HeroCopy flavor={activeFlavor} />
        </div>
        <ProductViewer flavor={activeFlavor} />
        <FlavorSelector />
      </div>
    </main>
  );
}
