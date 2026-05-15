import React from "react";

function SchoolDirector() {
  return (
    <section className="text-[#334155] px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-14">
        <div className="lg:w-[55%] max-w-xl order-1 lg:order-2">
          <h2 className="text-3xl lg:text-5xl font-[clashDisplay] leading-tight">
            El verdadero director del atelier
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Supervisa cada clase, duerme durante reuniones importantes y
            controla discretamente todo lo que sucede en el taller.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Su experiencia incluye inspeccionar herramientas, acompañar procesos
            creativos y exigir atención constante.
          </p>
        </div>

        <div className="w-full lg:w-[45%] order-2 lg:order-1">
          <img
            src="/pipo2.jpg"
            alt=""
            className="w-full  object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default SchoolDirector;
