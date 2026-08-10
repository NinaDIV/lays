export type FlavorId = "bomba-intake" | "bomba-dimensiones" | "bomba-chorro" | "bomba-rosca";

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
    id: "bomba-intake",
    eyebrow: "ENTRADA Y SALIDA",
    title: "Dirección De Flujo Intake Y Outlet",
    description:
      "Entrada (Intake) y Salida (Outlet) claramente indicadas. Conexión rápida DC 12V con cable rojo (+) y negro (-). Protección IP68 sumergible.",
    price: 45,
    asset: "/assets/bomba/bomba-intake.png",
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
    thumbnail: { top: "14%", right: "7.8%", rotate: -5, scale: 0.45 },
  },
  {
    id: "bomba-dimensiones",
    eyebrow: "MEDIDAS COMPACTAS",
    title: "Dimensiones 8cm x 5cm x 6.3cm",
    description:
      "Diseño compacto y fácil de integrar en estanques, fuentes, peceras y proyectos hidropónicos. ¡Solo en 12V DC!",
    price: 45,
    asset: "/assets/bomba/bomba-dimensiones.png",
    accent: "#3cd5f7",
    accentRgb: "60 213 247",
    ringColor: "170 240 255",
    ringOpacity: 0.22,
    shadow: "rgb(0 97 122 / 0.35)",
    gradient: {
      c1: "#009bbd",
      c2: "#3cd5f7",
      c3: "#00617a",
      c4: "#b5f2ff",
    },
    thumbnail: { top: "35%", right: "7.1%", rotate: 6, scale: 0.45 },
  },
  {
    id: "bomba-chorro",
    eyebrow: "CHORRO POTENTE DC 12V",
    title: "Elevación De 4m a 8m / 800 L/h",
    description:
      "Motor sin escobillas ultra silencioso con chorro continuo de alta presión. Flujo máximo 600-800 L/h. Bomba sola S/45 (Con adaptador S/50).",
    price: 45,
    asset: "/assets/bomba/bomba-chorro.png",
    accent: "#48beff",
    accentRgb: "72 190 255",
    ringColor: "180 230 255",
    ringOpacity: 0.22,
    shadow: "rgb(3 75 140 / 0.35)",
    gradient: {
      c1: "#0b84cb",
      c2: "#48beff",
      c3: "#034b8c",
      c4: "#aee6ff",
    },
    thumbnail: { top: "58%", right: "7.7%", rotate: -6, scale: 0.45 },
  },
  {
    id: "bomba-rosca",
    eyebrow: "ROSCA 20mm ESTÁNDAR",
    title: "Conexión De Rosca De 20mm",
    description:
      "Boquillas de rosca estándar de 20 mm para acomodar mangueras y accesorios. Envíos a todo el Perú por agencia Shalom.",
    price: 45,
    asset: "/assets/bomba/bomba-rosca.png",
    accent: "#4f9ef7",
    accentRgb: "79 158 247",
    ringColor: "190 220 255",
    ringOpacity: 0.18,
    shadow: "rgb(12 59 109 / 0.32)",
    gradient: {
      c1: "#1767b2",
      c2: "#4f9ef7",
      c3: "#0c3b6d",
      c4: "#cbdfff",
    },
    thumbnail: { top: "80%", right: "7.2%", rotate: 8, scale: 0.45 },
  },
];

export const getFlavor = (id: FlavorId) =>
  flavors.find((flavor) => flavor.id === id) ?? flavors[0];
