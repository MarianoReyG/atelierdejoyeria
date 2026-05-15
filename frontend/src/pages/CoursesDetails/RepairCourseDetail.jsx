import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function RepairCourseDetail() {
  return (
    <>
      <div className="lg:h-[500px]">
        <img src="/a12.jpg" className="h-full w-full object-cover" alt="" />
      </div>

      <section className="bg-[#f8f7f5] text-[#334155] px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[65%]">
            <div className="max-w-3xl">
              <h1 className="font-[clashDisplay] font-medium text-3xl lg:text-5xl leading-tight">
                Workshop de Reparación de Joyas
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Un workshop intensivo para aprender técnicas básicas de joyería
                mientras reparás esas piezas dañadas que dejaste de usar y les
                das una nueva vida.
              </p>
            </div>

            <section className="mt-6 space-y-5 text-gray-700 leading-relaxed">
              <p>
                Durante el encuentro trabajaremos sobre las joyas que traigas al
                taller, aprendiendo técnicas como{" "}
                <strong>soldado, limado, calado, esmerilado y pulido</strong>.
              </p>

              <p>
                Las prácticas se adaptan a cada pieza, para que puedas reparar
                cierres, cadenas, aros, dijes, anillos o pulseras mientras
                incorporás tecnicas básicas de joyería.
              </p>

              <p>
                No hace falta experiencia previa. Compartiremos una tarde de
                trabajo, aprendizaje y merienda en un ambiente relajado y
                acompañado.
              </p>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Modalidad de la clase
              </h2>
              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                <li>
                  Duración: <strong>3 horas</strong>, 1 encuentro.
                </li>
                <li>
                  Cupo máximo: <strong>5 estudiantes</strong> por clase.
                </li>
                <li>Materiales y herramientas incluidos.</li>
              </ul>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Próximo workshop
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p c>
                  <strong>Sábado 23 de Mayo · 15:00 a 18:00 hs</strong>
                </p>

                <p>
                  El workshop se realiza en grupos reducidos y los cupos son
                  limitados.
                </p>

                <p>
                  Si la fecha actual se completa, se abrirá una nueva edición
                  según demanda.
                </p>
              </div>
            </section>
            <section className="mt-16 max-w-2xl">
              <h2 className="text-2xl font-[clashDisplay] mb-6">Ubicación</h2>

              <p className="text-gray-700 leading-relaxed">
                El taller está en <strong>Constitución</strong>, sobre Av. San
                Juan entre San José y Santiago del Estero, a metros de la
                estación San José del Subte E.
              </p>
            </section>
          </div>
          <div className="lg:w-[35%]">
            <div className="lg:sticky lg:top-24">
              <div className="border-l border-gray-300 pl-8">
                <div>
                  <h3 className="text-3xl font-[clashDisplay] leading-tight">
                    Vení a reparar tus joyas
                  </h3>

                  <p className="mt-5 text-gray-600 leading-relaxed">
                    Un encuentro intensivo para aprender técnicas básicas
                    mientras reparás tus piezas dañadas.
                  </p>
                </div>

                <div className="mt-8 text-gray-700">
                  <p className="text-sm text-gray-500 mb-5">Fecha</p>
                  <p>
                    <strong>Sábado 23 de Mayo · 15:00 a 18:00 hs</strong>
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-5">Valor</p>

                  <p className="text-3xl font-medium">$60.000</p>

                  <p className="text-gray-600 mt-2">
                    Incluye materiales y herramientas
                  </p>
                </div>

                <div className="mt-14 flex">
                  <a
                    href="https://wa.me/5491168492381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#334155] px-7 py-3 hover:bg-[#334155] hover:text-white transition rounded-sm"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RepairCourseDetail;
