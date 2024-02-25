import React, { useState } from 'react'
import Typewriter from "typewriter-effect";

import live from "/Users//udbha/launch-easy-assigment/src/Assest/Live.png";
import icon from "/Users//udbha/launch-easy-assigment/src/Assest/icon.png"

const BodyBox1 = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <div className=' mx-10 md:mx-24'>
         <div className=" border-2 flex flex-row space-x-2 p-2 rounded-3xl  w-auto md:w-fit px-4 text-sm items-center">
        <img src={live} alt="live" className="animate-pulse" />
        <h2 className=''>Our exclusive beta is live.</h2>
        <span className=" text-blue-600">Sign up for free {">"} </span>
      </div>

      <h1 className=" mt-8 h-10 md:h-24 py-2">
        <Typewriter
          options={{
            strings: [
              "<div class='font-semibold text-4xl md:text-8xl text-blue-700'>Generate leads</div>",
              "<div class='font-semibold text-4xl md:text-8xl text-blue-700'>Convert prospects</div>",
              "<div class='font-semibold text-4xl  md:text-8xl text-blue-700'>Retain customers</div>",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <h1 className=" font-semibold text-3xl md:text-7xl mt-4">
        in 3 clicks for your business
      </h1>

      <img
        src={icon}
        alt="icon "
        className=" absolute left-1/4 animate-bounce "
      />

      <p className=" text-[#525252]  hidden md:block text-2xl py-2 mt-8 w-9/12 ">
        Simplify your marketing efforts with AI. Use a collection of ready-made,
        successful marketing strategies that practically run themselves.
      </p>

      <div className=" flex flex-col md:flex-row  items-center mt-10 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your work email"
          className="border-2 border-gray-300   p-4 rounded-md w-full  md:w-4/12 text-lg"
        />
        <button className=" text-lg bg-black text-white  m-2  px-6 p-4 rounded-md w-full md:w-fit">
          Join the waitlist
        </button>
      </div>

      <p className=" text-[#A8A8A8] text-sm md:text-lg md:w-4/12 mt-4">
        Get access to a comprehensive directory of{" "}
        <span className=" text-orange-600">AI Tools</span> and{" "}
        <span className=" text-green-600">ChatGPT Prompts </span> to elevate
        your business.
      </p>
    </div>
  )
}

export default BodyBox1