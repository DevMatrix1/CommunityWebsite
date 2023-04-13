import React from 'react'

const Hero = () => {
  return (
    <div className='flex  flex-col-reverse  justify-center items-center lg:flex-row p-4 lg:mt-12'>
          <div className='lg:w-1/2'>
                <h1 className='w-5/6  text-4xl lg:text-6xl font-Bellefair'>Let's Connect with people in tech</h1>
                <p className='text-xl mt-8  font-Barlow lg:w-3/4'>Connecting with people in tech is not just about networking, it's about creating a community of peers who continuously learn and grow together.</p>
                <button className='bg-[#4047E0] px-2 py-1 my-8 lg:my-12 rounded-md border-[#fde047] border-2 hover:shadow-[#fde047] hover:shadow-lg cursor-pointer' >
                  <a href="https://www.linkedin.com/in/ankit-kanyal/" target='_blank' className='font-Barlow flex gap-4 items-center cursor-pointer'> 
                  <img src="./src/assets/discord.gif" alt="logo"   className='mix-blend-color-burn h-8 w-8 '/>
                Join Discord</a>
                </button>


          </div>
          <div className='w-2/3 lg:w-1/2'>
            <img src="./src/assets/people.png" alt="people" />
          </div>
    </div>
  )
}

export default Hero
