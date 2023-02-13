import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function NavBar() {
  return (
    <header className="text-emerald-50 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-emerald-50 mb-4 md:mb-0">
          <StaticImage alt="icon" height={50} src="../images/icon.png" />
        </Link>
        <nav className="hidden md:mr-auto md:ml-6 md:py-1 md:pl-6 md:border-l md:border-gray-400	md:flex flex-wrap items-center text-base justify-center">
          <Link to="/about-us" activeClassName="underline underline-offset-4 text-emerald-500" className="mr-5 hover:text-emerald-500">About Us</Link>
          <Link to="/contact-us" activeClassName="underline underline-offset-4 text-emerald-500" className="mr-5 hover:text-emerald-500">Contact Us</Link>
          {/* <a className="mr-5 hover:text-emerald-50">Company</a> */}
          {/* <a className="mr-5 hover:text-emerald-50">Pricing</a> */}
        </nav>
        <a className="hidden cursor-pointer md:inline-flex items-center bg-emerald-700 invisible md:visible border-0 py-1 px-3 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0" href="mailto:yaser@alnoq.com">Contact us
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}
