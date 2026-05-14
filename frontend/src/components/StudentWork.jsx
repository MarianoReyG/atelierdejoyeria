import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 1.05,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function StudentWork() {
  return (
    <section className="py-24 px-6 lg:px-12" id="trabajos-alumnos">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <motion.div
          className="lg:w-[45%] space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[clashDisplay] font-medium text-[#334155] leading-tight">
            Trabajos de alumnos
          </h2>

          <div className="w-12 h-[2px] bg-gray-300"></div>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-md">
            A lo largo de estos 11 años, alumnos de todos los niveles pasaron
            por el Atelier. Estas son algunas de las piezas que crearon:
            anillos, aros, pulseras y más.
          </p>

          <Link
            to="/trabajos-de-alumnos"
            className="inline-block mt-4 border border-[#334155] px-6 py-3 text-sm font-medium hover:bg-[#334155] hover:text-white transition rounded-sm"
          >
            Ver más
          </Link>
        </motion.div>

        <div className="lg:w-[55%] w-full">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="
              columns-2 
              sm:columns-2 
              md:columns-3 
              lg:columns-3
              gap-3 
              sm:gap-4
            "
          >
            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="a23.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="/a21.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="a2.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl md:hidden"
            >
              <motion.img
                src="a3.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="a5.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="a8.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.div
              variants={item}
              className="break-inside-avoid mb-3 sm:mb-4 overflow-hidden rounded-xl"
            >
              <motion.img
                src="a22.jpg"
                alt=""
                className="w-full rounded-xl object-cover will-change-transform"
                whileHover={{ scale: 1.03 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StudentWork;
