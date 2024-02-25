import React from 'react'

import InnerBoxFooter from './InnerBoxFooter'
import FooterBody from './FooterBody'
const Footer = () => {
  return (


    <div className=' flex flex-col  bg-[#262626]'>
      

        <FooterBody/>


    
    <div>
        <InnerBoxFooter/>
      </div>
   
<hr className=' border-b-2 border-[#393939] mt-10 mx-10 md:mx-24'></hr>


<div className=' mx-16 md:mx-24 mt-2 flex flex-col md:flex-row items-center justify-center md:justify-between text-[#6F6F6F] text-sm mb-10'>
     
     <div className=' text-center'>Copyright 2023 Launcheazy AI Private Limited. All rights reserved.</div>

     <div className=' flex flex-row items-center space-x-6 mt-4 md:mt-0'>
      <h1>Privacy Policy</h1>
      <h1>Terms of Service</h1>
     </div>


</div>

    </div>
  )
}

export default Footer