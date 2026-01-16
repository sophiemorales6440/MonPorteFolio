const projects = [
  {
    id: 1,
    title: "Un singe en Hiver",
    description: "Un restaurant comme on aime",
    image: "src/assets/SINGE.png",
    technologies: ["Html", "Css"],
    link: "https://github.com/sophiemorales6440/premier-site.git"
  },
  {
    id: 2,
    title: "Melody Factory",
    description: "Clicker Game",
    image: "src/assets/Melody.png",
    technologies: ["Javascrip", "Figma"],
    link: "https://github.com/prescilliarosart/Melody-Factory.git"
  },
  {
    id: 3,
    title: "The PortFolio",
    description: "Me présenter avec REACT",
    image: "src/assets/image/profile.png",
    technologies: ["Vite", "React"],
    link: "https://github.com/ton-projet"
  }
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
        Mes Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Voir le projet →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
