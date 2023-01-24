import React from 'react'

export default function NavBar() {
  return (
    <header className="text-emerald-50 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-emerald-50 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-emerald-700 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl tracking-widest font-bold">ALNOQ</span>
          </a>
          <nav className="md:mr-auto md:ml-6 md:py-1 md:pl-6 invisible md:visible md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-emerald-50">About</a>
            <a className="mr-5 hover:text-emerald-50">Company</a>
            <a className="mr-5 hover:text-emerald-50">Pricing</a>
          </nav>
          <button className="inline-flex items-center bg-emerald-700 invisible md:visible border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact us
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
  )
}
