import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'


export default function FirstSection() {
    const data = useStaticQuery(graphql`query {
        allFile(filter: { relativePath: { regex: "/TeamPage/" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 220, tracedSVGOptions: { color: "#059669" }, aspectRatio: 1, transformOptions: { cropFocus: NORTH, duotone: { highlight: "#059669", shadow: "#262626", opacity: 10 } })
              }
              name
            }
          }
        }
      }`)


    const teamMembers = [
        {
            name: 'Yaser Hameed',
            title: 'CEO, Founder',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'yaser').node.childImageSharp,
            description: `15+ years of industry experience, 
        Focus Areas - Distributed Systems and Data Platforms
        Previously @
        Bosch R&D, Dextera Quixey, Paytm, Esper`
        },
        {
            name: 'Nithin John',
            title: 'CPO, Co-Founder',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'nithin').node.childImageSharp,
            description: `15+ years of Android, iOs & product management, 
        Focus Areas - Mobile product management and platforms
        Previously @
        Poornam, Dexetra, Quixey
        Daily Rounds &
        LookUp, Paytm, Esper
        `
        },
        {
            name: 'Eby Chembola',
            title: 'CTO, Co-Founder',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'eby').node.childImageSharp,
            description: `15+ years in MainFrames and Cloud Infrastructure, 
        Focus Areas - Cloud Operations and SRE
        Previously @
        Wipro, Dexetra, Quixey, LookUp & NowFloats, Paytm, Esper
        `
         }
//         {
//             name: 'Shiv Sundar',
//             title: 'CRO (Virtual)',
//             image: data.allFile.edges?.find((edge: any) => edge.node.name === 'shiv').node.childImageSharp,
//             description: `15+ years in GTM strategies to grow revenue and global market share.  
//         GTM scaling, revenue from 0 to 10 million$
//         GTM strategy for restaurant, retail, healthcare, connected fitness and payment (POS) vertical
//         `
//         }

    ]

    console.log('data', data.allFile.edges)

    return (
        <section className="min-h-screen text-emerald-100 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-bold title-font mb-4 text-emerald-50">OUR TEAM 👨‍👩‍👦</h1>
                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                </div>
                <div className="flex flex-wrap m-4">
                    {teamMembers.map((teamMember) => {
                        const image = teamMember.image.gatsbyImageData
                        console.log('image', image)
                        return (
                            <div className="p-8 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <GatsbyImage className="flex-shrink-0 rounded-full h-56 w-56 border-8 border-emerald-600 mb-8" image={image!} alt={teamMember.title} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-emerald-50">{teamMember.title}</h2>
                                        <h3 className="text-gray-500 mb-3">{teamMember.name}</h3>
                                        <p className="mb-4">{teamMember.description}.</p>
                                        {/* <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
