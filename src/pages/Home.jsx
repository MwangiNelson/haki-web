import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Education from "./Education";
import Hero from "./Hero";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("");

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  useEffect(() => {
    if (educationInView) {
      setCurrentSection("education");
    } else {
      setCurrentSection("");
    }
  }, [educationInView]);
  return (
    <>
      <Navbar currentSection={currentSection} />
      <section className="relative">
        <Hero />
      </section>
      <section className="w-screen h-screen" id="education" ref={educationRef}>
        <Education />
      </section>
    </>
  );
};

export default Home;
