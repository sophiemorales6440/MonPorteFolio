import photoProfile from "../assets/image/profile.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <img
            src={photoProfile}
            alt="Sophie"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-2xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bonjour, je suis Sophie
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Développeuse Web Full Stack
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition"
            >
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Me contacter</h2>
          <p className="text-gray-400 text-lg mb-8">
            Un projet en tête ? N'hésitez pas à me contacter !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sophie@example.com"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/ton-github"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/ton-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
