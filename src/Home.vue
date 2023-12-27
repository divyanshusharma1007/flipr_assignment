<template>
    <section class="w-full flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-20 p-8">
      <div class="sm:ml-10 mb-8 sm:mb-0 sm:w-1/2">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Embark on a Journey through Nobel Laureates</h2>
        <h2 class="text-2xl font-bold text-gray-800 mb-8 sm:mb-12">
          Unveiling the Extraordinary Achievements and Contributions of Nobel Prize Laureates
        </h2>
        <router-link
          to="/prizes"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Prizes
        </router-link>
      </div>
      <img src="./assets/awrd.png" alt="" class="w-full sm:w-1/2 drop-shadow-2xl shadow-black border-b-2 border-black">
    </section>
  
    <h2 class="ml-10 text-3xl font-bold text-slate-800 drop-shadow-lg mt-8 sm:mt-16">Features</h2>
    <section class="text-gray-600 body-font p-8">
      <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4">
          <div
            class="h-full bg-gradient-to-b from-slate-50 to-purple-200 bg-opacity-75 px-6 sm:px-8 pt-8 sm:pt-16 pb-12 sm:pb-24 rounded-lg overflow-hidden text-center relative"
          >
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Complete Database</h2>
            <h3 class="text-sm sm:text-base">This app is composed of a large database</h3>
          </div>
        </div>
        <div class="p-4">
          <div
            class="h-full bg-gradient-to-b from-slate-50 to-purple-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
          >
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Large Range of Collection</h2>
            <h3 class="text-sm sm:text-base">It has a large collection</h3>
          </div>
        </div>
        <div class="p-4">
          <div
            class="h-full bg-gradient-to-b from-slate-50 to-purple-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
          >
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Specific Filters</h2>
            <h3 class="text-sm sm:text-base">It is composed of filters to search and find specific rewards</h3>
          </div>
        </div>
      </div>
    </section>
  
    <footer class="text-gray-600 body-font pt-8">
      <div class="bg-gray-100 p-4">
        <div class="container mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           
            <span class="ml-3 text-3xl font-bold">Prizes</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2023 Divyanshu sharma
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                </path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                </path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  </template>
  
  <style>
    body {
      font-family: 'Your Chosen Font', sans-serif;
    }
  
    h2 {
      font-size: 2.5rem;
    }
  
    h3 {
      font-size: 1.5rem;
    }
  </style>
  