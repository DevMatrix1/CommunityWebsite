import React from 'react'

const CommunityMembers = () => {
  return (
    <div className=' rounded-xl lg:rounded-3xl p-4 lg:p-10 lg:px-16 mt-8 lg:mt-16  border-yellow-300 border-2 shadow-xl shadow-yellow-300 border-spacing-4 ease-linear gradient1 ' >
      <h2 className='text-center text-2xl lg:text-6xl font-BarlowCondensed tracking-wider font-bold'>Community Members</h2>
     <div className='grid grid-cols-1  items-center justify-center gap-8 lg:grid-cols-3 mt-8 lg:mt-16'>
        <div className='flex flex-col items-center justify-center   gap-1'>
            <img src="./src/assets/ankitgit.jpeg" alt="" className=' rounded-full w-52 h-52' />
            <h4 className='bg-black text-white text-xl font-bold font-Bellefair tracking-wide uppercase mt-2 mix-blend-screen'>Ankit</h4>
            <h5 className='text-[#c02269]'>Founding member</h5>
            <p className='text-center'> A problem solver by nature.Love to explore and learn in technical field.
                    Confident in dsa skills and frontend development</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
            <img src="./src/assets/shubham.jpeg" alt="" className=' rounded-full w-52 h-52' />
            <h4 className='bg-black text-white  text-xl font-bold font-Bellefair tracking-wide uppercase mt-2'>Shubham Sigdar</h4>
            <h5 className='text-[#c02269]'>Software developer</h5>
            <p className='text-center'> Community Builder @Dev_matrix,100Devs Community Member, open source contributor at @RealDevSquad, Blogger At @Hashnode</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
            <img src="./src/assets/kotesh.jpeg" alt="" className=' rounded-full w-52 h-52' />
            <h4 className='bg-black text-white text-xl font-bold font-Bellefair tracking-wide uppercase mt-2' >Kotesh Mudila</h4>
            <h5 className='text-[#c02269]'>Frontend Developer</h5>
            <p className='text-center'> Frontend Developer with Project-based Experience in building Single Page Applications with Robust Functionalities and Aesthetic Designs. I turn ideas into Web-Apps.</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1'>
            <img src="./src/assets/udita.jpg" alt="" className=' rounded-full w-52 h-52' />
            <h4 className='bg-black text-white text-xl font-bold font-Bellefair tracking-wide uppercase mt-2 mix-blend-screen'>UDITA VISHNOI</h4>
            <h5 className='text-[#c02269]'>MERN Developer</h5>
            <p className='text-center'> VITB'25 | MERN Developer | Java | UI/UX Designer</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-1' >
            <img src="./src/assets/Akshay.jpeg" alt="" className=' rounded-full w-52 h-52' />
            <h4 className='bg-black text-white text-xl font-bold font-Bellefair tracking-wide uppercase'>Akshay Ajay Kalekar</h4>
            <h5 className='text-[#c02269]'>Fullstack MERN Developer</h5>
            <p className='text-center'>  Vellore Institute of Technology | Fullstack MERN Developer | UX/UI Designer | Blockchain Developer at GDSC</p>
        </div>
     </div>
     <h4 className='text-center text-2xl lg:text-4xl text-[#00ff7b] mt-4 lg:mt-8 font-Bellefair'>200+ Community  Members</h4>
    </div>
  )
}

export default CommunityMembers
