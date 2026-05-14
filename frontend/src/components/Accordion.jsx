import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "¿Necesito tener experiencia previa?",
      answer:
        "No, el taller está diseñado para personas sin experiencia. Empezamos con ejercicios básicos y luego avanzás a proyectos propios, siempre con mi acompañamiento.",
    },
    {
      id: 2,
      question: "¿Qué herramientas necesito llevar?",
      answer:
        "Ninguna. El taller está completamente equipado con las herramientas necesarias, como arco de sierra, limas, pinzas, etc.",
    },
    {
      id: 3,
      question: "¿Qué materiales incluye el curso?",
      answer:
        "El primer trabajo incluye los materiales (alpaca, cobre o bronce) y las herramientas. Para los siguientes proyectos, cada alumnx deberá traer sus materiales. Te doy una guía completa de proveedores y también podés comprarlos en el taller según disponibilidad.",
    },
    {
      id: 4,
      question: "¿Puedo trabajar con plata o gemas?",
      answer:
        "Sí, podés traer tus propias piedras o plata, o adquirirlas en el taller, según la disponibilidad. También te voy a guiar sobre dónde conseguir buenos proveedores si preferís comprarlas por tu cuenta.",
    },
    {
      id: 5,
      question: "¿Cuánto dura el curso?",
      answer:
        "No hay una duración fija. Cada persona avanza a su ritmo. El primer proyecto suele llevar entre 4 y 6 clases, dependiendo de tu tiempo y dedicación.",
    },
    {
      id: 6,
      question: "¿Qué pasa si falto a una clase?",
      answer:
        "Si avisás con anticipación, podés recuperar una clase dentro del mismo mes. Las ausencias sin aviso no pueden recuperarse.",
    },
    {
      id: 7,
      question: "¿Dónde está ubicado el taller?",
      answer:
        "En el barrio de Constitución (CABA), sobre Av. San Juan, entre San José y Santiago del Estero. A metros de la estación San José del Subte E.",
    },
    {
      id: 8,
      question: "¿Cómo me inscribo?",
      answer:
        "Podés escribirme directamente desde el formulario de contacto de esta página, por redes sociales o por WhatsApp. Te voy a responder lo antes posible con toda la info para reservar tu lugar.",
    },
  ];

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-2">
      {faqs.map(({ id, question, answer }) => (
        <motion.div
          key={id}
          layout
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-b border-[#334155]/20 overflow-hidden"
        >
          <motion.button
            layout
            onClick={() => handleToggle(id)}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.995 }}
            className="
          w-full flex justify-between items-center 
          px-6 py-5
          transition-colors
        "
          >
            <span className="text-left text-base font-semibold text-gray-800">
              {question}
            </span>

            <motion.svg
              animate={{
                rotate: open === id ? 180 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-5 h-5 text-gray-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.button>

          <AnimatePresence initial={false}>
            {open === id && (
              <motion.div
                key="content"
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -8 }}
                  animate={{ y: 0 }}
                  exit={{ y: -8 }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                px-6 pb-5
                text-[#334155]
                leading-relaxed
                text-[15px]
              "
                >
                  {answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
