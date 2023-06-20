import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Testimonial from "./container/Testimonial/Testimonial";
import Work from "./container/Work/Work";

function App() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "testimonial", label: "Testimonial" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      let activeId = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        let offset = sec.offsetTop - 80;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
          activeId = sections[i].id;
          break;
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <Navbar activeSection={activeSection} sections={sections} />
      <Header />
      <About />
      <Skills />
      <Work />

      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
