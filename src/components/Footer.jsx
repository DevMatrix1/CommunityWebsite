import React from 'react'
import logo from "../assets/logopng.png"
import link from "../assets/link.png"

const Footer = () => {
  return (
    <div>
      <footer className='rounded-xl lg:rounded-3xl p-4 lg:p-10 lg:px-16 mt-8 lg:mt-16   border-[#00ff7b] border-2 shadow-xl shadow-yellow-300 border-spacing-4 ease-linear flex flex-col lg:flex-row justify-center items-center lg:justify-between gradient2 mix-blend-screen' >
                <div><img src={logo} alt="Logo" /></div>
                <div className='flex justify-center items-center space-x-4'>
                    <h2  className=' text-xl lg:text-2xl'>Twitter</h2>
                        <a href='https://twitter.com/DevMatrix1' target='_blank'><img src={link} alt="Logo" className='w-8 h-8' /></a>
                </div>
                <div className='flex justify-center items-center space-x-4'>
                        <h2  className=' text-xl lg:text-2xl'>Github</h2>
                        <a href='https://github.com/DevMatrix1' target='_blank'><img src={link} alt="Logo" className='w-8 h-8' /></a>
                </div>
                <div className='flex justify-center items-center space-x-4'>
                        <h2  className=' text-xl lg:text-2xl'>Linkedin</h2>
                        <a href='https://www.linkedin.com/company/dev-matrix/' target='_blank'><img src={link} alt="Logo" className='w-8 h-8' /></a>
                </div>

                <div className='flex justify-center items-center space-x-4'>
                        
                    <h2  className=' text-xl lg:text-2xl'>Youtube</h2>
                        <a href='https://www.youtube.com/channel/UCzhTm71hEzzNc0yxEoe2EEQ' target='_blank'><img src={link} alt="Logo" className='w-8 h-8' /></a>
                </div>
               
                
      </footer>
    </div>
  )
}

export default Footer
