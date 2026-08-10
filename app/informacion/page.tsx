import { Droplets } from "lucide-react";

export default function InformacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1aa4e8] via-[#0962b6] to-[#043b74] text-white px-6 py-12 md:px-16 font-sans">
      <header className="max-w-4xl mx-auto flex items-center justify-between border-b border-white/20 pb-6 mb-10">
        <a href="/" className="flex items-center gap-2 text-2xl font-black">
          <Droplets className="size-8 text-cyan-300 animate-pulse" />
          <span>AquaPump 12V</span>
        </a>
        <a href="/" className="text-sm bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition">
          Volver al Inicio
        </a>
      </header>

      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-8 text-center">
          Información, Preguntas Frecuentes y Envíos Shalom
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4 text-cyan-200">Preguntas Frecuentes</h2>
          <div className="space-y-6 text-white/90">
            <div>
              <h3 className="font-bold text-[16px]">¿Cuánto cuesta la mini bomba de agua en Perú?</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                La mini bomba de agua sumergible sola de 12V DC tiene un precio de S/ 45.00 soles. También ofrecemos la opción de comprar el combo completo que incluye la bomba de agua de 12V más adaptador de corriente a enchufe de casa (220V) por un total de S/ 50.00 soles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[16px]">¿Hacen envíos a provincias por Shalom?</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Sí, enviamos de forma diaria a nivel nacional a través de la agencia de transportes Shalom. Hacemos envíos rápidos y seguros a todos los departamentos de Perú (Lima, Trujillo, Chiclayo, Piura, Cusco, Puno, Huancayo, Tacna, Ica, etc.) con cobro en destino o previo pago.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[16px]">¿Para qué sirve una bomba de agua sumergible de 12 voltios?</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Este motor de agua de 12V es ideal para bombear agua en peceras de acuario, piletas decorativas de jardín, cascadas artificiales de interior, sistemas hidropónicos de cultivo y proyectos escolares de riego automático.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[16px]">¿Qué cables tiene para la conexión de corriente?</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                La minibomba trabaja a 12V DC. Cuenta con una conexión muy simple de dos cables: el cable rojo corresponde al polo positivo (+) y el cable negro corresponde al polo negativo (-).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4 text-cyan-200">Cobertura de Envíos Shalom a todas las Regiones de Perú</h2>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">
            Realizamos la distribución rápida de minibombas de agua silenciosas sumergibles a las siguientes provincias y distritos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-white/80">
            <div className="p-3 bg-white/5 rounded-lg"><strong>Amazonas:</strong> Chachapoyas, Bagua</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Áncash:</strong> Chimbote, Huaraz</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Apurímac:</strong> Abancay, Andahuaylas</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Arequipa:</strong> Characato, Cayma, Bustamante</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Ayacucho:</strong> Huamanga, Puquio</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Cajamarca:</strong> Cajamarca, Jaén</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Cusco:</strong> Cusco Cercado, Sicuani</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Huancavelica:</strong> Lircay, Castrovirreyna</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Huánuco:</strong> Tingo María, Huánuco</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Ica:</strong> Ica, Chincha, Pisco, Nasca</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Junín:</strong> Huancayo, Tarma, Jauja</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>La Libertad:</strong> Trujillo, Chepén, Pacasmayo</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Lambayeque:</strong> Chiclayo, Lambayeque</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Lima:</strong> Lima Metropolitana, Huacho, Cañete</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Loreto:</strong> Iquitos, Yurimaguas</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Madre de Dios:</strong> Puerto Maldonado</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Moquegua:</strong> Ilo, Moquegua, Mariscal Nieto</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Pasco:</strong> Cerro de Pasco, Oxapampa</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Piura:</strong> Piura, Sullana, Talara, Paita</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Puno:</strong> Puno, Juliaca, Ayaviri</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>San Martín:</strong> Tarapoto, Moyobamba</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Tacna:</strong> Tacna, Locumba, Tarata</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Tumbes:</strong> Tumbes, Zarumilla, Contralmirante</div>
            <div className="p-3 bg-white/5 rounded-lg"><strong>Ucayali:</strong> Pucallpa, Coronel Portillo</div>
          </div>
        </div>
      </section>
    </main>
  );
}
