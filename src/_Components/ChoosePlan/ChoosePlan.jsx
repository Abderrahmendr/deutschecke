import React from 'react'

const ChoosePlan = () => {
  return (
    <section className='pl-16 pr-16  mt-16'>
        {/** Main Title Secion */}
         <div>
            <h2 className='
            text-3xl font-bold text-center mb-8
            '>
              Wähle deinen Plan
            </h2>
            <p className='
            text-center text-gray-600 mb-12
            '>
              Wähle den Plan, der am besten zu deinen Bedürfnissen passt.
               </p>
         </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16' >
            {/** Standard Plan  */}
              <div class="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      standard
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>9.99
      <span class="self-end text-3xl">/mo</span>
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Grundlagen-Training – Grammatik & Basiswortschatz
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Zugang zu 50+ Übungen – Interaktive Lernspiele
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
           Wöchentliche Challenges – Motivation durch Community
        </p>
      </li>
       
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          E-Mail-Support – Antwort innerhalb von 24h
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Jetzt starten
    </button>
  </div>
</div>
        {/** Premium Plan  */}
          <div class="flex flex-col rounded-lg bg-[#FFea00]   shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      PREMIUM
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>29.99
      <span class="self-end text-3xl">/mo</span>
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Live-Gruppenkurse (2x/Woche) – Mit muttersprachlichen Lehrern
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Persönliches Feedback – Aufnahmen & Korrekturen
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
         Exklusive Lernmaterialien – Dialekt-Guides & Business-Deutsch
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Prioritäts-Support – Schnelle Hilfe per Chat
        </p>
      </li>
      
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Jetzt starten
    </button>
  </div>
</div>
            {/** Pro Plan  */}
              <div class="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      Pro
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>59.99
      <span class="self-end text-3xl">/mo</span>
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Private 1:1-Stunden (4x/Monat) – Maßgeschneidert für deine Ziele
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          Zertifikat nach Abschluss – Offizieller Nachweis deines Sprachniveaus
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
          VIP-Webinare – Themen wie „Bewerbungsgespräche“ oder „Dialekte knacken“
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-slate-200 bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-slate-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg>
        </span>
        <p class="text-slate-500">
         24/7 Support – Auch am Wochenende
        </p>
      </li>

      
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Jetzt starten
    </button>
  </div>
</div>
        </div>
        
         
    </section>
  )
}

export default ChoosePlan
