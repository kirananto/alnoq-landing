import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "@emotion/styled"

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
  background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="text-yellow-50 antialiased" style={mainStyle}>
      <nav className="bg-yellow-200 sticky top-0">
        <div className="bg-gray-900 w-8 h-8"></div>
        {/* <span className="float-left">ALNOQ</span> */}
      </nav>
      <section className="min-h-screen md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-xl">
        <h1 className="text-4xl md:text-5xl text-yellow-50 lg:w-[35ch] mt-36 font-bold leading-tight">
          Now you can easily <StyledSpan className="text-yellow-200 font-bolder underline" id="purpose" /> <br />Across All Your SaaS Tenants
          <br />
        </h1>
      </section>
      <section className="min-h-screen md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-6xl">
        <h2 className="text-3xl md:text-4xl">You Generate tons of operational data, but how do you expose them to your customers and put them to use?</h2>
      </section>
      <section className="min-h-screen md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-6xl">
        <h2 className="text-3xl md:text-4xl">Leave the Heavy Lifting to Us 💪 <br />Let Your Team Focus on Business Logic </h2>
        <div className="text-3xl mt-6 text-yellow-50 font-bold"> Meet <span className="text-yellow-200 tracking-widest">ALNOQ</span> 👋</div>

      </section>
      <section className="min-h-screen md:min-h-50 py-32 md:py-64 pl-8 sm:pl-32 md:pl-32 lg:pl-64 max-w-6xl">
        <div>
          <h2 className="text-4xl mb-8">With Alnoq you get</h2>
          <ul className="text-xl">
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Easily push data to Anoq
            </li>
            <li className="flex items-center mt-2" >
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Plug and play integration with your system
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Deploy on your servers or use our fully managed service
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Fully API Driven
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Integrations with wide range of systems
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Super intuitive querying capabilities
            </li>
            <li className="flex items-center mt-2">
              <svg className="w-6 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              SDKs for all major languages & platforms
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ | Multi-Tenant Alerts, Notifications, and Querying for SaaS Platforms</title>
