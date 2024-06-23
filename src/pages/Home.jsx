import Navbar from "../components/navbar";
import Education from "./Education";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
    </>
  );
};

export default Home;
