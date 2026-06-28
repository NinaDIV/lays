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
      className="relative z-20 flex min-h-0 flex-1 items-center justify-center [perspective:1000px] max-md:order-1 max-md:min-h-[56vh] max-sm:min-h-[50vh]"
      aria-label={`${flavor.eyebrow} packet`}
    >
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--accent-rgb)_/_0.36)] blur-[70px]" />
      <Image
        ref={imageRef}
        src={flavor.asset}
        alt={`${flavor.eyebrow} wavy chips packet`}
        width={1024}
        height={1536}
        priority
        sizes="(max-width: 768px) 72vw, 41vw"
        className="hero-packet relative h-auto w-[min(41vw,560px)] max-w-none drop-shadow-[var(--shadow-product)] will-change-transform max-xl:w-[min(43vw,520px)] max-md:w-[min(74vw,430px)]"
      />
    </section>
  );
}
