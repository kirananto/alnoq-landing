import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FirstSection from "../sections/team/FirstSection"
import FirstSectionContactUs from "../sections/ContactUs/FirstSectionContactUs"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const ContactUs: React.FC<PageProps> = () => {
  return (<>
    <main className="text-emerald-50 bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <FirstSectionContactUs />
      <Footer />
    </main>
  </>
  )
}

export default ContactUs

export const Head: HeadFC = () => <title>Contact Us | ALNOQ </title>
