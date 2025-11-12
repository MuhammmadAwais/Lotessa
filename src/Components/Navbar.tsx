import React from "react";
import NavIcons from "./ui/NavIcons";
import Button from "./Button";
import "./Styles/Navbar.css";


const Navbar: React.FC = () => {
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
            <a href="/">Download the App</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
            <a href="/">Join the Community</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
            <a href="/">Lotessa Library</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
            <a href="/">Partner With Lotessa</a>
          </NavIcons>
          <NavIcons className="font-medium transition-transform duration-300 hover:scale-115">
            <a href="/">Contact Us</a>
          </NavIcons>
        </div>
        <div className="flex justify-between gap-3 ">
          <NavIcons>
            <Button classNames="text-sm mt-1 bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 hover:text-white">
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
      
    </div>
  );
}

export default Navbar;
