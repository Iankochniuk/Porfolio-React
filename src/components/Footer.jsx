import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-14"
      >
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-[0.2em]">IAN.</h2>

            <p className="mt-5 text-zinc-400 max-w-sm leading-7">
              Gracias por visitar mi portfolio. Espero que este sea el comienzo
              de una gran oportunidad para trabajar juntos.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:ianisaias@gmail.com"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition"
            >
              <FiMail />
              Email
            </a>

            <a
              href="https://github.com/Iankochniuk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition"
            >
              <FiGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ian-isa%C3%ADas-kochniuk/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} Ian Kochniuk</span>

          <span>Desarrollado con React + Tailwind CSS</span>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
