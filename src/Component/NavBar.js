import React from 'react'
import logo from '../Assest/Logo.png'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";



const NavBar = () => {


  return (
    <div className='px-10 md:px-24 p-2 '>    
      <div className=' flex flex-row  justify-between items-center'>
        <div className=' flex '>
           <img src={logo} alt='logo.png' className=' m-2' />
           <h1 className=' font-bold  text-3xl'> Launch</h1>
           <span className='font-bold text-3xl text-[#4589FF] '>eazy</span>
        </div>

           
           {<div className=' flex md:hidden' >
            <GiHamburgerMenu/>
           </div>
} 
          <div className='  flex-row items-center space-x-6 hidden md:flex'>

          <div className='bg-[#F18D13] text-white px-1 m-1 w-fit rounded-md'>
            <h1>Free</h1>
          </div>
           

           <div className=' flex flex-row items-center'>
           <h1>AI Tools</h1>
           <MdOutlineArrowDropDown size={25}/>
           
          
           </div>

             <div className=' flex flex-row items-center'>
           <h1>Product</h1>
           <MdOutlineArrowDropDown size={25}/>
           
          
           </div>


           <div className=' flex flex-row items-center'>
           <h1>Resources</h1>
           <MdOutlineArrowDropDown size={25}/>
           
          
           </div>

           <h1>Pricing</h1>
           <h1>Contact Us</h1>

           <button className=' bg-black text-white m-2 p-2 rounded-md'>Join the waitlist</button>

        </div>
    </div>

  
    </div>

  )
}

export default NavBar