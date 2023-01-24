import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroSection from "../sections/home/HeroSection"
import NavBar from "../components/NavBar"
import TilesSection from "../sections/home/TilesSection"
import Footer from "../components/Footer"
import TilesSectionFeatures from "../sections/home/TilesSectionFeatures"
import WhyAlnoq from "../sections/home/WhyAlnoq"
// import styled from "@emotion/styled"
// import { StaticImage } from "gatsby-plugin-image"

// const StyledSpan = styled.span`
//   :after {
//     content:"Monitor";
//     animation: purpose 6s linear infinite;
//   }
//   @keyframes purpose {
//     0% { content:"Monitor"; }
//     33% { content:"Notify"; }
//     66% { content: "Query"; }
//   }
// `
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
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">ALNOQ requires no infrastructure setup or data teams, and supports multi-tenancy from Day - 1, which means you no longer worry about how you build analytics features for your customer.</p>
          </div>
        </div>
      </section>
      <TilesSection />

      <section className="text-emerald-100 bg-emerald-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-emerald-50 mb-4">As a modern SaaS enterprise, you either try to build it or ignore such capabilities. <br/> But not anymore. </h1>
          </div>
        </div>
      </section>
      <TilesSectionFeatures />
      <WhyAlnoq />
      <Footer />
    </main>
  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ | Expose realtime analytics capabilities on your data to your customers</title>
