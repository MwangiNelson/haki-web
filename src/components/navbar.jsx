// Icons
import { MdAndroid } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full p-5 px-16 bg-[#F0F0F0] border-b flex flex-col md:flex-row items-center justify-between gap-5">
      <p className="text-xl font-semibold text-[#D05848]">
        #RejectFinanceBill2024
      </p>
      <button className="flex items-center text-xs md:text-base gap-4 bg-[#2E7D32] text-slate-100 px-6 py-3 rounded-md shadow-xl hover:shadow-md transition-all duration-150 ease-in-out">
        <MdAndroid color="white" size={30} />
        <p>Download our app</p>
      </button>
    </nav>
  );
};

export default Navbar;
