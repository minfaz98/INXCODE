import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo1.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-grey/50 backdrop-blur-xl shadow-md border-b border-white/20 h-25">
      <nav className="container mx-auto flex justify-between items-center px-2 md:px-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-105"
        >
          <img src={logo} alt="INXCODE" className="h-30 w-30 object-contain" />
          
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform hover:scale-110"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-white">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-blue-700 font-bold"
                className="cursor-pointer capitalize text-white px-2 py-1 transition-colors hover:text-blue-500"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gray-900/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-white text-xl font-semibold transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 cursor-pointer capitalize hover:text-blue-500 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
