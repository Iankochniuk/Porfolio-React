import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap, FiUsers } from "react-icons/fi";

const cards = [
  {
    icon: FiCode,
    title: "Código limpio",
    text: "Escribo código mantenible, reutilizable y siguiendo buenas prácticas.",
  },
  {
    icon: FiLayers,
    title: "Full Stack",
    text: "Desarrollo aplicaciones completas desde el frontend hasta el backend.",
  },
  {
    icon: FiZap,
    title: "Rendimiento",
    text: "Me enfoco en crear aplicaciones rápidas y optimizadas para el usuario.",
  },
  {
    icon: FiUsers,
    title: "Trabajo en equipo",
    text: "Disfruto colaborar, aprender y construir soluciones junto a otros desarrolladores.",
  },
];

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
          Sobre mí
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Desarrollo aplicaciones web con foco en la experiencia del usuario.
        </h2>

        <p className="mt-8 text-zinc-400 leading-8 text-lg">
          Soy desarrollador Full Stack y disfruto convertir ideas en productos
          funcionales. Me apasiona construir interfaces modernas, escribir
          código limpio y desarrollar soluciones escalables utilizando el
          ecosistema JavaScript.
        </p>

        <p className="mt-6 text-zinc-400 leading-8 text-lg">
          Actualmente sigo perfeccionando mis conocimientos mediante proyectos
          personales, explorando nuevas tecnologías y aplicando buenas prácticas
          para crecer profesionalmente.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-zinc-600"
            >
              <Icon className="text-3xl text-zinc-300 group-hover:text-white transition mb-6" />

              <h3 className="text-xl font-semibold">{card.title}</h3>

              <p className="mt-4 text-zinc-400 leading-7">{card.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default About;
