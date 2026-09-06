import { motion } from "framer-motion";
import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

function Projects() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 py-32">
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Proyectos Destacados
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-zinc-400">
          Estos proyectos reflejan mi forma de trabajar: código limpio,
          interfaces modernas, desarrollo Full Stack y una fuerte atención a la
          experiencia del usuario.
        </p>
      </motion.div>

      {/* Proyectos */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {projects.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </motion.div>

      {/* Línea decorativa */}
      <div className="mt-28 flex justify-center">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>
    </section>
  );
}

export default Projects;
