import CarouselPlaceholder from "@assets/images/carousel-placeholder.png";
import {
  FaFirstAid,
  FaUsers,
  FaPaperclip,
  FaHandHoldingMedical,
} from "react-icons/fa";

const iconMap = {
  firstAid: <FaFirstAid color="#2E7D32" />,
  mentalHealth: <FaHandHoldingMedical color="#2E7D32" />,
  communities: <FaUsers color="#2E7D32" />,
  downloads: <FaPaperclip color="#2E7D32" />,
};

const data = [
  {
    title: "First Aid",
    description: "Get help with teargas exposure, injury and more...",
    iconName: "firstAid",
  },
  {
    title: "Mental health",
    description:
      "Get help with any distress including trauma, panic attacks, etc...",
    iconName: "mentalHealth",
  },
  {
    title: "Communities",
    description:
      "Find communities around civic education, mental health, etc...",
    iconName: "communities",
  },
  {
    title: "Downloads",
    description: "Get relevant documents, images, audios and videos...",
    iconName: "downloads",
  },
];

const Resources = () => {
  return (
    <div className="mt-20 flex w-full h-screen">
      <div className="mt-20 hidden md:block flex-1 p-20">
        <img
          src={CarouselPlaceholder}
          alt="carousel"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-20 flex-1 md:p-20 p-5 border-l border-slate-300">
        <h1 className="underline text-2xl font-bold">Resources</h1>
        {data.map((item, index) => {
          return (
            <div key={index} className="mt-5 bg-[#E8F0E7] p-3 rounded-md">
              <div className="flex items-center gap-5">
                <div className="w-8 h-8 bg-[#A4C4A0] rounded-full flex items-center justify-center">
                  {iconMap[item.iconName]}
                </div>
                <h1 className="text-xl font-semibold">{item.title}</h1>
              </div>
              <p className="mt-1 text-sm">{item.description}</p>
              <p className="underline text-slate-700 cursor-pointer">
                Learn more about {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
