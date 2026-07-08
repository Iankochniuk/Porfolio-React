import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Hola, soy{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ian Kochniuk
        </span>
      </h1>

      <h2 className="text-2xl md:text-4xl text-slate-300 mb-4">
        Frontend Developer
      </h2>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
        Desarrollador Frontend especializado en React y apasionado por crear
        aplicaciones modernas, rápidas y con una excelente experiencia de
        usuario.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <Link
          to="projects"
          smooth
          duration={500}
          offset={-80}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold cursor-pointer transition"
        >
          Ver proyectos
        </Link>

        <Link
          to="contact"
          smooth
          duration={500}
          offset={-80}
          className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold cursor-pointer transition"
        >
          Contactarme
        </Link>

        <a
          href="/Ian_Kochniuk_CV.pdf"
          download
          className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold cursor-pointer transition"
        >
          Descargar CV
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
