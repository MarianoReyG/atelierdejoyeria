import React from "react";
import Portada from "../assets/asd.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section className="py-16 lg:py-24" id="sobre-atelier">
        <div className="px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-[45%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-[clashDisplay] text-[#334155] leading-tight">
              Sobre Atelier de Joyería
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[2px] bg-gray-300 my-6"
            />

            <div className="space-y-5 text-sm lg:text-base text-gray-600 leading-relaxed">
              <p>
                El taller nació hace más de 11 años con el objetivo de compartir
                el arte de la joyería en un espacio cómodo, creativo y
                completamente equipado.
              </p>

              <p>
                A lo largo de este tiempo, acompañé a muchas personas en sus
                primeros pasos y en la materialización de proyectos personales,
                desde un enfoque cercano y flexible.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-gray-300 pl-4 italic text-gray-700">
              Un espacio donde la técnica y la creatividad se encuentran.
            </div>

            <h3 className="mt-10 text-xl lg:text-2xl font-[clashDisplay] text-[#334155]">
              Mi compromiso
            </h3>

            <p className="mt-4 text-sm lg:text-base text-gray-600 leading-relaxed">
              Acompañarte respetando tus tiempos, para que desarrolles tus
              habilidades y encuentres tu propia forma de expresión a través de
              la joyería.
            </p>
          </motion.div>

          <div className="lg:w-[55%] w-full">
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="/a18.jpg"
                alt="Taller de joyería"
                className="w-full h-[420px] lg:h-[600px] object-cover"
                initial={{
                  scale: 1.12,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
