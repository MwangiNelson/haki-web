const information = [
  {
    title: "Voting of the finance bill 2024",
    description:
      "Track all votes as they come from the parliament, lorem ipsum dolor sit amet",
    time: "2 hours ago",
    tag: "Recent update",
    type: "update",
  },
  {
    title: "Occupy parliament 2",
    description: "24th June 2024 | 10:00 AM | KICC",
    tag: "Upcoming Protest",
    type: "danger",
  },
  {
    title: "Interested in contributing to the cause?",
    description: "Click to learn how you can help",
    tag: "Join the revolution",
    type: "general",
  },
  {
    title: "Interested in contributing to the cause?",
    description: "Click to learn about the resources",
    tag: "Resources",
    type: "general",
  },
];

const CarouselCards = () => {
  return (
    <div className="w-5/6 absolute bottom-10 flex items-center justify-center mx-auto p-3 space-x-4">
      {information.map((info, index) => {
        return (
          <div
            key={index}
            className={`bg-white p-3 rounded-md w-11/12 max-w-xs space-y-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer
              ${index !== 0 && "opacity-50"}
              ${index !== 0 && "hidden lg:block"}
              `}
          >
            <div className="flex items-center justify-between">
              <span
                className={`p-1 px-2 rounded-full capitalize text-xs ${
                  info.type === "update"
                    ? "bg-[#E8F0E7] text-[#2E7D32]"
                    : info.type === "danger"
                    ? "bg-[#FCE7E3] text-[#B9121B]"
                    : "bg-[#F0F0F0] text-[#08090A]"
                }`}
              >
                {info.tag}
              </span>
              <span className="text-[10px]">{info?.time}</span>
            </div>
            <p className="text-sm font-semibold">{info.title}</p>
            <p className="text-xs">
              {info.description.split(" ").slice(0, 9).join(" ")}...
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselCards;
