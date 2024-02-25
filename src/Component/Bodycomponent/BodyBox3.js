import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import img1 from '/Users//udbha/launch-easy-assigment/src/Assest/smallBoxImg 1.png'
import img2 from '/Users//udbha/launch-easy-assigment/src/Assest/smallBoxImg 3.png'
import img3 from '/Users//udbha/launch-easy-assigment/src/Assest/smallBoxImg 2.png'
import { MdKeyboardArrowRight } from "react-icons/md";


const BodyBox3 = () => {
    
  return (
    <div className=' md:mt-36 md:mx-10  '>
        <div className=' bg-[#FFF1F1] p-10 pt-20 md:p-24 rounded-lg flex flex-col '>
            

            <div className='flex flex-col items-start justify-start space-y-4 '>
            <h3 className=' text-[#6F6F6F]'>Marketing Recipes</h3>
            <h1 className=' text-4xl '>Attract. Convert. Retain.</h1>

            <p className=' text-sm text-[#525252]'>A library of ready-to-use marketing campaigns, workflows and programs to accelerate your growth, maximize savings and reduce efforts.</p>
            </div>
            
          <div className=' mt-8 border-2 bg-white flex flex-row rounded-3xl w-full md:w-fit p-2 items-center justify-center md:pl-4'>
            <span>Visit the library</span>
            <span className='mx-2'><MdArrowOutward/></span>
            </div>


            <div className='flex flex-col md:flex-row items-center space-x-4'>
                   
                   <div className=' flex flex-col rounded-3xl mt-16 bg-white md:w-4/12 rounded-t-3xl'>
                    <img src= {img1} alt='attached img' className='rounded-t-3xl h-auto'/>
                    
                    
                    <div className=' p-4 space-y-4'>
                    <h1 className=' text-sm font-bold text-[#525252]'>Campaigns</h1>

                    <h1 className=' font-semibold'>Attract potential clients</h1>
                    <p className=' pr-6'>Unlock new clients effortlessly with AI-powered marketing campaigns from our library. Tailored content, precise targeting, timely delivery across channels.</p>


                    <div className='flex flex-row items-center'>
                    <h1>View all Campaigns </h1>
                    <MdKeyboardArrowRight/>
                    </div>
                    </div>
                   </div>



                   <div className=' flex flex-col rounded-3xl mt-16 bg-white md:w-4/12 rounded-t-3xl'>
                    <img src= {img2} alt='attached img' className='rounded-t-3xl h-auto'/>
                    
                    
                    <div className=' p-4 space-y-4'>
                    <h1 className=' text-sm font-bold text-[#525252]'>Workflows</h1>

                    <h1 className=' font-semibold'>Convert prospects into profits</h1>
                    <p className=' pr-6'>Convert leads into paying customers by optimizing and automating funnel activities to deliver best conversion. Tailored content, precise targeting, timely delivery</p>


                    <div className='flex flex-row items-center'>
                    <h1>View all Campaigns </h1>
                    <MdKeyboardArrowRight/>
                    </div>
                    </div>
                   </div>




                   <div className=' flex flex-col rounded-3xl mt-16 bg-white md:w-4/12 rounded-t-3xl'>
                    <img src= {img3} alt='attached img' className='rounded-t-3xl h-auto'/>
                    
                    
                    <div className=' p-4 space-y-4'>
                    <h1 className=' text-sm font-bold text-[#525252]'>Programs</h1>

                    <h1 className=' font-semibold'>Retain existing customers</h1>
                    <p className=' pr-6'>Increase the lifetime value of your customers by enrolling them in discount, loyalty, referral, and nurture programs. precise targeting, timely delivery precise targeting, timely delivery</p>


                    <div className='flex flex-row items-center'>
                    <h1>View all Campaigns </h1>
                    <MdKeyboardArrowRight/>
                    </div>
                    </div>
                   </div>
                     
                   
            </div>

        </div>
      
    </div>

        

  )
}

export default BodyBox3