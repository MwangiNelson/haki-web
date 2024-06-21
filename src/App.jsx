// Components
import CarouselCards from "./components/CarouselCards";
import Navbar from "./components/Navbar";
import Navigation from "./contexts/Navigation";

function App() {
  return (
    <>

      <section className="w-full min-h-screen h-fit bg-[#F0F0F0] items-center justify-start flex flex-col relative">
        <Navbar />
        <Navigation />
      </section>
    </>
  );
}

export default App;
