// Icons
import { MdAndroid } from "react-icons/md";

// Props
import PropTypes from "prop-types";

const sections = [
  {
    id: "education",
    title: "Civic Education",
  },
  {
    id: "resources",
    title: "Resources",
  },
  {
    id: "helplines",
    title: "Helplines",
  },
];

const Navbar = ({ currentSection }) => {
  return (
    <nav className="w-full p-5 px-16 bg-[#f0f0f081] backdrop-blur-3xl border-b flex flex-col md:flex-row items-center justify-between gap-5 fixed top-0 z-10">
      <p className="text-xl font-semibold text-[#D05848]">
        #RejectFinanceBill2024
      </p>
      {currentSection &&
        sections.map((section) => {
          return (
            <ul key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                ${
                  section.id === currentSection
                    ? "text-slate-800"
                    : "text-slate-400"
                }
                `}
              >
                {section.title}
              </a>
            </ul>
          );
        })}
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

Navbar.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default Navbar;
