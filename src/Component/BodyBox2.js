import React, { useState } from 'react';
import Carousel from '../Component/Carousel';
import { PiNumberCircleOneLight, PiNumberCircleThreeLight, PiNumberCircleTwoLight } from "react-icons/pi";

const BodyBox2 = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className= 'mt-16 md:mt-32'>
      <div
        className={` ${isHovered ? 'scale-90' : 'scale-100'} bg-gradient-to-tr from-pink-600 to-blue-300 hover:rounded-xl transition duration-500 ease-in-out transform-gpu  md:p-10 md:px-24  `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className=' inset-0  flex-row justify-between items-center mx-auto pt-2 px-36 hidden md:flex '>
          <div className={`px-3 text-white text-2xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            Auto-generate conversion focussed content for ready-to-use marketing recipes with AI
          </div>
          <div className={`flex flex-row items-center justify-around text-xl space-x-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex flex-row space-x-2 text-black items-center p-3 rounded-3xl hover:bg-blue-500 hover:text-white'>
              <PiNumberCircleOneLight size={20} />
              <span>Explore</span>
            </div>
            <div className='flex flex-row space-x-2 text-black items-center p-3 rounded-3xl hover:bg-blue-500 hover:text-white'>
              <PiNumberCircleTwoLight size={20} />
              <span>Personalize</span>
            </div>
            <div className='flex flex-row space-x-2 text-black items-center p-3 rounded-3xl hover:bg-blue-500 hover:text-white '>
              <PiNumberCircleThreeLight size={20} />
              <span>Execute</span>
            </div>
          </div>
        </div>
        <div className={`ease-in-out ${isHovered ? ' md:translate-y-8' : ' -translate-y-10 md:-translate-y-48'} px-6 md:px-32  transition duration-500 mx-8 `}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default BodyBox2;
