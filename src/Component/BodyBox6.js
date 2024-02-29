import React, { useState } from 'react'
import handpic from '../Assest/✋🏻.png'
const BodyBox6 = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
  return (

    <div className=''>
    <div className='my-10 md:my-32 flex flex-col items-center justify-center'>

       <img src={handpic} alt='hii' className=' md:hidden animate-bounce'/>
    
        <div className=' flex flex-row items-center'>
            <h1 className=' text-2xl md:text-5xl font-semibold'>Say goodebye</h1>
            <span className=' animate-bounce -mx-4 hidden md:block'>
              <img src={handpic} alt='hand'/></span>
            <h1 className='text-2xl  md:text-5xl font-semibold'>to excessive</h1>
    
            
        </div>

        <h1 className='text-2xl   md:text-5xl font-semibold '>spending on designers, experts,</h1>
        <h1 className=' md:mt-4 text-2xl  md:text-5xl font-semibold '>and multiple tools</h1>



        <h1 className=' px-10 md:px-0 md:text-xl  text-[#6F6F6F] mt-4'>Say hello to Launcheazy - your superstar marketer in your pocket!</h1>



        
        <div className=" flex flex-col md:flex-row  items-center mt-10 w-full justify-center px-10">
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

    </div>
    </div>
  )
}

export default BodyBox6