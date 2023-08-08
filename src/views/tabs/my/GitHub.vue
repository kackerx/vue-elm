<script setup lang="ts">
let active = 'home'

// const liClass = ['px-2', 'py-1', 'border-b-2', { 'border-orange-300': active, 'font-semibold': active }]

const isActive = (nav: string) => {
  return active === nav
}

const setActive = (nav: string) => {
  active = nav
}
</script>

<template>
  <header class="text-sm flex justify-between items-center p-4 bg-gray-900 text-white">
    <section class="text-white flex items-center">
      <div class="text-white mr-4">
        <a class="fill-current hover:text-gray-400" href="">
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
               class="">
            <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </a>
      </div>
      <div class="relative flex items-center mr-4">
        <input type="text" class="bg-gray-900 rounded py-1 border border-gray-500 px-3 w-64 placeholder-gray-400"
               placeholder="Search or jump to"/>
        <div class="absolute top-0 right-0 h-full flex items-center">
          <div class="border border-gray-600 rounded px-2 mr-2 text-gray-400">/</div>
        </div>
        <!--        <div class="border border-pink-50 h-6 w-6 absolute top-0 right-0 text-white flex items-center justify-center rounded mr-2">/</div>-->
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><a class="hover:opacity-70" href="#">Pull requests</a></li>
          <li><a class="hover:opacity-70" href="#">Issues</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Explore</a></li>
        </ul>
      </nav>
    </section>

    <section class="flex space-x-4">

      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"/>
        </svg>
        <div class="bg-blue-400 w-2 h-2 rounded-full absolute top-0 right-0"></div>
      </div>

      <a href="#" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
          <path fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd"/>
        </svg>
      </a>

      <a href="" class="flex items-center">
        <div class="w-6 h-6 rounded-full overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/55371516?v=4" alt="">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
          <path fill-rule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clip-rule="evenodd"/>
        </svg>
      </a>

    </section>
  </header>

  <section class="repo flex flex-col justify-between h-24 bg-gray-100 px-8 pt-2">

    <div class="flex justify-between">
      <div class="flex items-center">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
            <path
                d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"/>
          </svg>
        </a>
        <a href=""><span class="text-blue-600 hover:underline ml-2">tailwindlabs</span></a>
        <div class="mx-2">/</div>
        <a href=""><p class="font-bold text-blue-600 hover:underline mr-2">tailwindlabs</p></a>
        <div class="text-xs text-gray-500 border border-gray-300 rounded-2xl px-1">public</div>
      </div>
      <section class="flex space-x-2">
        <div class="flex items-center text-xs shadow-sm">

          <button class="flex items-center space-x-2 border border-gray-300 rounded-lg rounded-r-none px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold">watch</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"/>
            </svg>

          </button>
          <a href=""
             class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 hover:text-blue-400 bg-white">555</a>
        </div>
        <div class="flex items-center text-xs shadow-sm">

          <button class="flex items-center space-x-2 border border-gray-300 rounded-lg rounded-r-none px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold">watch</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"/>
            </svg>

          </button>
          <a href=""
             class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 hover:text-blue-400 bg-white">555</a>
        </div>
        <div class="flex items-center text-xs shadow-sm">

          <button class="flex items-center space-x-2 border border-gray-300 rounded-lg rounded-r-none px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path fill-rule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold">watch</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"/>
            </svg>

          </button>
          <a href=""
             class="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 hover:text-blue-400 bg-white">555</a>
        </div>
      </section>
    </div>

    <div>
      <ul class="flex space-x-4">

        <li :class="['px-2', 'py-1', 'border-b-2', { 'border-orange-300': isActive('code'), 'font-semibold': isActive('code') }]">
          <a href="" class="flex text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="fill-current w-4 h-4 text-black">
              <path fill-rule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="ml-2">Code</span>
          </a>
        </li>
        <li :class="['px-2', 'py-1', 'border-b-2', { 'border-orange-300': isActive('home'), 'font-semibold': isActive('code') }]">
          <a href="" class="flex text-xs text-gray-700 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="fill-current w-4 h-4">
              <path fill-rule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="ml-2">Home</span>
          </a>
        </li>
        <li class="px-2 py-1 font-semibold">
          <a href="" class="flex text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="fill-current w-4 h-4 text-black">
              <path fill-rule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="ml-2">Code</span>
          </a>
        </li>
        <li class="px-2 py-1 font-semibold">
          <a href="" class="flex text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="fill-current w-4 h-4 text-black">
              <path fill-rule="evenodd"
                    d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                    clip-rule="evenodd"/>
            </svg>
            <span class="ml-2">Code</span>
          </a>
        </li>

      </ul>
    </div>

  </section>

  <main class="container flex mx-auto my-8 px-4">
    <section class="left w-3/4 mr-8">
      <div class="mb-4 flex justify-between text-xs">

        <div class="left flex items-center space-x-4">
          <button class="flex items-center space-x-2 border rounded-lg px-4 py-1 bg-[#f6f8fa]  hover:opacity-70">
            <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                 data-view-component="true" class="octicon octicon-git-branch">
              <path
                  d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
            </svg>
            <span class="font-semibold">master</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"/>
            </svg>
          </button>

          <div class="flex items-center space-x-2">
            <svg text="gray" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                 data-view-component="true" class="octicon octicon-git-branch">
              <path
                  d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
            </svg>
            <span class="font-semibold text-xs">45</span>
            <span>brances</span>
          </div>
        </div><!-- left -->

        <div class="right flex items-center space-x-1">
          <button class="border rounded-lg px-2 py-1">
            Go to file
          </button>
          <button class="border rounded-lg px-2 py-1 bg-green-600 text-white flex items-center">
            <span class="font-semibold">Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
              <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div> <!-- right -->

      </div>

      <div class="file-explorer-header flex items-center justify-between p-2 bg-gray-100 border rounded-t-lg">
        <div class="flex items-center space-x-2 text-xs">
          <div class="rounded-full overflow-hidden w-6">
            <img src="https://avatars.githubusercontent.com/u/55371516?v=4" alt="">
          </div>
          <span class="font-semibold">Kacker</span>
          <span class="">Don't use pointer cursor on disabled buttons by default(#24125)</span>
        </div>
        <div class="flex items-center space-x-2 text-xs">
          <span>a7c98s</span>
          <span>yesterday</span>
        </div>
      </div> <!--end file explorer header-->

      <div class="file-explorer"></div>
    </section>

    <section class="sidebar w-1/4">
      arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst
      arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst arstarst
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style>