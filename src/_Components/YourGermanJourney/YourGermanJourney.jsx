import React from 'react'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
const YourGermanJourney = () => {

  const offers = [
     {id:<IoCheckmarkDoneCircleSharp className='text-3xl  mr-2' />,  
      disc:<p className=' text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale  
       Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
     {id:<IoCheckmarkDoneCircleSharp className='text-3xl mr-2' />,  
      disc:<p className='text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale  
      Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
    {id:<IoCheckmarkDoneCircleSharp className='text-3xl mr-2' />,  
      disc:<p className=' text-md ' >Lerne nicht nur Standarddeutsch, sondern tauch ein in regionale
       Traditionen und Dialekte – von bayrischem ,Servus‘ bis kölsch ,Alaaf‘!“</p>},
  ]
  return (
  
     <div className='bg-gray-100 min-h-screen'>
       <h1 className='text-3xl font-bold text-center text-slate-800 
                      mt-12   md:mt-56 lg:mt-20 xl:mt-24'>
         Unsere Angebote
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
      Reisen
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
Entdecke Deutschland nicht nur aus Büchern – erlebe die Sprache dort, wo sie lebendig wird!
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Mehr Erfahren
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
  rounded-lg w-96  p-6'>
      <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Arbeiten
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
Perfektes Business-Deutsch & kulturelle Feinheiten – damit du im Job überzeugst, nicht nur sprichst.  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
     Mehr Erfahren
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
  rounded-lg w-96  p-6'>
        <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Studieren
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-10">
Von Uni-Vokabeln bis Studentenslang: Wir machen dich fit für den Campus-Alltag!
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Mehr Erfahren
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
      </div>
      {/* Study */}
    </div>
  {/** End Main Content */}


      <div className="relative flex flex-col rounded-lg bg-[#ffea00] mt-28
       h-auto lg:h-[832px] overflow-hidden mt-8 mx-6 md:mx-12 lg:mx-16 xl:mx-20">
  {/* Container for image and content side by side on larger screens */}
  <div className="flex flex-col lg:flex-row w-full">
    
                                     {/* Left side - Image container */}
    <div className="relative w-full lg:w-auto px-4 lg:px-0">
      {/* Gray rectangle with shadow */}
      <div className="relative bg-[#d9d9d9] rounded-[38px]
       border border-black w-full max-w-[483px] h-[300px] 
       sm:h-[400px] lg:h-[552px] lg:w-[600px] mx-auto lg:ml-[50px] 
       lg:mr-0 mt-8 lg:mt-[120px] 
       shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),8px_8px_5.2px_3px_rgba(0,0,0,0.25)]">
        {/* Germany image */}
        <img 
          src="/Deutschland.png"
          alt="Germany"
          className="absolute w-[calc(100%-30px)] h-[calc(100%-10px)] 
          left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2
          object-cover rounded-[30px]
           "
        />
      </div>
      
      {/* Horizontal line - only shows on mobile */}
      <div className="border-t border-black w-full max-w-[500px] mx-auto mt-8 mb-8 lg:hidden"></div>
    </div>

    {/* Right side - Content */}
    <div className="relative w-full px-6 lg:px-0 lg:pl-12 xl:pl-16 flex flex-col">
      {/* Main Title */}
      <h1 className='text-black text-2xl sm:text-3xl 
      md:text-4xl font-bold mt-8 lg:mt-24 xl:mt-28 text-center lg:text-left'>
       SPRICH DEUTSCH WIE EIN MUTTERSPRACHLER – IN NUR 6 MONATEN!
      </h1>

      {/* Offers list */}
      <div className="mt-4 ">
        {offers.map((offer, index) => (
          <div key={index} className='flex items-center p-3 sm:p-4'>
            <div className='  flex font-semibold'>
              {offer.id}
              {offer.disc}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 lg:mt-12 mb-12 lg:mb-0 flex justify-center lg:justify-start">
        <span className='flex items-center text-white cursor-pointer bg-black hover:scale-105 px-6 py-3 rounded-lg transition-transform w-max'>
         Jetzt starten <IoIosArrowRoundForward className='ml-4 text-2xl' />
        </span>
      </div>
    </div>
  </div>

  {/* Diagonal line - only shows on larger screens */}
  <div className="hidden lg:block absolute border-t border-black w-[551.06px] left-[558px] top-[156px] origin-[0_0] rotate-[89.168deg]"></div>
</div>
    </div>
  )
}

export default YourGermanJourney
