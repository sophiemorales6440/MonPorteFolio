export default function About() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>

      <p className="mb-8">
        Passionnée par le développement web depuis plusieurs années, je crée des applications modernes et performantes.
J'aime résoudre des problèmes complexes et transformer des idées en produits concrets et utilisables. Mon approche allie créativité et rigueur technique.
      </p>

      {/* Compétences */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Compétences</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'TypeScript', 'Node.js', 'JavaScript', 'Python', 'Git'].map(
            (skill) => (
              <div
                key={skill}
                className="bg-gray-900 text-white px-4 py-3 rounded-lg text-center hover:bg-gray-700 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
