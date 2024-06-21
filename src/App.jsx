// Components
import CarouselCards from "./components/CarouselCards";
import Navbar from "./components/Navbar";

// Pages
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen bg-[#F0F0F0] p-20 relative">
        <Hero />
        <CarouselCards />
      </section>
      <section className="w-full h-screen bg-green-500"></section>
    </>
  );
}

export default App;
