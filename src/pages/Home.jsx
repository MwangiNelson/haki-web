import React from "react";
import { Button, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import HakiLogo from '@assets/haki-logos/haki-no-bg.png';

function Home() {
  return (
    <section className="flex flex-col w-full h-full items-center justify-center ">
      <img src={HakiLogo} alt="Haki Logo" className="w-32 object-contain" />
    </section>
  );
}

export default Home;
