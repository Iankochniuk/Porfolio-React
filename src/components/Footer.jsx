import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-2xl">
          <a
            href="https://github.com/Iankochniuk"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ian-isa%C3%ADas-kochniuk/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ianisaias@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
