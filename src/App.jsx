import { ToastContainer } from "react-toastify";
import Navigation from "@contexts/Navigation";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import React from "react";


function App() {

  return (
    <div className="bg-white p-2  min-h-screen w-screen">
      <section
        className="relative rounded-lg flex flex-col bg-primary items-center h-full w-full justify-between "
      >
        <Navbar />
        <ToastContainer />
        <Navigation />
        <Footer />
      </section>
    </div>
  );
}

export default App;
