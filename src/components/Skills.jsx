import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const Icono = skill.icono;

          return (
            <div
              key={skill.id}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center hover:bg-slate-700 transition duration-300"
            >
              <Icono className="text-5xl mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold">{skill.nombre}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
