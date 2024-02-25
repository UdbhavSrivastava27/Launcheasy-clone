import React, { useState } from "react";
import logo from "../Assest/Logo.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [setToggle, setSetToggle] = useState(false);

  return (
    <div className="px-10 md:px-24 p-2 ">
      <div className=" flex flex-row  justify-between items-center">
        <div className=" flex ">
          <img src={logo} alt="logo.png" className=" m-2" />
          <h1 className=" font-bold  text-3xl"> Launch</h1>
          <span className="font-bold text-3xl text-[#4589FF] ">eazy</span>
        </div>
 

               

        <div className="  flex-row items-center space-x-6  hidden  md:flex ">
              <div className="bg-[#F18D13] text-white px-1 m-1 w-fit rounded-md">
                <h1>Free</h1>
              </div>

              <div className=" flex flex-row items-center">
                <h1>AI Tools</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <div className=" flex flex-row items-center">
                <h1>Product</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <div className=" flex flex-row items-center">
                <h1>Resources</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <h1>Pricing</h1>
              <h1>Contact Us</h1>

              <button className=" bg-black text-white m-2 p-2 rounded-md">
                Join the waitlist
              </button>
            </div>





        <div className="md:hidden lg:hidden  ">
          {!setToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setSetToggle(true)}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 m-6  mr-6 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setSetToggle(false)}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class=" p-2 m-2 h-10 float-right cursor-pointer "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}

          {setToggle ? (
            <div className=" flex flex-col items-center  justify-centerspace-x-6  md:hidden space-y-2 mt-16 absolute right-6 bg-white rounded-xl border-2 p-4 ">
              <div className="bg-[#F18D13] text-white px-1 m-1 w-fit rounded-md">
                <h1>Free</h1>
              </div>

              <div className=" flex flex-row items-center">
                <h1>AI Tools</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <div className=" flex flex-row items-center">
                <h1>Product</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <div className=" flex flex-row items-center">
                <h1>Resources</h1>
                <MdOutlineArrowDropDown size={25} />
              </div>

              <h1>Pricing</h1>
              <h1>Contact Us</h1>

             
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
