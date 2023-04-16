import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logopng.png"
import hamburgerMenu from "../assets/hamburger-menu.svg"
import closeIcon from "../assets/close.svg"

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const handleToggle = ()=>{
    setShowMediaIcons(!showMediaIcons)
  }
  const handleLinkClick = () => {
    setShowMediaIcons(true)
  };
  return (
    <>
      <nav className='pt-4'>
        <ul className='flex justify-between items-center'>
                <li className='flex items-center lg:space-x-6'> <img src={logo} alt="Logo" />
                    <Link to={"/CommunityWebsite"} className='text-base lg:text-3xl lg:tracking-wider cursor-pointer font-Quintessential logo'> <h1>DEV MATRIX </h1></Link>
                </li>
                {
                   showMediaIcons ?  <img src={hamburgerMenu}  alt="menu" className='h-8 w-8 block lg:hidden animate-pulse' onClick={handleToggle}/>: " "
                 }
                <div className={`font-BarlowCondensed font-bold flex  flex-col  justify-center lg:justify-end  items-center gap-5  space-x-7 text-xl absolute opacity-95  backdrop-blur  top-0 right-0 w-9/12 h-screen  z-40  lg:relative lg:bg-black lg:mix-blend-plus-lighter lg:flex lg:flex-row lg:p-4  lg:h-fit  ${showMediaIcons ? "hidden" :"block"}`} onClick={handleLinkClick}>

                    <img src={closeIcon} alt="close" className='h-8 w-8 absolute right-4 top-10 block lg:hidden animate-bounce' />
                    <li><Link to={"/CommunityWebsite/Contributers"}> Top Contributers</Link></li>
                    <li><Link to={"/CommunityWebsite/Events"}>Events</Link></li>
                    <li><Link to={"/CommunityWebsite/ContactUs"}> Contact Us</Link></li>
                    <li><button className='bg-[#4047E0] px-2 py-1 rounded-md border-[#fde047] border-2 hover:shadow-[#fde047] hover:shadow-lg cursor-pointer' ><a href="https://www.linkedin.com/in/ankit-kanyal/" target='_blank'> Join Discord</a></button></li>
                </div>
        </ul>
      </nav>
     

    </>
  )
}

export default NavBar
