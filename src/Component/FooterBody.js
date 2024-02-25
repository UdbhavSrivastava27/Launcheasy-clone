import React from 'react'
import logo from '../Assest/Logo.png'
import instaIcon from '../Assest/Insta.png'
import linkIcon from '../Assest/Linkedin.png'
import mailIcon from '../Assest/mail.png'
import faceIcon from '../Assest/facebook.png'
import FooterLinks from './FooterLinks'

const FooterBody = () => {
  return (
    <div>

<div className=' bg-[#262626] p-10 md:p-16 md:px-24  flex flex-col md:flex-row justify-between'>


<div className=' flex flex-col '>

<div className=' flex '>
     <img src={logo} alt='logo.png' className=' m-2' />
     <h1 className=' font-bold  text-3xl text-white'> Launch</h1>
     <span className='font-bold text-3xl text-[#4589FF] '>eazy</span>
  </div>

  <h1 className=' mt-4 text-[#A8A8A8] my-8 hidden md:block'>Engage customers, convert prospects effortlessly</h1>
  <h1 className=' mt-4 text-[#A8A8A8] my-8 md:hidden'>Making marketing as simple as three clicks.</h1>


  <div className=' flex flex-row items-center space-x-1 mt-4'>

    <img src={linkIcon} alt='socialmedia icon'/>
    <img src={faceIcon} alt='socialmedia icon'/>
    <img src={instaIcon} alt='socialmedia icon'/>
    <img src={mailIcon} alt='socialmedia icon'/>


  </div>
  </div>



  <div>
    <FooterLinks/>
  </div>




</div>

    </div>
  )
}

export default FooterBody