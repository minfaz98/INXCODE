import { Compass, TrendingUp, CheckCircle } from "react-feather";

export default function About() {
  const coreValues = [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and creative solutions to build modern, future-proof applications.",
      icon: <Compass size={48} />,
      color: "text-sky-400",
    },
    {
      title: "Growth",
      description:
        "Our solutions are designed to scale with your business, helping you grow efficiently and sustainably.",
      icon: <TrendingUp size={48} />,
      color: "text-green-400",
    },
    {
      title: "Excellence",
      description:
        "We commit to delivering top-tier quality in every line of code and every design we create.",
      icon: <CheckCircle size={48} />,
      color: "text-yellow-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-900"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About inXcode
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg sm:text-xl leading-relaxed">
          We are a passionate team of developers and designers committed to building
          high-quality, impactful software. Combining cutting-edge technology with
          creative problem-solving, we deliver solutions that exceed expectations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="bg-gray-800 p-8 rounded-3xl shadow-lg transform transition-transform hover:scale-105 hover:bg-gray-700"
            >
              <div
                className={`flex justify-center mb-4 ${value.color}`}
                aria-label={`${value.title} icon`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
