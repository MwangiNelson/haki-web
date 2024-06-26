import CarouselPlaceholder from "@assets/images/carousel-placeholder.png";
import { FaMoneyBill, FaLock, FaUser, FaGlobe } from "react-icons/fa";

const iconMap = {
  money: <FaMoneyBill color="#B9121B" />,
  lock: <FaLock color="#B9121B" />,
  person: <FaUser color="#B9121B" />,
  world: <FaGlobe color="#B9121B" />,
};

const data = [
  {
    title: "Finance bill 2024",
    description:
      "The Finance Bill 2024 proposes to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    iconName: "money",
  },
  {
    title: "Data protection act",
    description:
      "The Data Protection Act in Kenya, is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    iconName: "lock",
  },
  {
    title: "Protesting rights",
    description:
      "Your right as a citizen to picket and protest, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ....",
    iconName: "person",
  },
  {
    title: "ICT bill",
    description:
      "The ICT Bill 2024 proposes to Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
    iconName: "world",
  },
];

const Education = () => {
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
        <h1 className="underline text-2xl font-bold">Civic Education</h1>
        {data.map((item, index) => {
          return (
            <div key={index} className="mt-5 bg-[#FCE7E3] p-3 rounded-md">
              <div className="flex items-center gap-5">
                <div className="w-8 h-8 bg-[#ECA192] rounded-full flex items-center justify-center">
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

export default Education;
