import React from 'react'

const Hero = () => {
  return (
    <div>
        {/** Hero Sectop */}
 
 <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

     <div class="w-full h-64 lg:w-2/3 lg:h-auto lg:-mr-36">
        <img class="h-full w-full object-cover" src="/Learn-german.png" alt="Winding mountain road"/>
    </div>
 
     <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-24 lg:ml-20 xl:mt-24 xl:-ml-20">
         <div class="flex flex-col p-12 md:px-6">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Jetzt kostenlos testen</h2>
            <p class="mt-4">
                
            </p>
             <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center 
                    text-lg font-medium text-gray-100 bg-green-600
                     border-solid border-2 border-gray-600  p-4 rounded-md
                      hover:bg-green-800 hover:shadow-md md:w-48
                      ">
                    Jetzt kostenlos testen
                    </a>
            </div>
        </div>
     </div>
 
</div>
    </div>
  )
}

export default Hero

