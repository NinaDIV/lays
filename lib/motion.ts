// Shared timing for the flavor switch so the hero flip, gradient crossfade, and
// concentric-ring recolor resolve together instead of drifting out of sync.
//
// Timeline of a switch (t = seconds after click):
//   0 .............. FLIP_HALF ............ FLIP_HALF*2 .. +FLIP_SETTLE
//   |  conceal half  |  swap + reveal half  |   scale settle            |
//   the background change is triggered at the swap (t = FLIP_HALF) and runs for
//   BG_RESOLVE, so it lands exactly when the flip finishes.

export const FLIP_HALF = 0.5; // each half of the hero flip (conceal / reveal)
export const FLIP_SETTLE = 0.22; // final scale settle after the reveal
export const BG_RESOLVE = FLIP_HALF + FLIP_SETTLE; // gradient + ring recolor duration
export const RING_STAGGER = 0.06; // per-ring delay for the outward ripple
export const REDUCED_FADE = 0.34; // crossfade duration for prefers-reduced-motion

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
