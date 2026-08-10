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

      <section className="relative z-10 mt-16 max-w-4xl mx-auto border-t border-white/10 pt-10 text-white/90">
        <h2 className="text-2xl font-black uppercase tracking-wider text-center text-white mb-6">
          Preguntas Frecuentes - Todo lo que debes saber
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <details className="group rounded-[var(--radius-16)] bg-white/5 border border-white/10 p-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-bold cursor-pointer select-none text-[15px] outline-none">
              <span>¿Cuánto cuesta la mini bomba de agua en Perú?</span>
              <span className="transition duration-300 group-open:-rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              La <strong>mini bomba de agua sumergible 12V sola</strong> tiene un precio de <strong>S/ 45.00 soles</strong>. Si necesitas conectarla directamente al tomacorriente de tu casa (220V), ofrecemos un <strong>combo completo con adaptador de corriente por S/ 50.00 soles</strong>.
            </p>
          </details>

          <details className="group rounded-[var(--radius-16)] bg-white/5 border border-white/10 p-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-bold cursor-pointer select-none text-[15px] outline-none">
              <span>¿Se puede enviar a mi ciudad por Shalom?</span>
              <span className="transition duration-300 group-open:-rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              Sí, realizamos envíos seguros y rápidos de forma diaria a través de <strong>Agencia Shalom</strong> a todas las provincias y departamentos del Perú con cobro en destino o previo pago. El paquete se despacha inmediatamente.
            </p>
          </details>

          <details className="group rounded-[var(--radius-16)] bg-white/5 border border-white/10 p-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-bold cursor-pointer select-none text-[15px] outline-none">
              <span>¿Para qué sirve este motorcito de agua sumergible?</span>
              <span className="transition duration-300 group-open:-rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              Es ideal como <strong>motor para pecera</strong>, bomba para pileta o fuente de agua de jardín, cascadas artificiales decorativas, sistemas de hidroponía caseros, maquetas de colegio y proyectos escolares de riego automático.
            </p>
          </details>

          <details className="group rounded-[var(--radius-16)] bg-white/5 border border-white/10 p-4 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between font-bold cursor-pointer select-none text-[15px] outline-none">
              <span>¿Cómo se realiza la conexión eléctrica?</span>
              <span className="transition duration-300 group-open:-rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">
              La minibomba trabaja a <strong>12V DC</strong>. Cuenta con dos cables de conexión muy fáciles de instalar: el **cable rojo** se conecta al positivo (+) y el **cable negro** al negativo (-).
            </p>
          </details>
        </div>
      </section>

      <section className="relative z-10 mt-12 max-w-4xl mx-auto border-t border-white/10 pt-10 text-white/95">
        <h3 className="text-xl font-bold uppercase tracking-wider text-center text-white mb-4">
          Cobertura de Envíos Shalom a todas las Regiones del Perú
        </h3>
        <p className="text-xs text-white/60 text-center mb-6 leading-relaxed">
          Mapeamos todas las regiones para asegurar que tu minibomba llegue sin inconvenientes a tu localidad:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Amazonas:</strong> Chachapoyas, Bagua
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Áncash:</strong> Chimbote, Huaraz
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Apurímac:</strong> Abancay, Andahuaylas
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Arequipa:</strong> Characato, Cayma, Bustamante
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Ayacucho:</strong> Huamanga, Puquio
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Cajamarca:</strong> Cajamarca, Jaén
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Cusco:</strong> Cusco Cercado, Sicuani
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Huancavelica:</strong> Lircay, Castrovirreyna
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Huánuco:</strong> Tingo María, Huánuco
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Ica:</strong> Ica, Chincha, Pisco, Nasca
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Junín:</strong> Huancayo, Tarma, Jauja
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>La Libertad:</strong> Trujillo, Chepén, Pacasmayo
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Lambayeque:</strong> Chiclayo, Lambayeque
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Lima:</strong> Lima Metropolitana, Huacho, Cañete
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Loreto:</strong> Iquitos, Yurimaguas
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Madre de Dios:</strong> Puerto Maldonado
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Moquegua:</strong> Ilo, Moquegua, Mariscal Nieto
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Pasco:</strong> Cerro de Pasco, Oxapampa
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Piura:</strong> Piura, Sullana, Talara, Paita
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Puno:</strong> Puno, Juliaca, Ayaviri
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>San Martín:</strong> Tarapoto, Moyobamba
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Tacna:</strong> Tacna, Locumba, Tarata
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Tumbes:</strong> Tumbes, Zarumilla, Contralmirante
          </div>
          <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
            <strong>Ucayali:</strong> Pucallpa, Coronel Portillo
          </div>
        </div>
      </section>

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
