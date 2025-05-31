import React from 'react'

const ChoosePlan = () => {
  return (
    <section className='pl-16 pr-16  mt-16'>
        {/** Main Title Secion */}
         <div>
            <h2 className='text-3xl font-bold text-center mb-8'>Choose Your Plan</h2>
            <p className='text-center text-gray-600 mb-12'>Select the plan that best suits your learning needs.</p>
         </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16' >
            {/** Standard Plan  */}
              <div class="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      standard
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>29
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
          5 team members
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
          200+ components
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
          40+ built-in pages
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
          1 year free updates
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
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
  </div>
</div>
        {/** Premium Plan  */}
          <div class="flex flex-col rounded-lg bg-[#FFea00]   shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      standard
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>29
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
          5 team members
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
          200+ components
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
          40+ built-in pages
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
          1 year free updates
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
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
  </div>
</div>
            {/** Enterprise Plan  */}
              <div class="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
  <div class="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
    <p class="text-sm uppercase font-semibold text-slate-500">
      standard
    </p>
    <h1 class="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
      <span class="text-3xl">$</span>29
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
          5 team members
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
          200+ components
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
          40+ built-in pages
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
          1 year free updates
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
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button class="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
  </div>
</div>
        </div>
        
         
    </section>
  )
}

export default ChoosePlan
