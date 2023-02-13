import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../sections/home/HeroSection"
import NavBar from "../components/NavBar"
import TilesSection from "../sections/home/TilesSection"
import Footer from "../components/Footer"
import TilesSectionFeatures from "../sections/home/TilesSectionFeatures"
import WhyAlnoq from "../sections/home/WhyAlnoq"
import { OutboundLink } from "gatsby-plugin-gtag"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <main className="text-emerald-50 bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <HeroSection />
      <section className="text-emerald-100 bg-emerald-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-8">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-emerald-50 mb-4">Multi Tenancy from Day 1 🏆</h1>
            <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-50">ALNOQ requires no infrastructure setup or data teams, and supports multi-tenancy from Day - 1, which means you no longer worry about how you build analytics features for your customer.</p>
          </div>
        </div>
      </section>
      <TilesSection />

      <section className="text-emerald-100 bg-emerald-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-8">
            <h1 className="sm:text-3xl text-2xl max-w-4xl mx-auto font-bold title-font text-emerald-50 mb-4">As a modern SaaS enterprise, you either try to build it or ignore such capabilities. But not anymore! </h1>
          </div>
        </div>
      </section>
      <TilesSectionFeatures />
      <WhyAlnoq />
      <section className="bg-emerald-900 bg-opacity-10 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row items-center mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-emerald-50 md:text-left text-center">If you're <span className="text-emerald-600 font-bold">excited</span>, Let's us get you upto speed <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block text-emerald-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            </h1>
            <OutboundLink href="https://9e9q886sx81.typeform.com/to/PZ5PJESu?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx" className="flex-shrink-0 text-white bg-emerald-700 border-0 py-2 px-8 focus:outline-none hover:bg-emerald-600 rounded text-lg mt-10 sm:mt-0" >Contact Us</OutboundLink>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ | Unleash Analytics</title>
