import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Workshops() {
  return (
    <section className="pt-24 px-6 lg:px-12 text-[#334155]" id="talleres">
      <div className="max-w-4xl mb-16">
        <h2 className="text-3xl lg:text-5xl font-[clashDisplay] font-medium leading-tight">
          Talleres
        </h2>

        <p className="text-xl text-gray-600 mt-4">
          Encontrá el curso ideal para empezar o perfeccionarte en joyería
        </p>
      </div>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.img
            src="/a26.jpeg"
            alt=""
            className="w-full lg:w-1/2 lg:h-[400px] object-cover rounded-xl"
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            }}
          />

          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-2xl lg:text-3xl font-[clashDisplay]">
              Taller presencial Inicial de Joyería
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Empezá desde cero y diseñá tus propias piezas. Clases semanales de
              2:30 hs, con cupos reducidos y acompañamiento personalizado.
            </p>

            <p className="text-sm font-medium text-gray-500">
              No se requiere experiencia previa
            </p>

            <Link
              to="/cursos/taller-inicial"
              className="inline-block mt-4 border border-[#334155] px-6 py-3 text-sm font-medium hover:bg-[#334155] hover:text-white transition rounded-sm"
            >
              Más información
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          <motion.img
            src="/a12.jpg"
            alt=""
            className="w-full lg:w-1/2 lg:h-[400px] object-cover rounded-xl"
            initial={{
              clipPath: "inset(0 0 0 100%)",
            }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            }}
          />

          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-2xl lg:text-3xl font-[clashDisplay]">
              Workshop de Reparación de Joyas
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Repará tus propias piezas aprendiendo técnicas como soldado,
              pulido y acabado. Recuperá tus joyas con tus propias manos.
            </p>

            <p className="text-sm font-medium text-gray-500">
              No se requiere experiencia previa
            </p>

            <Link
              to="/cursos/taller-reparacion-de-joyas"
              className="inline-block mt-4 border border-[#334155] px-6 py-3 text-sm font-medium hover:bg-[#334155] hover:text-white transition rounded-sm"
            >
              Más información
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.img
            src="/a25.jpeg"
            alt=""
            className="w-full lg:w-1/2 lg:h-[400px] object-cover rounded-xl"
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0% 0 0)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
            }}
          />

          <div className="lg:w-1/2 space-y-5">
            <h3 className="text-2xl lg:text-3xl font-[clashDisplay]">
              Taller de Dibujo de Joyas
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              Aprendé a diseñar tus piezas desde el papel, trabajando luces,
              sombras y color con diferentes tipos de técnicas.
            </p>

            <p className="text-sm font-medium text-gray-500">
              No se requiere experiencia previa
            </p>

            <Link
              to="/cursos/taller-dibujo-de-joyas"
              className="inline-block mt-4 border border-[#334155] px-6 py-3 text-sm font-medium hover:bg-[#334155] hover:text-white transition rounded-sm"
            >
              Más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshops;
