import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ThemeTogglerComp from './ThemeToggler'

export default function NavBar() {
  return (
    <header className="text-gray-700 dark:text-emerald-50  body-font bg-white dark:bg-[#0a100e] dark:shadow-xl sticky top-0 z-10">
      <div className=" rounded container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-700 dark:text-emerald-50 mb-4 md:mb-0">
          <StaticImage alt="icon" className="dark:invert" height={50} src="../images/icon_black.png" />
        </Link>
        <nav className="md:mr-auto md:ml-6 md:py-1 md:pl-6 md:border-l md:border-gray-400	md:flex flex-wrap items-center text-base justify-center">
          <Link to="/about-us" activeClassName="underline underline-offset-4 text-emerald-500" className="mr-5 hover:text-emerald-500">About Us</Link>
          <Link to="/contact-us" activeClassName="underline underline-offset-4 text-emerald-500" className="inline-block md:hidden md:mr-5 hover:text-emerald-500">Contact Us</Link>
          {/* <a className="mr-5 hover:text-emerald-50">Company</a> */}
          {/* <a className="mr-5 hover:text-emerald-50">Pricing</a> */}
        </nav>

        <ThemeTogglerComp />
        <Link activeClassName="bg-emerald-800 text-emerald-500 hover:bg-gray-900 dark:bg-gray-900 text-gray-100" to="/contact-us" className="hidden text-emerald-50 cursor-pointer md:inline-flex items-center bg-emerald-700 invisible md:visible border-0 py-1 px-3 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>

          Contact us
        </Link>
      </div>
    </header>
  )
}
