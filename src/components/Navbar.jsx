import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { nombre: "Inicio", destino: "inicio" },
  { nombre: "Sobre mí", destino: "about" },
  { nombre: "Skills", destino: "skills" },
  { nombre: "Proyectos", destino: "projects" },
  { nombre: "Contacto", destino: "contact" },
];

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/60 backdrop-blur-xl border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-5">
        <h1 className="text-xl font-semibold tracking-[0.25em] uppercase">
          IAN
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-sm text-zinc-400">
          {links.map((link) => (
            <li key={link.destino}>
              <Link
                to={link.destino}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-white"
                className="cursor-pointer transition-all duration-300 hover:text-white"
              >
                {link.nombre}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-xl"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuAbierto && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 backdrop-blur-xl">
          <ul className="flex flex-col items-center py-8 gap-7">
            {links.map((link) => (
              <li key={link.destino}>
                <Link
                  to={link.destino}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuAbierto(false)}
                  className="cursor-pointer text-zinc-300 hover:text-white transition"
                >
                  {link.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
