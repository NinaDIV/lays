"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ConcentricBackground() {
  const ringsRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const rings = ringsRef.current;
    if (!rings) return;

    const ctx = gsap.context(() => {
      gsap.to(rings, {
        rotate: 3.5,
        transformOrigin: "54% 50%",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ringsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-32)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--light-x)_var(--light-y),var(--stage-c4)_0%,var(--stage-c2)_28%,var(--stage-c1)_55%,var(--stage-c3)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_47%,rgb(255_255_255_/_0.28)_0%,transparent_31%),radial-gradient(circle_at_8%_10%,rgb(255_255_255_/_0.16)_0%,transparent_24%),linear-gradient(135deg,transparent_0%,rgb(255_255_255_/_0.1)_48%,transparent_68%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,transparent_61%,rgb(100_26_0_/_0.08)_100%)]" />

      <svg
        ref={ringsRef}
        className="rings-motion-target absolute -inset-[12%] h-[124%] w-[124%]"
        viewBox="0 0 1800 1100"
        aria-hidden="true"
      >
        {[190, 315, 440, 565, 690, 815].map((radius, index) => (
          <circle
            key={radius}
            data-bg-ring
            cx="960"
            cy="545"
            r={radius}
            fill="none"
            stroke="rgb(var(--ring-color) / var(--ring-opacity))"
            strokeWidth={index < 2 ? 104 : 118}
          />
        ))}
      </svg>
    </div>
  );
}
