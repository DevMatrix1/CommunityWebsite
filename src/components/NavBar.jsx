import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <img src="./src/assets/blob.svg" alt=""  className='blur-[228px] absolute left-0 animate-pulse h-4/5' style={{animationDuration:'8s'}}/>
      <img src="./src/assets/blob.svg" alt=""  className=' blur-[168px] lg:blur-[228px] absolute right-0 animate-pulse h-4/5' style={{animationDuration:'8s'}}/>
      <nav className='pt-4'>
        <ul className='flex justify-between items-center'>
                <li className='flex items-center lg:space-x-6'> <img src="./src/assets/logopng.png" alt="Logo" />
                    <Link to={"/"} className='text-base lg:text-3xl lg:tracking-wider cursor-pointer font-Quintessential logo'> <h1>DEV MATRIX </h1></Link>
                </li>
                {
                   showMediaIcons ?  <img src="./src/assets/hamburger-menu.svg"  alt="menu" className='h-8 w-8 block lg:hidden animate-pulse' onClick={handleToggle}/>: " "
                 }
                <div className={`font-BarlowCondensed font-bold flex  flex-col  justify-center lg:justify-end  items-center gap-5  space-x-7 text-xl absolute bg-slate-500  backdrop-blur  top-0 right-0 w-9/12 h-screen  z-40  lg:relative lg:bg-black lg:mix-blend-color-dodge lg:flex lg:flex-row lg:p-4  lg:h-fit  ${showMediaIcons ? "hidden" :"block"}`} onClick={handleLinkClick}>

                    <img src="./src/assets/close.svg" alt="close" className='h-8 w-8 absolute right-4 top-10 block lg:hidden animate-bounce' />
                    <li><Link to={"/Contributers"}> Top Contributers</Link></li>
                    <li><Link to={"/Events"}>Events</Link></li>
                    <li><Link to={"/ContactUs"}> Contact Us</Link></li>
                    <li><button className='bg-[#4047E0] px-2 py-1 rounded-md border-[#fde047] border-2 hover:shadow-[#fde047] hover:shadow-lg cursor-pointer' ><a href="https://www.linkedin.com/in/ankit-kanyal/" target='_blank'> Join Discord</a></button></li>
                </div>
        </ul>
      </nav>
     

    </>
  )
}

export default NavBar