import React from "react";
import NavIcons from "./ui/NavIcons";
import Button from "./Button";
import "./Styles/Navbar.css";
import NavButton from "./ui/NavButton";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleToggleNav = () => {
    setOpenNav((prevState) => !prevState);
    console.log(openNav);
  };

  return (
    <div>
      <div className="Navbar flex justify-between mt-4 mx-10 :hidden ">
        <NavIcons className="w-44 flex items-center pr-4 ">
          <a href="/">
            <img title="Logo" src="./public/assets/Logo.png" />
          </a>
        </NavIcons>
        <div className="flex justify-between gap-8 pt-2 mx-4">
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
            <a href="#download">Download the App</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">

            <a href="#community">Join the Community</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">

            <a href="#library">Lotessa Library</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
    
            <a href="#partner">Partner With Lotessa</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
         
            <a href="#contact">Contact Us</a>
          </NavIcons>
        </div>
        <div className="flex justify-between gap-3 ">
          <NavIcons>
            <Button classNames="text-sm px-10 mt-1 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 hover:text-white">
              Sign In
            </Button>
          </NavIcons>
          <NavIcons>
            <Button classNames="text-sm mt-1 bg-gray-900 text-white border border-gray-300 hover:bg-gray-700  ">
              Create Account
            </Button>
          </NavIcons>
        </div>
      </div>

      <div className="Smaller-Screen-Nav flex justify-between mt-4 ml-8 mr-10 ">
        <NavIcons className="w-44 flex items-center pr-4 ">
          <a href="/">
            <img title="Logo" src="./public/assets/Logo.png" />
          </a>
        </NavIcons>

        <NavButton oneClick={handleToggleNav} isOpen={openNav} />
      </div>

      {openNav && (
        <div className="Mobile-Nav-Menu">
          <div className=" flex flex-col gap-8 mt-4 pt-2 mx-4 border-t border-b pb-6 border-gray-300">
            <NavIcons className="font-medium pl-4 transition-transform duration-300 hover:text-blue-500">
              <a href="/">Download the App</a>
            </NavIcons>
            <NavIcons className="font-medium pl-4 transition-transform duration-300 hover:text-blue-500">
              {/* --- UPDATED href --- */}
              <a href="#community">Join the Community</a>
            </NavIcons>
            <NavIcons className="font-medium pl-4 transition-transform duration-300 hover:text-blue-500">
              {/* --- UPDATED href --- */}
              <a href="#library">Lotessa Library</a>
            </NavIcons>
            <NavIcons className="font-medium pl-4 transition-transform duration-300 hover:text-blue-500">
              {/* --- UPDATED href --- */}
              <a href="#partner">Partner With Lotessa</a>
            </NavIcons>
            <NavIcons className="font-medium pl-4 transition-transform duration-300 hover:text-blue-500">
              {/* --- UPDATED href --- */}
              <a href="#contact">Contact Us</a>
            </NavIcons>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <NavIcons>
              <Button classNames="text-sm px-30 mt-4 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 hover:text-white">
                Sign In
              </Button>
            </NavIcons>
            <NavIcons>
              <Button classNames="text-sm mt-3 px-24 bg-gray-900 text-white border border-gray-300 hover:bg-gray-700  ">
                Create Account
              </Button>
            </NavIcons>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
