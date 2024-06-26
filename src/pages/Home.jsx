// Sections
import Navbar from "../components/navbar";
import Education from "./Education";
import Hero from "./Hero";

// React
import { useEffect, useState } from "react";

// React Intersection observer
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
      <section
        id="hero"
        className="w-full min-h-screen h-fit bg-[#F0F0F0] items-center justify-start flex flex-col relative"
      >
        <Hero />
      </section>
      <section
        ref={educationRef}
        id="education"
        className="w-full min-h-screen h-fit bg-[#F0F0F0] flex"
      >
        <Education />
      </section>
    </>
  );
};

export default Home;
