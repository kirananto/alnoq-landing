import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FirstSection from "../sections/AboutUs/FirstSection"
import FirstSectionContactUs from "../sections/ContactUs/FirstSectionContactUs"
import { Widget } from "@typeform/embed-react"
import SecondSectionContactUs from "../sections/ContactUs/SecondSectionContactUs"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const ContactUs: React.FC<PageProps> = () => {
  return (<>
    <main className="text-gray-700 dark:text-emerald-50 bg-emerald-50 dark:bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <FirstSectionContactUs />
      <Widget id="PZ5PJESu" style={{ fontSize: 20 }} className="h-[40rem]">
        click to open form in popup
      </Widget>
      <SecondSectionContactUs />
      <Footer />
    </main>
  </>
  )
}

export default ContactUs

export const Head: HeadFC = () => <title>Contact Us | ALNOQ </title>
