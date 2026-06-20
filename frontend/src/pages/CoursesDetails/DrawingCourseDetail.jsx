import React from "react";
import Dibujo from "../../assets/dibujo.jpg";
import { FaWhatsapp } from "react-icons/fa";

function DrawingCourseDetail() {
  return (
    <>
      <div className="lg:h-[500px]">
        <img src="/a25.jpeg" className="h-full w-full object-cover" alt="" />
      </div>
      <section className="bg-[#f8f7f5] text-[#334155] px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[65%]">
            <div className="max-w-3xl">
              <h1 className="font-[clashDisplay] font-medium text-3xl lg:text-5xl leading-tight">
                Taller de Dibujo de Joyas
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Un taller práctico para aprender a dibujar tus propias piezas de
                joyería, desarrollando herramientas para comunicar ideas,
                diseñar colecciones y presentar proyectos de forma profesional.
              </p>
            </div>

            <section className="mt-6 space-y-5 text-gray-700 leading-relaxed">
              <p>
                A lo largo de las clases vas a trabajar distintas técnicas de
                dibujo aplicadas al diseño de joyas, desde el boceto inicial,
                planteo de perspectivas, vistas aclaratorias, luces y sombras
                para el desarrollo de tus proyectos.
              </p>
              <p>
                <strong>No hace falta experiencia previa.</strong> El objetivo
                es que puedas construir un lenguaje propio para diseñar y
                comunicar tus ideas con claridad.
              </p>
              <p className="mt-4">
                Podés comenzar en cualquier momento del año.{" "}
                <strong>Primera clase gratuita.</strong>
              </p>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Modalidad de las clases
              </h2>

              <ul className="list-disc pl-5 space-y-4 text-gray-700 leading-relaxed">
                <li>
                  Clases de <strong>2 horas y 30 minutos</strong>, una vez por
                  semana.
                </li>

                <li>
                  Cupo máximo de <strong>4 alumnos</strong> por clase.
                </li>

                <li>Incluye materiales durante todo el curso.</li>
              </ul>
            </section>

            <section className="mt-16 max-w-2xl">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Metodología personalizada
              </h2>

              <p className="text-gray-700 leading-relaxed">
                El cupo reducido permite un seguimiento personalizado,
                respetando tu ritmo y tus intereses.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                El programa es abierto: lo diseñamos juntos/as según los dibujos
                que quieras desarrollar.
              </p>
            </section>
            <section className="mt-16">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Horarios disponibles
              </h2>

              <div className="grid sm:grid-cols-3 gap-x-10 gap-y-3 text-gray-700">
                <p>
                  <strong>Lunes:</strong> 17:30–20:00
                </p>
                <p>
                  <strong>Miércoles:</strong> 17:30–20:00
                </p>
                <p>
                  <strong>Sábados:</strong> 14:00–16:30
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-5">
                Si no podés asistir a una clase, podés recuperarla dentro del
                mes según disponibilidad.
              </p>
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
                  <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-4">
                    Primera clase gratuita
                  </p>

                  <h3 className="text-3xl font-[clashDisplay] leading-tight">
                    Vení a dibujar tus futuras joyas
                  </h3>

                  <p className="mt-5 text-gray-600 leading-relaxed">
                    Conocé el espacio, las tecnicas y cómo funcionan las clases
                    antes de empezar.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-2">Precio</p>

                  <div className="space-y-5">
                    <div>
                      <p className="text-3xl font-medium">$80.000</p>

                      <p className="text-gray-600">4 clases mensuales</p>
                    </div>

                    <div>
                      <p className="text-xl font-medium">$26.500</p>

                      <p className="text-gray-600">Clase suelta</p>
                    </div>
                  </div>
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

export default DrawingCourseDetail;
