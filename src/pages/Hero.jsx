import { scroller } from "react-scroll";
import bg from "../assets/bg.jpg";

export default function Hero() {
  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden"
    >
    
      <div className="absolute inset-0 opacity-20">
        <img
          src={bg}
          alt="Abstract tech background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 hover:text-sky-200/75">
          Building Digital Experiences that Matter
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          At inXcode, we craft innovative, scalable software solutions that transform ideas into real-world impact. Let’s build the future together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-sky-600 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Get a Quote
          </button>

          <a
            href="#services"
            className="text-sky-500 font-semibold py-3 px-6 rounded-full border border-sky-500 hover:bg-sky-500 hover:text-white transition-colors duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
