import React from 'react';

const BodyBox5 = () => {
  return (
    <div className='bg-[#DEFBE6] md:rounded-2xl flex flex-col md:flex-row h-auto w-full md:w-fit md:mx-10 p-8 md:p-24'>


      <div className='md:w-4/12 space-y-6'>
        <h1 className='text-[#6F6F6F] font-semibold'>Marketing Tools</h1>
        <h1 className='text-5xl'>Skyrocket your growth with advanced marketing tools</h1>
        <p className='text-[#525252]'>A library of ready-to-use marketing campaigns, workflows, and programs to accelerate your growth, maximize savings, and reduce efforts.</p>
        <button className='text-white bg-black rounded-lg text-sm p-4 px-6'>Join the waitlist</button>
      </div>

      <div className='scroll-smooth md:w-7/12 p-4 mx-auto md:px-8 space-y-4 overflow-x-auto md:overflow-y-auto max-h-[500px] hide-scrollbar space-y-2'>
  <div className='h-72 rounded-xl bg-[#A6C8FF] p-6'>
    <h1 className='font-semibold'>Reputation Management</h1>
    <p>Improve online reputation and business listings.</p>
  </div>

        <div className='h-72 rounded-xl bg-[#FEC57B] p-6'>
          <h1 className='font-semibold'>Smart Inbox</h1>
          <p>Manage customer conversations from every channel in a single, easy-to-use inbox.</p>
        </div>

        <div className='h-72 rounded-xl bg-green-400 p-6'>
          <h1 className='font-semibold'>Social Media Management</h1>
          <p>Improve online reputation and business listings.</p>
        </div>

        <div className='h-72 rounded-xl bg-pink-400 p-6'>
          <h1 className='font-semibold'>Reputation Management</h1>
          <p>Improve online reputation and business listings.</p>
        </div>

        <div className='h-72 rounded-xl bg-purple-400 p-6'>
          <h1 className='font-semibold'>Reputation Management</h1>
          <p>Improve online reputation and business listings.</p>
        </div>
      </div>
    </div>
  );
};

export default BodyBox5;
