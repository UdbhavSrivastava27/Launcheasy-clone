import React, { useState } from "react";

const InnerBoxFooter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" bg-gray-700 mx-10 md:mx-24 rounded-2xl p-10 flex flex-col md:flex-row  items-center justify-between  ">



      {/* left side */}
      <div className=" flex flex-col space-y-4 md:w-8/12">
        <h1 className=" text-[#A8A8A8] ">NEWSLETTER</h1>

        <h1 className=" text-xl md:text-4xl font-semibold text-white">
          The AI Launch
          <span className="text-blue-700 text-xl md:text-4xl font-semibold ">
            pad{" "}
          </span>
          🚀
        </h1>

        <p className=" text-xs md:text-sm text-[#A8A8A8]">
          Receive must-read articles and trends on marketing and artificial
          intelligence, from leading publications in your inbox.
        </p>
      </div>

      {/* right side */}

      <div className=" flex flex-col mt-4 w-full  ">
        <div className="  flex  flex-col md:flex-row items-center justify-end md:-mb-2 ">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your work email"
            className=" w-full md:w-6/12  p-2 rounded-md text-lg "
          />

          <button className=" w-full md:w-3/12 m-2 bg-[#4589FF]  p-3  rounded-md  text-white">
            Subscribe
          </button>
        </div>

        <h1 className=" text-xs text-center  text-white">
          By signing up, you are agreeing to{" "}
          <span className=" text-xs text-[#4589FF]">
            {" "}
            our privacy statement.
          </span>
        </h1>
      </div>


    </div>
  );
};

export default InnerBoxFooter;
