// Components
import Navbar from "./components/Navbar";

// Pages
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen bg-[#F0F0F0] p-20">
        <Hero />
      </section>
    </>
  );
}

export default App;
