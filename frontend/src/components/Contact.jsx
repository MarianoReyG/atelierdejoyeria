import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
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
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <section className="py-20 px-6 lg:px-12 text-[#334155]" id="contacto">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            className="lg:w-[50%] space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-3xl lg:text-5xl font-[clashDisplay] leading-tight">
              ¿Tenés alguna duda? ¡Escribime!
            </h2>

            <div className="w-12 h-[2px] bg-gray-300"></div>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Podés contactarme por WhatsApp o redes sociales. Respondo
              personalmente cada consulta para ayudarte a elegir el taller que
              mejor se adapte a vos.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-[50%] flex flex-col gap-8 md:mt-2"
          >
            <motion.a
              variants={item}
              href="https://wa.me/5491168492381"
              target="_blank"
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
              flex items-center gap-4 
              border border-[#334155] 
              px-6 py-5 rounded-xl 
              hover:bg-[#334155] hover:text-white 
              transition
              will-change-transform
            "
            >
              <FaWhatsapp className="text-4xl" />

              <div>
                <p className="font-medium text-lg">WhatsApp</p>
                <p className="text-sm opacity-70">Respuesta rápida</p>
              </div>
            </motion.a>

            <motion.div
              variants={container}
              className="grid sm:grid-cols-2 gap-6"
            >
              <motion.a
                variants={item}
                href="https://instagram.com/valeriapuigatelierdejoyeria"
                target="_blank"
                whileHover={{
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
                className="space-y-2"
              >
                <div className="flex gap-2 items-center">
                  <FaInstagram className="text-2xl" />
                  <p className="font-medium">Instagram</p>
                </div>

                <p className="text-sm text-gray-600">
                  @valeriapuigatelierdejoyeria
                </p>
              </motion.a>

              <motion.a
                variants={item}
                href="https://facebook.com/valeriapuigatelierdejoyeria"
                target="_blank"
                whileHover={{
                  y: -3,
                }}
                transition={{ duration: 0.25 }}
                className="space-y-2"
              >
                <div className="flex gap-2 items-center">
                  <FaFacebookSquare className="text-2xl" />
                  <p className="font-medium">Facebook</p>
                </div>

                <p className="text-sm text-gray-600">Atelier de Joyería</p>
              </motion.a>

              <motion.div variants={item} className="space-y-2 sm:col-span-2">
                <div className="flex gap-2 items-center">
                  <HiOutlineMail className="text-2xl" />
                  <p className="font-medium">Email</p>
                </div>

                <p className="text-sm text-gray-600 break-all">
                  valeriapuigatelierdejoyeria@gmail.com
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;
