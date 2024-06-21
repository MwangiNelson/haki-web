import { Tooltip } from "flowbite-react";
import React from "react";
import { RiGithubFill } from "react-icons/ri";


function Footer() {
    return (
        <footer className="bg-primary rounded-b-md px-5 sticky bottom-0 dark:bg-gray-800 w-full hidden md:flex justify-center items-center">
            <div className="  px-5 py-1 md:p-4 md:flex md:items-end w-full items-end md:justify-between lg:justify-between">

                <h4>For the people, by the people</h4>
            </div>
        </footer>
    );
}

export default Footer;
