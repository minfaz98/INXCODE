import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo1.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-1 px-3 md:px-5">
        <a
          href="#home"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <img
            src={logo}
            alt="INXCODE"
            className="h-auto  w-30 object-contain"
          />
        </a>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`hidden md:flex space-x-8 items-center font-medium text-white`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-blue-700 font-bold border-b-2 border-blue-700"
                className="relative px-2 py-1 cursor-pointer capitalize transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white/95 shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in">
            {navItems.map((item) => (
              <li key={item.id} className="w-full text-center">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-blue-700 font-bold border-b-2 border-blue-700"
                  className="block py-2 px-4 cursor-pointer capitalize transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
