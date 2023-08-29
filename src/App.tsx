import { useEffect, useRef } from "react";
import "./App.css";
import {
  Header,
  About,
  Projects,
  Links,
  Experience,
  Contact,
  Footer,
} from "./components";

function App() {
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-footer");
        }
      },
      { threshold: 1.0 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Links />
      <main>
        <div className="fade-in">
          <About />
        </div>
        <Projects />
        <Experience />
        <div ref={footerRef} className="footer">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
