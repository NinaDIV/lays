export type FlavorId = "original" | "blue" | "silver" | "yellow";

export type Flavor = {
  id: FlavorId;
  eyebrow: string;
  title: string;
  description: string;
  price: number;
  asset: string;
  accent: string;
  accentRgb: string;
  ringColor: string;
  ringOpacity: number;
  shadow: string;
  gradient: {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
  };
  thumbnail: {
    top: string;
    right: string;
    rotate: number;
    scale: number;
  };
};

export const flavors: Flavor[] = [
  {
    id: "original",
    eyebrow: "Original",
    title: "Eat Our Grilled Potato Chips",
    description:
      "Delicious chips for every bite that you treasure and fresh and healthy with natural ingredients.",
    price: 5,
    asset: "/assets/packets/original.png",
    accent: "#ffdb76",
    accentRgb: "255 219 118",
    ringColor: "255 228 211",
    ringOpacity: 0.19,
    shadow: "rgb(121 31 6 / 0.32)",
    gradient: {
      c1: "#ff743f",
      c2: "#ff9a69",
      c3: "#f35d26",
      c4: "#ffc09c",
    },
    thumbnail: { top: "58%", right: "7.7%", rotate: 5, scale: 0.42 },
  },
  {
    id: "blue",
    eyebrow: "Salt & Vinegar",
    title: "Bright Crunch, Cool Blue Bite",
    description:
      "Sharp vinegar sparkle with golden ridges, finished with clean salt and a cool crisp snap.",
    price: 5,
    asset: "/assets/packets/blue.png",
    accent: "#78d7ff",
    accentRgb: "120 215 255",
    ringColor: "200 238 255",
    ringOpacity: 0.2,
    shadow: "rgb(4 65 121 / 0.32)",
    gradient: {
      c1: "#1aa4e8",
      c2: "#62ccff",
      c3: "#0962b6",
      c4: "#c6eeff",
    },
    thumbnail: { top: "14%", right: "7.8%", rotate: -10, scale: 0.45 },
  },
  {
    id: "silver",
    eyebrow: "Barbecue",
    title: "Smoky Ridges, Polished Crunch",
    description:
      "A glossy barbecue finish with slow-smoked warmth, deep savor, and a clean wavy snap.",
    price: 5,
    asset: "/assets/packets/silver.png",
    accent: "#f1f3f5",
    accentRgb: "241 243 245",
    ringColor: "255 255 255",
    ringOpacity: 0.17,
    shadow: "rgb(31 37 46 / 0.3)",
    gradient: {
      c1: "#9fa5aa",
      c2: "#d8dde1",
      c3: "#697078",
      c4: "#ffffff",
    },
    thumbnail: { top: "35%", right: "7.1%", rotate: 12, scale: 0.45 },
  },
  {
    id: "yellow",
    eyebrow: "Cheddar",
    title: "Golden Cheddar Potato Waves",
    description:
      "Creamy cheddar brightness wrapped around airy ridges for a golden, savory crunch.",
    price: 5,
    asset: "/assets/packets/yellow.png",
    accent: "#ffe27c",
    accentRgb: "255 226 124",
    ringColor: "255 239 178",
    ringOpacity: 0.2,
    shadow: "rgb(129 77 0 / 0.32)",
    gradient: {
      c1: "#ffb31a",
      c2: "#ffd267",
      c3: "#ee8614",
      c4: "#fff1b2",
    },
    thumbnail: { top: "80%", right: "7.2%", rotate: -9, scale: 0.42 },
  },
];

export const getFlavor = (id: FlavorId) =>
  flavors.find((flavor) => flavor.id === id) ?? flavors[0];
