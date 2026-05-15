import React from "react";
import { motion } from "framer-motion";

function StudentWorkDetail() {
  const projects = [
    {
      id: 1,
      title: "Dije Hoja de Parra de Cobre con Granate ",

      bigImage: "/ta1.jpeg",
      image1: "/ta2.jpg",
      image2: "/ta3.jpg",

      author: "Laura Tortoriello",
    },

    {
      id: 2,
      title: "Anillo Las Flores de bronce",

      bigImage: "/a22.jpg",
      image1: "/ta5.jpg",
      image2: "/ta6.jpg",

      author: "Flor Staffora",
    },

    {
      id: 3,
      title: "Anillo texturado bombé de cobre con hilo cuadrado de bronce",

      bigImage: "/ta7.jpg",
      image1: "/ta8.jpg",
      image2: "/ta9.jpg",

      author: "Viviana Pinto",
    },

    {
      id: 4,
      title: "Anillo de bronce con reconstituido",

      bigImage: "/ta10.jpg",
      image1: "/ta11.jpg",
      image2: "/ta12.jpg",

      author: "Ludmila Caruso",
    },

    {
      id: 5,
      title: "Dije Conejo de bronce",

      bigImage: "/ta13.jpg",
      image1: "/ta14.jpg",
      image2: "/ta15.jpg",

      author: "Natalia Casana Parra",
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
    <section className="py-12 px-6 lg:px-12 bg-[#f8f7f5] text-[#334155]">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Trabajos de alumnos
          </p>

          <h1 className="text-5xl lg:text-7xl font-[clashDisplay] leading-[1.05]">
            Procesos de piezas creadas en el Atelier
          </h1>

          <div className="w-16 h-[2px] bg-gray-300 my-8"></div>

          <p className="text-gray-600 leading-relaxed text-lg">
            Cada pieza refleja un recorrido único: exploración, técnica,
            paciencia y creatividad. Estos son algunos procesos desarrollados
            dentro del taller.
          </p>
        </motion.div>

        {projects.map((project) => (
          <motion.article
            key={project.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="
      grid
      grid-cols-1
      lg:grid-cols-[320px_1fr]
      gap-8 lg:gap-12
      items-start
    "
          >
            {/* LEFT CONTENT */}
            <div className="space-y-3 lg:sticky lg:top-24">
              <h2 className="text-3xl lg:text-4xl font-[clashDisplay] leading-tight">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                Autor/a: {project.author}
              </p>
            </div>

            {/* RIGHT GALLERY */}
            <div
              className="
        grid
        grid-cols-1
        md:grid-cols-[1.15fr_1fr]
        gap-4 lg:gap-6
      "
            >
              {/* BIG IMAGE */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
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

              {/* SMALL IMAGES */}
              <div className="flex flex-col gap-4 lg:gap-6">
                {/* IMAGE 1 */}
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
              h-[238px]
              object-cover
              will-change-transform
            "
                  />
                </motion.div>

                {/* IMAGE 2 */}
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
              h-[238px]
              object-cover
              will-change-transform
            "
                  />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default StudentWorkDetail;
