"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { Flavor } from "@/lib/flavors";
import { OrderButton } from "@/components/Buttons/OrderButton";
import { QuantitySelector } from "@/components/Quantity/QuantitySelector";
import { MapPin, ShieldCheck, Truck, Zap } from "lucide-react";

type HeroCopyProps = {
  flavor: Flavor;
};

export function HeroCopy({ flavor }: HeroCopyProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const lastPrice = useRef(flavor.price);
  const revealed = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (revealed.current) return;
    revealed.current = true;

    const chars = root.querySelectorAll("[data-char]");
    gsap.fromTo(
      chars,
      { y: 22, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.58,
        stagger: 0.012,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      root.querySelectorAll("[data-copy-rest]"),
      { y: 16, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.56, ease: "power3.out" },
    );
  }, [flavor.id]);

  useEffect(() => {
    const node = priceRef.current;
    if (!node) return;

    const state = { value: lastPrice.current };
    gsap.to(state, {
      value: flavor.price,
      duration: 0.68,
      ease: "power3.out",
      onUpdate: () => {
        node.textContent = `S/ ${state.value.toFixed(2)}`;
      },
    });
    lastPrice.current = flavor.price;
  }, [flavor.price]);

  const words = flavor.title.toUpperCase().split(" ");

  return (
    <section
      ref={rootRef}
      className="z-20 flex max-w-[520px] flex-col pt-[58px] text-left max-lg:max-w-[440px] max-md:order-2 max-md:items-center max-md:pt-0 max-md:text-center"
      aria-live="polite"
    >
      <h1 className="max-w-[490px] text-[clamp(36px,3.8vw,58px)] font-black uppercase leading-[1.05] tracking-[0] text-white drop-shadow-[0_8px_20px_rgb(0_65_120_/_0.25)]">
        {words.map((word, wordIndex) => (
          <span key={`${flavor.id}-${word}-${wordIndex}`} className="inline-block whitespace-nowrap pr-[0.21em]">
            {Array.from(word).map((char, charIndex) => (
              <span key={`${char}-${charIndex}`} data-char className="inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <div
        ref={priceRef}
        data-copy-rest
        className="mt-[16px] text-[clamp(44px,3.8vw,64px)] font-black leading-none tabular-nums text-white drop-shadow-md"
      >
        S/ {flavor.price.toFixed(2)}
      </div>

      <p
        data-copy-rest
        className="mt-[18px] max-w-[450px] text-[17px] font-medium leading-[1.4] text-white/95 md:text-[18px]"
      >
        {flavor.description}
      </p>

      <div data-copy-rest className="mt-4 flex flex-col gap-2 text-[14px] text-white/90">
        <div className="flex items-center gap-2 max-md:justify-center">
          <Truck size={16} className="text-cyan-200 shrink-0" /> Envíos a todo el Perú por agencia <strong>Shalom</strong>
        </div>
        <div className="flex items-center gap-2 max-md:justify-center">
          <MapPin size={16} className="text-cyan-200 shrink-0" /> Recogida o entrega en <strong>Characato, Arequipa</strong>
        </div>
      </div>

      <div data-copy-rest className="mt-[28px] flex items-center gap-[var(--space-16)] max-sm:flex-col">
        <QuantitySelector />
        <OrderButton />
      </div>
    </section>
  );
}
