import { motion } from "framer-motion";
import { Link } from "react-scroll";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-[180px] top-0 -left-40" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 blur-[180px] bottom-0 -right-32" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Disponible para trabajar
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Ian Kochniuk
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="mt-4 text-2xl md:text-3xl text-zinc-300 font-medium"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-8 max-w-2xl mx-auto text-zinc-400 leading-8 text-lg"
        >
          Desarrollo aplicaciones web modernas enfocadas en rendimiento,
          experiencia de usuario y código limpio. Me especializo en React,
          Node.js y APIs REST para transformar ideas en productos funcionales.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.7}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="px-7 py-3 rounded-xl bg-white text-black font-semibold cursor-pointer transition hover:scale-105"
          >
            Ver proyectos
          </Link>

          <a
            href="/CV-iankochniuk.pdf"
            download
            className="px-7 py-3 rounded-xl border border-zinc-700 text-white hover:border-white transition"
          >
            Descargar CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >
          {["React", "Node.js", "Express", "JavaScript", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm"
              >
                {skill}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
