function ProjectCard({ proyecto }) {
  return (
    <div
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg
hover:-translate-y-3 hover:shadow-2xl
transition-all duration-300"
    >
      <video
        src={proyecto.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{proyecto.titulo}</h3>

        <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>

        <div className="flex flex-wrap gap-2 my-4">
          {proyecto.tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
            >
              {tecnologia}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={proyecto.github}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href={proyecto.demo}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-500 hover:bg-cyan-500 px-4 py-2 rounded-lg transition"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
