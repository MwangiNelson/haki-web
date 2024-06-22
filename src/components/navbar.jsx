/* eslint-disable react/prop-types */
// Icon
import { MdAndroid } from "react-icons/md";

const links = [
  {
    id: 1,
    title: "Civic Education",
    href: "#education",
    ref: "education",
  },
  {
    id: 2,
    title: "Resources",
    href: "#resources",
    ref: "resources",
  },
  {
    id: 3,
    title: "Help Lines",
    href: "#help-lines",
    ref: "help-lines",
  },
];

const Navbar = ({ currentSection }) => {
  return (
    <nav className="w-full p-5 md:px-16 px-10 bg-[#f0f0f081] backdrop-blur-3xl border-b flex flex-col md:flex-row items-center justify-between gap-5 sticky top-0 z-10">
      <p className="text-xl font-semibold text-[#D05848]">
        #RejectFinanceBill2024
      </p>
      {currentSection && (
        <ul className="flex justify-between text-sm md:text-base w-full md:w-1/3">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`${
                  currentSection === link.ref.toLowerCase()
                    ? "text-[#D05848] font-semibold"
                    : "text-slate-400"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      <a
        href="https://github.com/DanroyMwangi/haki-hub/raw/develop/apks/HakiHub.apk"
        className="flex items-center text-xs md:text-base gap-4 bg-[#2E7D32] text-slate-100 px-6 py-3 rounded-md shadow-xl hover:shadow-md transition-all duration-150 ease-in-out"
      >
        <MdAndroid color="white" size={30} />
        <p>Download our app</p>
      </a>
    </nav>
  );
};

export default Navbar;
