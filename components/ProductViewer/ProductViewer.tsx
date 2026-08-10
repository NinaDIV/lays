"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { Flavor } from "@/lib/flavors";

type ProductViewerProps = {
  flavor: Flavor;
};

export function ProductViewer({ flavor }: ProductViewerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const seen = useRef(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (seen.current) return;
    seen.current = true;
    gsap.fromTo(
      image,
      { y: 48, scale: 0.92, opacity: 0, rotate: -3 },
      { y: 0, scale: 1, opacity: 1, rotate: 0, duration: 1.05, ease: "expo.out" },
    );
  }, [flavor.asset]);

  return (
    <section
      ref={rootRef}
      className="relative z-20 flex min-h-0 flex-1 items-center justify-center [perspective:1000px] max-md:order-1 max-md:min-h-[45vh] max-sm:min-h-[40vh]"
      aria-label={`${flavor.eyebrow} bomba de agua`}
    >
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--accent-rgb)_/_0.36)] blur-[70px]" />
      <Image
        ref={imageRef}
        src={flavor.asset}
        alt={`${flavor.eyebrow} Mini Bomba de Agua 12V`}
        width={800}
        height={800}
        priority
        sizes="(max-width: 768px) 72vw, 38vw"
        className="hero-packet relative h-auto w-[min(38vw,480px)] max-w-none object-contain drop-shadow-[0_20px_40px_rgba(0,40,90,0.4)] will-change-transform max-xl:w-[min(40vw,440px)] max-md:w-[min(70vw,360px)]"
      />
    </section>
  );
}
