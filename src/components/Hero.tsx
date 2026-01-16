export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-linear-to-br from-purple-100 to-pink-100 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
        Bonjour, je suis Sophie
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fadeIn animate-delay-200 max-w-xl">
        Développeuse web passionnée . Je crée des sites modernes, interactifs et responsives.
      </p>
      <a
        href="https://github.com/sophiemorales6440/MonPorteFolio.git"
        className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-transform duration-300"
      >
        Voir mes projets
      </a>
    </section>
  );
}
