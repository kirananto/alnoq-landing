import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "@emotion/styled"
// import { StaticImage } from "gatsby-plugin-image"

const StyledSpan = styled.span`
  :after {
    content:"Monitor";
    animation: purpose 6s linear infinite;
  }
  @keyframes purpose {
    0% { content:"Monitor"; }
    33% { content:"Notify"; }
    66% { content: "Query"; }
  }
`
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="text-orange-100 bg-[#150d12] antialiased" style={mainStyle}>
      <nav className="bg-orange-700 sticky top-0">
        <div className="bg-[#150d12] w-8 h-8 grid place-content-center"><div className="rounded-full h-4 w-4 bg-orange-700"/></div>
      </nav>
      <section className="min-h-screen md:min-h-50 py-32 md:py-48 px-8 sm:px-32 lg:px-64 max-full grid place-content-center">
        <h1 className="text-4xl md:text-5xl text-center text-orange-100 mt-16 w-full font-bold leading-normal">
          Now you can easily <StyledSpan className="text-orange-600 font-bolder underline " id="purpose" /> <div className="mt-2"/>Across All Your SaaS Tenants
          <br />
        </h1>
      </section>
      <section className="bg-orange-700 min-h-32 md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 w-full">
        <h2 className="text-3xl md:text-4xl max-w-6xl pr-2">You Generate tons of operational data, but how do you expose them to your customers and put them to use?</h2>
      </section>
      <section className="min-h-48 md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-6xl">
        <h2 className="text-3xl md:text-4xl pr-2">Leave the Heavy Lifting to Us 💪 <br />Let Your Team Focus on Business Logic </h2>
        <div className="text-3xl mt-6 text-orange-100 font-bold pr-2"> Meet <span className="text-orange-600 tracking-widest">ALNOQ</span> 👋</div>
      </section>
      <section className="bg-orange-700 min-h-32 md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 w-full text-right">
        <h2 className="text-3xl md:text-4xl max-w-6xl  pr-8 sm:pr-2">Alnoq helps you expose the operational data to your customers in your desired formats, get insights and set alerts on them. </h2>
      </section>
      <section className="min-h-64 md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-6xl">
        <div>
          <h2 className="text-4xl mb-8">With Alnoq you get</h2>
          <ul className="text-xl">
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Easily push data to Anoq
            </li>
            <li className="flex items-center mt-2" >
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Plug and play integration with your system
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Deploy on your servers or use our fully managed service
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Fully API Driven
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Integrations with wide range of systems
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Super intuitive querying capabilities
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-orange-1000 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              SDKs for all major languages & platforms
            </li>
          </ul>
        </div>
      </section>
      <footer className="text-center p-4">
      <small>&copy; Copyright 2023, ALNOQ</small>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ | Multi-Tenant Alerts, Notifications, and Querying for SaaS Platforms</title>
