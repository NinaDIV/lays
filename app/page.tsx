import { LandingHero } from "@/components/Hero/LandingHero";

export default function Home() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mini Bomba de Agua Silenciosa Sumergible DC 12V",
    "image": [
      "https://aquapump-12v.vercel.app/assets/bomba/bomba-main.png",
      "https://aquapump-12v.vercel.app/assets/bomba/bomba-intake.png",
      "https://aquapump-12v.vercel.app/assets/bomba/bomba-dimensiones.png",
      "https://aquapump-12v.vercel.app/assets/bomba/bomba-chorro.png",
      "https://aquapump-12v.vercel.app/assets/bomba/bomba-rosca.png"
    ],
    "description": "Mini bomba de agua sumergible DC 12V ultrasilenciosa con motor sin escobillas Brushless. Elevación de 4 a 8 metros, flujo máximo 600-800 L/h, protección impermeable IP68. Envíos rápidos por Shalom a todo el Perú.",
    "sku": "AQUAPUMP-12V-BRUSHLESS",
    "mpn": "AP-12V-BL",
    "brand": {
      "@type": "Brand",
      "name": "AquaPump"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://aquapump-12v.vercel.app",
      "priceCurrency": "PEN",
      "price": "45.00",
      "priceValidUntil": "2029-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "AquaPump Perú",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Characato",
          "addressRegion": "Arequipa",
          "addressCountry": "PE"
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <LandingHero />
    </>
  );
}
