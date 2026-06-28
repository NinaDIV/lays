import type { Flavor } from "@/lib/flavors";

export const applyFlavorVars = (node: HTMLElement, flavor: Flavor) => {
  node.style.setProperty("--stage-c1", flavor.gradient.c1);
  node.style.setProperty("--stage-c2", flavor.gradient.c2);
  node.style.setProperty("--stage-c3", flavor.gradient.c3);
  node.style.setProperty("--stage-c4", flavor.gradient.c4);
  node.style.setProperty("--ring-color", flavor.ringColor);
  node.style.setProperty("--ring-opacity", String(flavor.ringOpacity));
  node.style.setProperty("--accent", flavor.accent);
  node.style.setProperty("--accent-rgb", flavor.accentRgb);
  node.style.setProperty("--shadow-color", flavor.shadow);
};
