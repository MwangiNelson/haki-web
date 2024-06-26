import KenyaSVG from "@assets/images/Kenya.svg";
import CarouselCards from "../components/CarouselCards";

const Hero = () => {
  return (
    <div className="w-5/6 flex mx-auto mt-20 flex-col md:flex-row text-[#040405] justify-center h-full">
      <div className="flex-1 flex flex-col h-full md:p-10 pt-20">
        <h1 className="md:text-9xl text-4xl font-black text-center md:text-start">
          Haki <span className="md:block">Hub</span>
        </h1>
        <p className="text-center md:text-start">
          Haki Hub: Empowering Kenyans with updates on ongoing bills, protest
          information, and essential data for informed civic engagement.
        </p>
        <div className="mt-5 flex items-center gap-5">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSenaZEFvO7OXLOxroNZKW8UTCPZVGgNgLHHAKOjg6sE5FuUbw/viewform"
            target="blank"
            className="bg-[#B9121B] text-[#FCE7E3] px-4 py-2 rounded-md hover:bg-[#ECA192] hover:text-[#651813] hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            Give feedback
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIXa9Kbk9HmxP-GWBwF3a__D19OUitxkOSuUv-6cgwNjoaNA/viewform"
            target="blank"
            className="bg-[#2E7D32] text-[#E8F0E7] px-4 py-2 rounded-md hover:bg-[#A4C4A0] hover:text-[#204520]  hover:shadow-lg transition-all duration-200 ease-in-out"
          >
            Help build Haki Hub
          </a>
        </div>
      </div>
      <div className="flex-1">
        {/* Import an svg called Kenya.svg */}
        <img src={KenyaSVG} alt="Kenya" />
      </div>
      <CarouselCards />
    </div>
  );
};

export default Hero;
