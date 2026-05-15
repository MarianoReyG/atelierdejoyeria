import React from "react";
import { motion } from "framer-motion";

function StudentWorkDetail() {
  const projects = [
    {
      id: 1,
      title: "Anillo texturado en plata",
      description:
        "Trabajo realizado durante las primeras etapas del taller, explorando texturas y técnicas básicas de calado.",

      bigImage: "/a23.jpg",
      image1: "/a21.jpg",
      image2: "/a2.jpg",
      result: "/a22.jpg",
    },

    {
      id: 2,
      title: "Pulsera artesanal",
      description:
        "Proceso completo de diseño, soldadura y pulido final realizado por una alumna del nivel intermedio.",

      bigImage: "/a5.jpg",
      image1: "/a8.jpg",
      image2: "/a3.jpg",
      result: "/a18.jpg",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#f8f7f5] text-[#334155]">
      <div className="max-w-7xl mx-auto space-y-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Trabajos de alumnos
          </p>

          <h1 className="text-5xl lg:text-7xl font-[clashDisplay] leading-[1.05]">
            Procesos y piezas creadas en el Atelier
          </h1>

          <div className="w-16 h-[2px] bg-gray-300 my-8"></div>

          <p className="text-gray-600 leading-relaxed text-lg">
            Cada pieza refleja un recorrido único: exploración, técnica,
            paciencia y creatividad. Estos son algunos procesos desarrollados
            dentro del taller.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="space-y-10"
          >
            <div className="max-w-2xl space-y-5">
              <p className="text-sm uppercase tracking-[0.15em] text-gray-400">
                Proyecto {index + 1}
              </p>

              <h2 className="text-3xl lg:text-5xl font-[clashDisplay] leading-tight">
                {project.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                {project.description}
              </p>
            </div>

            <div
              className="
                grid 
                grid-cols-1 
                lg:grid-cols-3 
                gap-4 lg:gap-6
              "
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  lg:col-span-2
                  overflow-hidden 
                  rounded-3xl
                "
              >
                <img
                  src={project.bigImage}
                  alt=""
                  className="
                    w-full 
                    h-[500px] 
                    object-cover
                    will-change-transform
                  "
                />
              </motion.div>

              <div className="flex flex-col gap-4 lg:gap-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden rounded-3xl"
                >
                  <img
                    src={project.image1}
                    alt=""
                    className="
                      w-full 
                      h-[240px] 
                      object-cover
                      will-change-transform
                    "
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden rounded-3xl"
                >
                  <img
                    src={project.image2}
                    alt=""
                    className="
                      w-full 
                      h-[240px] 
                      object-cover
                      will-change-transform
                    "
                  />
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[2rem]"
            >
              <img
                src={project.result}
                alt=""
                className="
                  w-full 
                  h-[400px] lg:h-[650px]
                  object-cover
                  will-change-transform
                "
              />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default StudentWorkDetail;
