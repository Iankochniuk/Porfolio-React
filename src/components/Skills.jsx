import { motion } from "framer-motion";
import skills from "../data/skills";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Tecnologías
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">Stack Tecnológico</h2>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-400 leading-8">
          Estas son las herramientas que utilizo para desarrollar aplicaciones
          modernas, escalables y enfocadas en ofrecer una excelente experiencia
          de usuario.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => {
          const Icono = skill.icono;

          return (
            <motion.div
              variants={item}
              key={skill.id}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-8 flex flex-col items-center transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <Icono className="text-5xl text-zinc-300 transition duration-300 group-hover:text-white" />

              <h3 className="mt-6 text-lg font-semibold">{skill.nombre}</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Skills;
