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
import { BG_RESOLVE, REDUCED_FADE, RING_STAGGER, prefersReducedMotion } from "@/lib/motion";
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
    const reduceMotion = prefersReducedMotion();
    const tweens: gsap.core.Tween[] = [];

    if (!themeReadyRef.current) {
      gsap.set(rings, { attr: { stroke: ringStroke } });
    } else if (reduceMotion) {
      // No ripple — a quick, uniform color crossfade across all rings at once.
      tweens.push(
        gsap.to(rings, { attr: { stroke: ringStroke }, duration: REDUCED_FADE, ease: "power1.out", overwrite: "auto" }),
      );
    } else {
      // Recolor the concentric stripes ring-by-ring from the innermost outward,
      // so the new flavor's tint ripples out from behind the packet. The total
      // sweep is sized to BG_RESOLVE so it lands with the flip and gradient.
      // overwrite: "auto" lets a rapid re-click retarget the in-flight ripple
      // smoothly instead of two color tweens fighting per ring.
      const ringDuration = Math.max(0.2, BG_RESOLVE - RING_STAGGER * (rings.length - 1));
      tweens.push(
        gsap.to(rings, {
          attr: { stroke: ringStroke },
          duration: ringDuration,
          stagger: { each: RING_STAGGER, from: "start" },
          ease: "sine.inOut",
          overwrite: "auto",
        }),
      );
    }

    tweens.push(
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
        duration: reduceMotion ? REDUCED_FADE : BG_RESOLVE,
        ease: reduceMotion ? "power1.out" : "power3.inOut",
        overwrite: "auto",
      }),
    );

    themeReadyRef.current = true;

    // Kill (not revert) on the next change / unmount so values stay put and the
    // next tween picks up smoothly from the live color.
    return () => tweens.forEach((tween) => tween.kill());
  }, [activeFlavor]);

  return (
    <main
      ref={stageRef}
      className="relative m-[10px] min-h-[calc(100vh-20px)] overflow-hidden rounded-[var(--radius-32)] px-[clamp(24px,5.85vw,96px)] pb-[var(--space-32)] pt-[118px] shadow-[0_16px_50px_rgb(96_31_0_/_0.1)] max-md:flex max-md:flex-col max-md:gap-[var(--space-24)] max-md:pt-[96px]"
    >
      <ConcentricBackground />
      <Navbar />

      <div className="relative z-10 grid min-h-[calc(100vh-270px)] grid-cols-[33%_43%_24%] items-center max-lg:grid-cols-[35%_45%_20%] max-md:flex max-md:min-h-0 max-md:flex-col">
        <div data-hero-copy>
          <HeroCopy flavor={activeFlavor} />
        </div>
        <ProductViewer flavor={activeFlavor} />
        <FlavorSelector />
      </div>

      <footer className="relative z-10 mt-16 border-t border-white/10 pt-8 pb-4 text-xs text-white/60 max-md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold text-white text-[14px] mb-2">AquaPump 12V Perú - Minibombas de Agua</h2>
            <p className="leading-relaxed">
              Especialistas en mini bombas de agua sumergibles de 12V DC con motor sin escobillas Brushless de larga vida útil y ultra silenciosas. Ideal para jardines, peceras, cascadas de interior, fuentes y proyectos de hidroponía. Punto de entrega física en <strong>Characato, Arequipa</strong> y distribución nacional.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-[14px] mb-2">Envíos por Shalom a todo el Perú</h3>
            <p className="leading-relaxed">
              Enviamos tu pedido rápido y seguro mediante <strong>Agencia Shalom</strong> a todos los departamentos de Perú: Lima, Arequipa, Trujillo, Chiclayo, Piura, Cusco, Huancayo, Tacna, Ica, Cajamarca, Chimbote, Pucallpa, Iquitos, Tarapoto, Juliaca, Puno, Huánuco, Moquegua, Ilo, Tumbes, Puerto Maldonado y más ciudades.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-white/5 pt-4 text-white/40">
          © {new Date().getFullYear()} AquaPump 12V. Minibombas de agua silenciosas sumergibles de 12V. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
