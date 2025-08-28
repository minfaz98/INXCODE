import SocialMediaLinks from "./SocialmediaLinks";

export default function Footer() {
  return (
    <footer className=" bg-zinc-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white">INXCODE Pvt Ltd</h2>
          <p className="mt-3 text-sm leading-relaxed">
            We craft modern digital solutions that blend design and technology.  
            Delivering excellence, one project at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-sky-400 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-sky-400 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-sky-400 transition">Projects</a></li>
            <li><a href="#team" className="hover:text-sky-400 transition">Our Team</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-300">📍</span> 123 Business Street, Colombo</li>
            <li><span className="text-gray-300">📞</span> +94 77 123 4567</li>
            <li><span className="text-gray-300">✉️</span> hello@inxcode.com</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <SocialMediaLinks />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="text-white font-semibold">INXCODE Pvt Ltd</span>.  
          All rights reserved. | Designed with <span className="text-red-500">♥</span>
        </p>
      </div>
    </footer>
  );
}
