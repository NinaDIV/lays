import { LandingHero } from "@/components/Hero/LandingHero";

export default function Home() {
  const productSchema = {
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
      "priceValidUntil": "2030-12-31",
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

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AquaPump Perú",
    "image": "https://aquapump-12v.vercel.app/assets/bomba/bomba-main.png",
    "priceRange": "$$",
    "telephone": "+51900094969",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Characato",
      "addressLocality": "Characato",
      "addressRegion": "Arequipa",
      "postalCode": "04012",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.4716,
      "longitude": -71.4939
    },
    "url": "https://aquapump-12v.vercel.app",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Lima" },
      { "@type": "AdministrativeArea", "name": "Arequipa" },
      { "@type": "AdministrativeArea", "name": "La Libertad" },
      { "@type": "AdministrativeArea", "name": "Lambayeque" },
      { "@type": "AdministrativeArea", "name": "Piura" },
      { "@type": "AdministrativeArea", "name": "Cusco" },
      { "@type": "AdministrativeArea", "name": "Junin" },
      { "@type": "AdministrativeArea", "name": "Ancash" },
      { "@type": "AdministrativeArea", "name": "Ica" },
      { "@type": "AdministrativeArea", "name": "San Martin" },
      { "@type": "AdministrativeArea", "name": "Loreto" },
      { "@type": "AdministrativeArea", "name": "Ucayali" },
      { "@type": "AdministrativeArea", "name": "Tacna" },
      { "@type": "AdministrativeArea", "name": "Moquegua" },
      { "@type": "AdministrativeArea", "name": "Puno" },
      { "@type": "AdministrativeArea", "name": "Cajamarca" },
      { "@type": "AdministrativeArea", "name": "Huanuco" },
      { "@type": "AdministrativeArea", "name": "Tumbes" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta la mini bomba de agua de 12V en Perú?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La mini bomba de agua sumergible sola de 12V DC cuesta S/ 45.00 soles. También se ofrece la opción de comprar el combo de la bomba de agua más adaptador de corriente a enchufe de casa por S/ 50.00 soles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacen envíos de la bomba de agua a provincias por Shalom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, realizamos envíos de la bomba de agua sumergible a todo el Perú utilizando la agencia de transportes Shalom. Enviamos de forma diaria a Lima, Trujillo, Chiclayo, Piura, Cusco, Puno, Huancayo, Tacna, Ica y demás departamentos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Para qué sirve un motorcito o mini bomba de agua sumergible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Este motor de agua de 12V sirve para bombear agua en peceras de acuario, piletas decorativas de jardín, cascadas artificiales de interior, sistemas hidropónicos de cultivo y proyectos escolares de riego."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué cables tiene para la conexión de corriente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cuenta con una conexión muy simple de dos cables: el cable rojo corresponde al polo positivo (+) y el cable negro corresponde al polo negativo (-)."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingHero />
    </>
  );
}
