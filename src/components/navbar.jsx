import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import HakiLogo from '@assets/haki-logos/haki-no-bg.png';


function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      className={`w-full ${path == "/chat" ? "flex" : "flex"
        } flex-row bg-primary py-4  justify-between px-2 md:px-10 h-fit items-center rounded-t-md`}
    >


      <div className="w-1/4 h-fit">
        <a href="/" className="w-fit flex flex-row gap-2 items-center justify-center">
          <img
            src={HakiLogo}
            className="h-10 object-left object-cover  "
            alt=""
          />
          HAKI HUB
        </a>
      </div>

      <div className="hidden md:flex flex-row">



        <div className="flex flex-row gap-4">
          <Link to={'/auth'}>
            <Button pill className="border-none px-4" color="light">Sign In</Button>
          </Link>
          <Link to={'/auth'}>
            <Button pill color="dark"  >Create An Account</Button>
          </Link>

        </div>


      </div>

      <div className="flex md:hidden h-fit">
        <Link to={'/auth'}>
          <Button className="p-0 m-0 bg-blue-50 text-blue-900" pill >
            {/* <RiMenu3Line className="text-2xl text-blue-600" /> */}
            Sign In
          </Button></Link>


      </div>


    </nav>
  );
}

export default Navbar;
