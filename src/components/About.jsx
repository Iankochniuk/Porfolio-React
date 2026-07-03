import Reveal from "./ui/Reveal";

function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Soy desarrollador Frontend especializado en React y Tailwind CSS.
          Disfruto construir aplicaciones modernas, optimizadas y con una
          excelente experiencia de usuario. Actualmente continúo ampliando mis
          conocimientos en desarrollo Full Stack y desarrollo de videojuegos con
          Godot, creando proyectos reales para seguir creciendo
          profesionalmente.
        </p>
      </Reveal>
    </section>
  );
}

export default About;
