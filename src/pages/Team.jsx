import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import TeamMember1 from "../assets/team/member1.jpeg";
import TeamMember2 from "../assets/team/member2.jpeg";
import TeamMember3 from "../assets/team/member3.jpeg";
import TeamMember4 from "../assets/team/member4.jpeg";

const team = [
  {
    name: "Alice Johnson",
    position: "CEO & Founder",
    email: "alice@inxcode.com",
    description:
      "Visionary leader driving innovation and growth across all projects.",
    image: TeamMember1,
    socials: {
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      github: "https://github.com/alicejohnson",
    },
  },
  {
    name: "Bob Smith",
    position: "Lead Developer",
    email: "bob@inxcode.com",
    description:
      "Expert in full-stack development and building scalable applications.",
    image: TeamMember2,
    socials: {
      linkedin: "https://linkedin.com/in/bobsmith",
      twitter: "https://twitter.com/bobsmith",
      github: "https://github.com/bobsmith",
    },
  },
  {
    name: "Clara Lee",
    position: "UI/UX Designer",
    email: "clara@inxcode.com",
    description:
      "Creative designer crafting intuitive and beautiful user experiences.",
    image: TeamMember3,
    socials: {
      linkedin: "https://linkedin.com/in/claralee",
      twitter: "https://twitter.com/claralee",
      github: "https://github.com/claralee",
    },
  },
  {
    name: "David Kim",
    position: "Digital Marketing Manager",
    email: "david@inxcode.com",
    description:
      "Focused on building brand presence and driving online growth.",
    image: TeamMember4,
    socials: {
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
      github: "https://github.com/davidkim",
    },
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          data-aos="fade-up"
        >
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white backdrop-blur-md rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
            >
              {/* Team image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
              />

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {member.description}
                </p>
                <p className="text-gray-500 text-xs mt-2">{member.email}</p>
              </div>

              {/* Social icons overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-blue-400 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl hover:text-gray-300 transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
