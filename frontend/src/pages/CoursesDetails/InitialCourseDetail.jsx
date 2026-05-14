import React from "react";
import Dibujo from "../../assets/dibujo.jpg";
import { FaWhatsapp } from "react-icons/fa";

function InitialCourseDetail() {
  return (
    <>
      <div className="lg:h-[550px]">
        <img src="/a26.jpeg" className="h-full w-full object-cover" alt="" />
      </div>

      <section className="bg-[#f8f7f5] text-[#334155] px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[65%]">
            <div className="max-w-3xl">
              <h1 className="font-[clashDisplay] font-medium text-3xl lg:text-5xl leading-tight">
                Taller presencial Inicial de Joyería
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Un espacio para aprender joyería desde cero, explorando técnicas
                tradicionales y desarrollando piezas propias a tu ritmo.
              </p>
            </div>

            <section className="mt-6 space-y-5 text-gray-700 leading-relaxed">
              <p>
                Algunas técnicas que abordaremos incluyen{" "}
                <strong>
                  calado, soldado, limado, reconstituido y engarces de virola
                </strong>
                , entre otras.
              </p>

              <p>
                La profundidad y variedad dependerán del proyecto que elijas y
                del tiempo que decidas dedicar al curso (recomendado: mínimo de
                7 a 8 meses).
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
                  Cupo máximo de <strong>5 estudiantes</strong> por clase.
                </li>

                <li>Incluye herramientas durante todo el curso.</li>

                <li>
                  Primer trabajo con materiales incluidos (alpaca, cobre y/o
                  bronce).
                </li>

                <li>
                  Luego, cada estudiante podrá traer sus materiales o
                  adquirirlos en el taller.
                </li>

                <li>
                  Si querés trabajar con plata o piedras, podés traerlas o
                  comprarlas según disponibilidad.
                </li>
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
                El programa es abierto: lo diseñamos juntos/as según los
                proyectos que quieras desarrollar.
              </p>

              <p className="mt-4 font-bold">
                Podés comenzar en cualquier momento del año.
              </p>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-[clashDisplay] mb-6">
                Horarios disponibles
              </h2>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-gray-700">
                <p>
                  <strong>Lunes:</strong> 14:00–16:30 / 17:30–20:00
                </p>

                <p>
                  <strong>Martes:</strong> 10:00–12:30 / 14:00–16:30 /
                  17:30–20:00
                </p>

                <p>
                  <strong>Miércoles:</strong> 14:00–16:30 / 17:30–20:00
                </p>

                <p>
                  <strong>Jueves:</strong> 10:00–12:30 / 14:00–16:30 /
                  17:30–20:00
                </p>

                <p>
                  <strong>Viernes:</strong> 14:00–16:30 / 17:30–20:00
                </p>

                <p>
                  <strong>Sábados:</strong> 10:00–12:30 / 14:00–16:30
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
                    Vení a probar el taller
                  </h3>

                  <p className="mt-5 text-gray-600 leading-relaxed">
                    Conocé el espacio, las herramientas y cómo funcionan las
                    clases antes de empezar.
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
                    href="https://wa.me/1168492381"
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

export default InitialCourseDetail;
