import KenyaSVG from "../assets/images/Kenya.svg"; // Adjust the path according to your file structure

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row text-[#040405]">
      <div className="flex-1  md:p-10 pt-20">
        <h1 className="md:text-9xl text-4xl font-black text-center md:text-start">
          Haki <span className="block">Hub</span>
        </h1>
        <p className="text-center md:text-start">
          Haki Hub: Empowering Kenyans with updates on ongoing bills, protest
          information, and essential data for informed civic engagement.
        </p>
      </div>
      <div className="flex-1">
        {/* Import an svg called Kenya.svg */}
        <img src={KenyaSVG} alt="Kenya" />
      </div>
    </div>
  );
};

export default Hero;
