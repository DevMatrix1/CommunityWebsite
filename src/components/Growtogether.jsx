import React from 'react'

const Growtogether = () => {
  return (
    <div className='flex flex-col bg-[#E2FFDD] text-black mt-8 lg:mt-16 rounded-xl lg:rounded-3xl p-4 lg:p-10 lg:px-16  border-yellow-300 border-2 shadow-xl shadow-yellow-300 border-spacing-4 ease-linear'>
      <div className='text-center'>
            <h2 className='text-[#3cd1b8] font-extrabold text-2xl lg:text-6xl font-BarlowCondensed tracking-wider'>Let’s Grow together </h2>
            <h3 className='text-xl lg:text-4xl '> #peer-learning </h3>
      </div>
      <div className='flex flex-col gap-4  lg:flex-row mt-4 lg:mt-8'>
          <div className='bg-white rounded-2xl p-4 lg:w-1/2'> 
            <h4 className='font-semibold text-2xl lg:text-4xl'>#1OO Days Of Code</h4>
            <p className='font-serif mt-4 lg:mt-8 lg:text-xl'>Our community promotes #100DaysOfCode promoting peer learning. Allowing the members to be consistent a way of holding them accountable for their day to day routine.</p>
            <div className='bg-[#FF80BD] p-4 lg:p-8 rounded-2xl lg:rounded-3xl  mt-4 lg:mt-8' >
              <div>
                <img src="./src/assets/uditatwitter.png" alt="#100days" className=' my-0 mx-auto' />

              </div>
            </div>
          </div>
          <div className='bg-white p-4 rounded-2xl lg:w-1/2'> 
            <h4 className='font-semibold text-2xl lg:text-4xl'>#Maximize Potential</h4>
            <p className='font-serif mt-4 lg:mt-8 lg:text-xl'>Supportive community and helpful mentors provide invaluable guidance and support for coding beginners, helping them achieve their goals through specific requests, participation, and experience-sharing.</p>
            <div className='bg-[#FF80BD] p-4 lg:p-8  rounded-2xl lg:rounded-3xl mt-4 lg:mt-8'>
              <div>
                <img src="./src/assets/discord.png" alt="support" className='rounded-xl lg:rounded-3xl my-0 mx-auto'/>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default Growtogether
