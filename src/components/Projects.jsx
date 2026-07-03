import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Mis Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
