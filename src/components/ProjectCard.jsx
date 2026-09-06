import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function ProjectCard({ proyecto }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600"
    >
      {/* VIDEO */}
      <div className="overflow-hidden">
        <motion.video
          src={proyecto.video}
          autoPlay
          muted
          loop
          playsInline
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="h-64 w-full object-cover"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">{proyecto.titulo}</h3>

        <p className="mt-4 leading-7 text-zinc-400">{proyecto.descripcion}</p>

        {/* Tecnologías */}
        <div className="mt-6 flex flex-wrap gap-3">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300 transition group-hover:border-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="mt-8 flex items-center gap-6">
          <motion.a
            whileHover={{ x: 5 }}
            href={proyecto.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
          >
            <FiGithub />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ x: 5 }}
            href={proyecto.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white"
          >
            Ver proyecto
            <FiArrowUpRight />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
