import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    nombre: "Inicio",
    destino: "inicio",
  },
  {
    nombre: "Sobre mí",
    destino: "about",
  },
  {
    nombre: "Skills",
    destino: "skills",
  },
  {
    nombre: "Proyectos",
    destino: "projects",
  },
  {
    nombre: "Contacto",
    destino: "contact",
  },
];

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);
  useEffect(() => {
    setScroll(window.scrollY > 50);

    return () => {};
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Ian.dev</h1>
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-2xl"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden md:flex gap-8">
          {" "}
          {links.map((link) => (
            <li key={link.destino}>
              <Link
                to={link.destino}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {link.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {menuAbierto && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-slate-950">
          {links.map((link) => (
            <li key={link.destino}>
              <Link
                to={link.destino}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMenuAbierto(false)}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {link.nombre}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
