import React from 'react'

const Whydevmatrix = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
        <div className='bg-[#FFC4DC] flex flex-col justify-center items-center  lg:flex-row lg:w-1/2  rounded-lg border-yellow-300 border-2 p-4 shadow-xl shadow-yellow-300 lg:shadow-none lg:hover:shadow-xl lg:hover:shadow-amber-400 border-spacing-4 ease-linear'>
            <img src="./src/assets/conceptimg.png" alt="conceptimg" className='h-[20rem] w-2/5'/>

            <div className='text-black p-3'>
                <h2 className='text-center font-Bellefair text-2xl lg:text-4xl mb-2 ' >Why Dev Matrix</h2>
                <p className='text-center font-Barlow lg:text-left' >A group of individuals with similar interests and goals join forces to support and develop each other through shared knowledge, experiences, and resources. By collaborating and pooling their resources, they strive towards individual and collective growth and success.</p>
            </div>
        </div>
        <div className='bg-[#B1AFFF] flex flex-col justify-center items-center lg:flex-row lg:w-1/2 rounded-lg border-yellow-300 border-2 p-4 shadow-xl shadow-yellow-400 lg:shadow-none lg:hover:shadow-xl lg:hover:shadow-amber-400 border-spacing-4 ease-linear'> 
            <img src="./src/assets/conceptimg.png" alt="conceptimg" className='h-[20rem] w-2/5'/>
            <div className='text-black p-3'>
                <h2 className='text-center font-Bellefair text-2xl lg:text-4xl mb-2'>Our Concept</h2>
                <p className='text-center font-Barlow lg:text-left'> Our emphasis is on quality rather than quantity. Your commitment to consistent growth is our primary requirement. Persistence and hard work are crucial to achieving success.</p>
            </div>
        </div>
  </div>
  )
}

export default Whydevmatrix
