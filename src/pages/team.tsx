import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
const mainStyle = {
  // background: '#18181b',
  fontFamily: 'Space Grotesk,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
}

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <main className="text-emerald-50 bg-[#0a100e] antialiased" style={mainStyle}>
      <NavBar />
      <section className="text-emerald-100 min-h-screen body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-8">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-emerald-50 mb-4">Team 👨‍👩‍👦</h1>
            <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-50">In contruction.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ALNOQ Team </title>
