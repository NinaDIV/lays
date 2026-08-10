import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aquapump-12v.vercel.app"),
  title: "Mini Bomba de Agua Silenciosa Sumergible DC 12V | AquaPump 12V Perú",
  description:
    "Venta de Mini Bomba de Agua de 12V sumergible ultrasilenciosa en todo el Perú. Motor sin escobillas Brushless, protección IP68. Envíos rápidos por Shalom a Lima, Arequipa, Trujillo, Chiclayo, Cusco, Huancayo, Piura, Ica, Tacna y todas las provincias.",
  keywords: [
    // Palabras clave principales
    "bomba de agua 12v",
    "mini bomba de agua",
    "bomba sumergible 12v",
    "bomba de agua silenciosa",
    "motor sin escobillas",
    "brushless 12v",
    "acuario",
    "fuente de jardin",
    "shalom peru",
    "characato arequipa",
    // Términos coloquiales / sencillos (para búsquedas comunes de cualquier usuario/niño)
    "bombita de agua",
    "motorcito de agua",
    "motor de agua de juguete",
    "bomba para pecera barata",
    "motor de pecera sumergible",
    "bomba de agua chiquita",
    "motor de agua 12 voltios",
    "motor sumergible chiquito",
    "bomba de agua economica",
    "bomba para pileta pequeña",
    "motor para cascada de agua",
    "minibomba para agua",
    "riego pecera mini bomba",
    // Cobertura total por regiones y departamentos del Perú
    "bomba de agua peru",
    "bomba de agua arequipa",
    "bomba de agua lima",
    "bomba de agua trujillo",
    "bomba de agua chiclayo",
    "bomba de agua piura",
    "bomba de agua cusco",
    "bomba de agua huancayo",
    "bomba de agua tacna",
    "bomba de agua ica",
    "bomba de agua iquitos",
    "bomba de agua pucallpa",
    "bomba de agua cajamarca",
    "bomba de agua chimbote",
    "bomba de agua juliaca",
    "bomba de agua tarapoto",
    "bomba de agua puno",
    "bomba de agua huanuco",
    "bomba de agua moquegua",
    "bomba de agua ilo",
    "bomba de agua tumbes",
    "bomba de agua huacho",
    "bomba de agua chincha",
    "bomba de agua pisco",
    "bomba de agua ancash",
    "bomba de agua apurimac",
    "bomba de agua ayacucho",
    "bomba de agua huancavelica",
    "bomba de agua pasco",
    "bomba de agua san martin",
    "bomba de agua madre de dios",
    "bomba de agua loreto",
    "bomba de agua ucayali",
    "bomba de agua amazonas",
  ],
  authors: [{ name: "AquaPump 12V" }],
  openGraph: {
    title: "Mini Bomba de Agua Silenciosa Sumergible DC 12V | AquaPump 12V Perú",
    description:
      "Bomba sumergible ultrasilenciosa de alto rendimiento para jardín, estanque, fuente, acuario y pecera. Envíos nacionales 100% seguros por Shalom.",
    url: "https://aquapump-12v.vercel.app",
    siteName: "AquaPump 12V",
    images: [
      {
        url: "/assets/bomba/bomba-main.png",
        width: 800,
        height: 800,
        alt: "Mini Bomba de Agua 12V",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#1aa4e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
