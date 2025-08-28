import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import Team from "./pages/Team";

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
