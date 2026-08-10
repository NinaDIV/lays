"use client";

import { useFlavorStore } from "@/store/useFlavorStore";
import { MessageCircle } from "lucide-react";

export function OrderButton() {
  const activeId = useFlavorStore((state) => state.activeId);
  const quantity = useFlavorStore((state) => state.quantity);

  const handleOrder = () => {
    const text = encodeURIComponent(
      `Hola! Quisiera comprar ${quantity} unidad(es) de la Mini Bomba de Agua 12V (${activeId}).`,
    );
    window.open(`https://wa.me/51900094969?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={handleOrder}
      className="group relative flex h-[64px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-16)] bg-emerald-500 px-[var(--space-32)] text-[20px] font-black text-white shadow-[0_24px_36px_rgba(16,185,129,0.35)] outline-none transition duration-[var(--duration-04)] ease-premium hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-emerald-400 hover:shadow-[0_28px_48px_rgba(16,185,129,0.45)] active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white"
    >
      <span className="absolute inset-y-0 -left-[65%] w-[54%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-opacity group-hover:animate-light-sweep group-hover:opacity-100" />
      <MessageCircle className="relative size-6 fill-white stroke-emerald-600" />
      <span className="relative">Pedir por WhatsApp</span>
    </button>
  );
}
