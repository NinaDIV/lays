"use client";

import gsap from "gsap";
import { Minus, Plus } from "lucide-react";
import { useRef } from "react";
import { useFlavorStore } from "@/store/useFlavorStore";

export function QuantitySelector() {
  const quantity = useFlavorStore((state) => state.quantity);
  const increment = useFlavorStore((state) => state.increment);
  const decrement = useFlavorStore((state) => state.decrement);
  const numberRef = useRef<HTMLSpanElement>(null);

  const bump = (action: () => void) => {
    action();
    if (!numberRef.current) return;
    gsap.fromTo(
      numberRef.current,
      { y: -8, scale: 0.82, opacity: 0.5 },
      { y: 0, scale: 1, opacity: 1, duration: 0.42, ease: "back.out(2.4)" },
    );
  };

  return (
    <div className="flex h-[64px] min-w-[214px] items-center justify-center gap-[var(--space-24)] rounded-[var(--radius-16)] border-2 border-white/90 bg-white/5 px-[var(--space-24)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.22)] backdrop-blur-sm">
      <button
        className="grid size-[24px] place-items-center rounded-full bg-white text-[#ff7745] outline-none transition duration-[var(--duration-02)] ease-premium hover:scale-110 active:scale-90 focus-visible:ring-2 focus-visible:ring-white"
        onClick={() => bump(decrement)}
        aria-label="Decrease quantity"
      >
        <Minus size={16} strokeWidth={4} />
      </button>
      <span ref={numberRef} className="w-[31px] text-center text-[20px] font-black tabular-nums">
        {String(quantity).padStart(2, "0")}
      </span>
      <button
        className="grid size-[24px] place-items-center rounded-full bg-white text-[#ff7745] outline-none transition duration-[var(--duration-02)] ease-premium hover:scale-110 active:scale-90 focus-visible:ring-2 focus-visible:ring-white"
        onClick={() => bump(increment)}
        aria-label="Increase quantity"
      >
        <Plus size={16} strokeWidth={4} />
      </button>
    </div>
  );
}
