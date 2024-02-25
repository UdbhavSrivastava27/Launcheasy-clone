import React from 'react'

const FooterLinks = () => {
  return (
    <div className=' text-white flex flex-col
     md:flex-row  md:space-x-24 md:mr-40 '>
        
    

    <div className=' flex  flex-row md:space-x-24 items-center justify-between my-8'>
        <div className=' flex flex-col  space-y-4 '>
            <div className=' flex flex-row items-center mx-1'>
            <h1 className=' text-[#6F6F6F]'>AI Tools</h1>
            <div className='bg-[#F18D13] text-white px-1 m-1 w-fit rounded-md mx-2 '>
            <h1>Free</h1>
          </div>

          </div>
          <h1>ChatGPT Prompts</h1>
          <h1>AI Tools Directory</h1>
          <h1>AI QR Generator</h1>
        </div>


   
        <div className=' flex flex-col   space-y-4'>
            <h1 className='text-[#6F6F6F]'>Resources</h1>
          <h1>ChatGPT Prompts</h1>
          <h1>AI Tools Directory</h1>
          <h1>AI QR Generator</h1>
        </div>


        </div>



        <div className=' flex flex-col space-y-4 my-8 '>
            <h1 className='text-[#6F6F6F]'>Resources</h1>
          <h1>ChatGPT Prompts</h1>
          <h1>AI Tools Directory</h1>
          <h1>AI QR Generator</h1>
        </div>
    </div>
  )
}

export default FooterLinks
