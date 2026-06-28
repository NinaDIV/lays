"use client";

export function OrderButton() {
  return (
    <button className="group relative h-[64px] min-w-[208px] overflow-hidden rounded-[var(--radius-16)] bg-white px-[var(--space-40)] text-[21px] font-black text-[#17120f] shadow-[0_24px_36px_rgb(var(--accent-rgb)_/_0.22)] outline-none transition duration-[var(--duration-04)] ease-premium hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_28px_48px_rgb(var(--accent-rgb)_/_0.32)] active:translate-y-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white">
      <span className="absolute inset-y-0 -left-[65%] w-[54%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-opacity group-hover:animate-light-sweep group-hover:opacity-100" />
      <span className="relative">Order Now</span>
    </button>
  );
}
