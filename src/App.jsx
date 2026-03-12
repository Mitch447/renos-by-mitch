import "./styles/global.css";

import Nav          from "./components/Nav";
import Hero         from "./components/Hero";
import Pain         from "./components/Pain";
import Solution     from "./components/Solution";
import Process      from "./components/Process";
import Testimonials from "./components/Testimonials";
import About        from "./components/About";
import CTA          from "./components/CTA";
import Footer       from "./components/Footer";

export default function App() {
  return (
    // "grain" class adds the subtle film-grain texture overlay via global.css
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Process />
        <Testimonials />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
