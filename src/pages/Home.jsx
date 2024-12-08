// Components
import Navbar from "../components/navbar";

// Sections
import Education from "./Education";
import Hero from "./Hero";
import Resources from "./Resources";

// React
import { useEffect, useState } from "react";

// React Intersection observer
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("");

  const { ref: educationRef, inView: educationInView } = useInView({
    threshold: 0.5,
  });

  const { ref: resourcesRef, inView: resourcesInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (educationInView) {
      setCurrentSection("education");
    } else if (resourcesInView) {
      setCurrentSection("resources");
    } else {
      setCurrentSection("hero");
    }
  }, [educationInView, resourcesInView]);

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
      <section
        ref={resourcesRef}
        id="resources"
        className="w-full min-h-screen h-fit bg-[#F0F0F0] flex"
      >
        <Resources />
      </section>
    </>
  );
};

export default Home;
