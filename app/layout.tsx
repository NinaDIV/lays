import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini Bomba de Agua Silenciosa Sumergible DC 12V | AquaPump 12V",
  description:
    "Compra la Mini Bomba de Agua de 12V DC sumergible ultrasilenciosa en Arequipa. Motor sin escobillas Brushless, IP68, elevación de 4-8m y flujo de 600-800 L/h. Envíos a todo el Perú por Shalom.",
  keywords: [
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
  ],
  authors: [{ name: "AquaPump 12V" }],
  openGraph: {
    title: "Mini Bomba de Agua Silenciosa Sumergible DC 12V | AquaPump 12V",
    description:
      "Bomba sumergible ultrasilenciosa de alto rendimiento para jardín, estanque, fuente, acuario y pecera. Envíos nacionales por Shalom.",
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
