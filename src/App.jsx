// Components
import CarouselCards from "./components/CarouselCards";
import Navbar from "./components/Navbar";
import Navigation from "./contexts/Navigation";

function App() {
  return (
    <>

      <section className="w-full h-screen bg-[#F0F0F0] items-center justify-center flex flex-col relative">
        <Navbar />
        <Navigation />
      </section>
    </>
  );
}

export default App;
