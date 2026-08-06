import Reveal from "./ui/Reveal";

function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Soy desarrollador Full Stack Junior apasionado por crear aplicaciones
          web modernas utilizando <strong>React.js</strong>,{" "}
          <strong>JavaScript</strong> y <strong>Node.js</strong>. Me enfoco en
          desarrollar interfaces intuitivas, código limpio y soluciones
          escalables, siempre priorizando una excelente experiencia de usuario.
          <br />
          <br />
          Actualmente continúo fortaleciendo mis conocimientos en tecnologías
          Frontend y Backend mediante proyectos reales, aplicando buenas
          prácticas, consumo de APIs, manejo de estado y desarrollo de
          aplicaciones completas. Disfruto aprender nuevas herramientas,
          enfrentar desafíos y trabajar en equipo para seguir creciendo como
          desarrollador profesional.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
