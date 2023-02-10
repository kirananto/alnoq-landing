import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FirstSection from "../sections/team/FirstSection"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <main className="text-emerald-50 bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <FirstSection />
      <Footer />
    </main>
  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ Team </title>
