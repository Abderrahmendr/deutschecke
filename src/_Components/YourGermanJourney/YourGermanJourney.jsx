import React from 'react'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
const YourGermanJourney = () => {

  const offers = [
     {id:<IoCheckmarkDoneCircleSharp className='text-6xl mr-2' />,  
      disc:<p className='mt-12 text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale  
       Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
     {id:<IoCheckmarkDoneCircleSharp className='text-6xl mr-2 -mt-12'  />,  
      disc:<p className='text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale  
      Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
    {id:<IoCheckmarkDoneCircleSharp className='text-6xl mr-2  -mt-12'  />,  
      disc:<p className=' text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale
       Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
  ]
  return (
  
     <div className='bg-gray-100 min-h-screen'>
       <h1 className='text-3xl font-bold text-center text-slate-800 
                      mt-12   md:mt-56 lg:mt-20 xl:mt-24'>
        Our Services
    </h1>   
                      {/**Main Content */} 
  <div class=" relative flex  flex-col  items-center justify-center      
               mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl
               gap-x-8 mt-12 md:mt-16 lg:mt-20 xl:mt-24             
  ">
  
       {/** Travel */}
  <div className='my-6 bg-white shadow-sm 
  border border-slate-200 
  rounded-lg w-96 p-6'>
    <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Travel
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
  </div>
      {/** End Travel */}
      {/** Work */}
     <div className='my-6 bg-white shadow-sm 
  border border-slate-200 
  rounded-lg w-96 p-6'>
      <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Work
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
     </div>
      {/* Work */}

      {/** Study */}
      <div className='my-6 bg-white shadow-sm 
  border border-slate-200 
  rounded-lg w-96 p-6'>
        <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Study
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
      </div>
      {/* Study */}
    </div>
  {/** End Main Content */}


      <div className=" relative flex flex-col  lg:flex-rows xl:grid-rows-2
      rounded-lg bg-[#ffea00] h-[832px] overflow-hidden
      relative mt-8  ml-6 mr-6 md:ml-12 md:mr-12 lg:ml-16 lg:mr-16 xl:ml-20 xl:mr-20
      ">
      {/* Gray rectangle with shadow */}
      
      <div className="absolute bg-[#d9d9d9] rounded-[38px] 
      border border-black w-[483px] h-[552px] left-[50px] 
      lg:w-[450px] lg:h-[552px] xl:w-[483px] xl:h-[552px]
      top-[120px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),8px_8px_5.2px_3px_rgba(0,0,0,0.25)]"></div>

      {/* Germany image */}
      <img src="/Deutschland.png"
        alt="Germany"
        className="absolute w-[452px] h-[542px] left-[66px] 
        md:w-[432px] md:h-[542px] lg:w-[452px] lg:h-[542px] xl:w-[452px] xl:h-[542px]
        top-[120px] object-cover aspect-[452/542]"
      />

      {/* Main Title */}
      <div className="absolute   text-left
       left-[640px] pr-8  
       grid grid-rows-2 md:grid-rows-1 lg:grid-rows-2 xl:grid-rows-2
       ">
        <h1 className='text-black text-4xl mt-28 font-bold text-[36px] lg:text-3xl md:text-2xl'>
              SPEAK GERMAN LIKE NATIVE   JUST in 3 MOTHS

        </h1>
         {
    offers.map((offer, index)=>{
      return(
        <div className='
        '>
          <div key={index} className='
                      flex flex-rows-2 justify-center items-center p-4
                      text-sm
        '>
         {offer.id}
          <div className='text-black text-lg font-semibold'>
            {offer.disc}
          </div>
         </div>
         
          </div>
      )
    })
  }
    <span className='flex w-1/3 mt-8 text-black  cursor-pointer 
        bg-black text-white hover:scale-105 px-6 py-3 rounded-lg
        '>
          Get started <IoIosArrowRoundForward className=' ml-4 text-2xl' />
        </span>
      </div>

     
      {/* Diagonal line */}
      <div className="absolute border-t border-black w-[551.06px] left-[558px] top-[156px] origin-[0_0] rotate-[89.168deg]"></div>

      {/* Horizontal line */}
      <div className="absolute border-t border-black w-[500px] left-[66px] top-[707px]"></div>
        
        {/* Button */}
       <div className="
       flex items-center justify-center  mt-80
       ">
         
      </div>
      
    </div>
    </div>
  )
}

export default YourGermanJourney
