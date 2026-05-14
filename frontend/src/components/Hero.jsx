import React from "react";
import Portada from "../assets/asd.jpeg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-6 py-10 md:py-12 lg:px-12 lg:w-[55%] text-[#334155]">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              uppercase text-sm 
              tracking-[0.2em] 
              text-gray-500 
              mb-4
            "
          >
            Valeria Puig
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: 120,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl lg:text-7xl 
                font-[clashDisplay] 
                font-medium 
                leading-[1.1]
                will-change-transform
              "
            >
              Atelier de Joyería
            </motion.h1>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6 
              text-base lg:text-lg 
              text-gray-600 
              max-w-lg 
              leading-relaxed 
              italic
            "
          >
            Descubrí el arte de la joyería creando tus propios diseños
          </motion.p>
        </div>

        <div className="lg:w-[45%] w-full mr-10 p-6 md:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="overflow-hidden rounded-3xl"
          >
            <motion.img
              src={Portada}
              alt="Taller de joyería"
              className="
                w-full lg:h-full 
                object-cover
                will-change-transform
              "
              initial={{
                scale: 1.12,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
