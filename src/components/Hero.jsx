import React from 'react'
import blob from "../assets/blob.svg"
import discord from "../assets/discord.gif"
import people from "../assets/people.png"

const Hero = () => {
  return (
    <div className='flex  flex-col-reverse  justify-center items-center lg:flex-row p-4 lg:mt-12'>
      <img src={blob} alt="blob"  className='blur-[228px] absolute left-0 animate-pulse h-4/5' style={{animationDuration:'8s'}}/>
      <img src={blob} alt="blob"  className=' blur-[168px] lg:blur-[228px] absolute right-0 animate-pulse h-4/5' style={{animationDuration:'8s'}}/>
          <div className='lg:w-1/2'>
                <h1 className='w-5/6  text-4xl lg:text-6xl font-Bellefair'>Let's Connect with people in tech</h1>
                <p className='text-xl mt-8  font-Barlow lg:w-3/4'>Connecting with people in tech is not just about networking, it's about creating a community of peers who continuously learn and grow together.</p>
                <button className='bg-[#4047E0] px-2 py-1 my-8 lg:my-12 rounded-md border-[#fde047] border-2 hover:shadow-[#fde047] hover:shadow-lg cursor-pointer' >
                  <a href="https://www.linkedin.com/in/ankit-kanyal/" target='_blank' className='font-Barlow flex gap-4 items-center cursor-pointer'> 
                  <img src={discord} alt="discord"   className='mix-blend-color-burn h-8 w-8 '/>
                Join Discord</a>
                </button>


          </div>
          <div className='w-2/3 lg:w-1/2'>
            <img src={people} alt="people" />
          </div>
    </div>
  )
}

export default Hero
