import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import Team from "./components/Team";

AOS.init({
  duration: 800,
  once: true,
});

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
