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
         <div class="flex flex-col p-12 md:px-6">
            <h2 class="text-2xl font-bold uppercase
             text-green-800 lg:text-3xl
             ">Deutsch Ecke – Wo Deutschlernen Spaß macht!</h2>
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
    </div>
  )
}

export default Hero

