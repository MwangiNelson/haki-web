// Components
import Navigation from "./contexts/Navigation";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <section className="w-full min-h-screen h-fit bg-[#F0F0F0] items-center justify-start flex flex-col relative">
        {/* <Navbar /> */}
        <Navigation />
      </section>
      <section className="w-full min-h-screen h-fit bg-[#F0F0F0] flex">
        <Education />
      </section>
    </>
  );
}

export default App;
