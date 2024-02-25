import React from 'react'

const BodyBox4 = () => {
  return (
    <div>

<div className=" flex flex-col md:flex-row items-center justify-evenly py-28">
        <div className=" mx-auto px-10 md:p-0 md:w-1/4">
          <h1 className=" text-4xl w-full ">
            Accelerate growth. Maximize savings. Reduce efforts.
          </h1>
        </div>

        <div className=" flex flex-col md:flex-row items-center justify-around md:space-x-4 md:mx-24 mt-12 space-y-4 md:space-y-0 mx-10">
          <div className=" flex flex-col  border-2 rounded-2xl mx-10 md:mx-0  p-4 w-full md:w-44 space-y-2">
            <h1 className=" text-5xl font-extralight ">160%</h1>
            <p className=" text-sm text-[#6F6F6F]">
              Increase in revenue generated for your business
            </p>
          </div>

          <div className=" flex flex-col  border-2 rounded-2xl mx-10 md:mx-0  p-4 w-full md:w-44 space-y-2">
            <h1 className=" text-5xl font-extralight ">$60K</h1>
            <p className=" text-sm text-[#6F6F6F]">
            Saved on annual marketing expenditure
            </p>
          </div>


          <div className=" flex flex-col  border-2 rounded-2xl mx-10 md:mx-0  p-4 w-full md:w-44 space-y-2">
            <h1 className=" text-5xl font-extralight ">12</h1>
            <p className=" text-sm text-[#6F6F6F]">
            hours saved on marketing efforts weekly
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BodyBox4