import services from "../data/services.json";
import { Code, Smartphone, Feather, Cloud, TrendingUp } from "react-feather";

const iconMap = {
  "Web Development": <Code size={48} />,
  "Mobile Apps": <Smartphone size={48} />,
  "UI/UX Design": <Feather size={48} />,
  "Cloud Solutions": <Cloud size={48} />,
  "Digital Marketing": <TrendingUp size={48} />
};
export default function Services() {
  return (
    <section id="services" className="py-20 bg-white-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-700"
            >
              <div className="flex justify-center mb-4 text-sky-400">{iconMap[s.title]}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
