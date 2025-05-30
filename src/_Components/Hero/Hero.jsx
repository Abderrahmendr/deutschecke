import React from 'react'
import { BsMouse } from "react-icons/bs";


const Hero = () => {
  return (
    <div>
        {/** Hero Section */}
 
 <div class="relative flex flex-col items-center 
 
 mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

     <div class="w-full h-64 
     md:mt-12  md:w-4/5 md:h-96
     lg:w-2/3 lg:h-auto lg:-mr-36 lg:-mt-8">
        <img class="h-full w-full object-cover" src="/Learn-german.png" alt="Learn-german"/>
    </div>
 
     <div
        class="max-w-lg bg-white md:max-w-2xl 
        md:z-10 md:shadow-lg  md:top-0 
        md:mt-8 lg:w-3/5 lg:left-0 lg:-mt-20 lg:-mr-10
        xl:mt-2 xl:-ml-20   
        ">
         <div class="flex flex-col p-12 md:px-6">
            <h2 class="text-2xl font-bold uppercase
             text-green-800 lg:text-3xl
             ">DeutschEcke – Wo Deutschlernen Spaß macht!</h2>
            <p class="mt-4">
                Von Grammatik-Chaos zu fließenden Sätzen – wir sind deine Ecke für alles Deutsche!
            </p>
             <div class="mt-8">
                <a href="#"
                    class="  flex justify-center items-center w-full text-center 
                    text-lg font-medium text-gray-100 bg-green-600
                     border-solid border-2 border-gray-600 p-2  rounded-md
                      hover:bg-green-800 hover:shadow-md md:w-48
                      ">
                     Starte deine Reise
                    </a>
            </div>
        </div>
     </div>
                   
</div>
  {/** End Hero Section */}
  <div className='left-20
   sm:mt-36 sm:ml-28 sm:flex sm:items-start sm:justify-start
   md:mt-36 md:items-center md:flex md:justify-center md:mr-20
   lg:mt-16 lg:ml-24 lg:flex lg:items-start lg:justify-start
    xl:mt-14 xl:ml-32 xl:flex xl:items-start xl:justify-start
    max-sm:mt-36
   '>
        <button className=' flex flex-col items-center justify-center ml-20 -mt-14'>
                 

                      <a className='ml-20 -mt-20'> <BsMouse 
                  className=' text-2xl mb-4 ml-6
                    '/>Scroll down</a>
  </button>
  </div>


    </div>

  )
}

export default Hero

