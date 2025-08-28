import projects from "../data/projects.js";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif  text-white mb-12 hover:text-sky-200/75">
          Website Design & Development Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Full-size image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 md:h-80 lg:h-96 object-contain transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay with View Project button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="px-5 py-2 bg-sky-500 hover:bg-sky-600 rounded-xl text-white font-medium transition-all">
                  View Project
                </button>
              </div>

              {/* Project title and tags */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/75 text-left">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{p.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
