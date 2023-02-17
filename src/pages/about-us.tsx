import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FirstSection from "../sections/AboutUs/FirstSection"
import SecondSection from "../sections/AboutUs/SecondSection"
import AdvisorsSection from "../sections/AboutUs/AdvisorsSection"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <main className="text-gray-700 dark:text-emerald-50 bg-emerald-50 dark:bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <FirstSection />
      <SecondSection />
      <AdvisorsSection />
      <Footer />
    </main>
  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>About Us | ALNOQ </title>
