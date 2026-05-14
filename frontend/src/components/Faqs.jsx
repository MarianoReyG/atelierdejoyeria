import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";

function Faqs() {
  return (
    <section
      className="py-20 px-6 lg:px-12 text-[#334155]"
      id="preguntas-frecuentes"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        <motion.div
          className="lg:w-[40%] space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[clashDisplay] font-medium leading-tight">
            Preguntas frecuentes
          </h2>

          <div className="w-12 h-[2px] bg-gray-300"></div>

          <p className="text-gray-600 leading-relaxed">
            Si estás pensando en sumarte al taller, acá vas a encontrar
            respuestas a las dudas más comunes sobre la modalidad, materiales y
            dinámica de las clases.
          </p>

          <p className="text-sm text-gray-500">
            ¿Tenés otra consulta? Podés escribirme directamente.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-[60%]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Accordion />
        </motion.div>
      </div>
    </section>
  );
}

export default Faqs;
