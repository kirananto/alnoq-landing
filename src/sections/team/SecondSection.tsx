import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const ImageComp = styled(GatsbyImage)`
    img {
        border-radius: 50%;
    }
`

export default function SecondSection() {
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
            linkedIn: 'https://www.linkedin.com/in/yaser-hameed/',
            description: `With over 15 years of industry experience, Yaser is a visionary leader in the field of technology. His expertise lies in distributed systems and data platforms, and he has a rich background of work at companies such as Bosch R&D, Dexetra, Quixey, Paytm, and Esper.`
        },
        {
            name: 'Nithin John',
            title: 'CPO, Co-Founder',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'nithin').node.childImageSharp,
            linkedIn: 'https://www.linkedin.com/in/nithinjohn/',
            description: `With over 15 years of experience in Android, iOS, and product management, Nithin is a seasoned professional in the tech industry. His focus areas include mobile product management and platforms, and he has previously worked at Poornam, Dexetra, Quixey, Daily Rounds, LookUp, Paytm, and Esper.`
        },
        {
            name: 'Eby Chembola',
            title: 'CTO, Co-Founder',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'eby').node.childImageSharp,
            linkedIn: 'https://www.linkedin.com/in/ebyed/',
            description: `Eby brings over 15 years of experience in MainFrames and Cloud Infrastructure to the table. With a focus on cloud operations and SRE, Eby has a track record of success from his previous roles at Wipro, Dexetra, Quixey, LookUp, NowFloats, Paytm, and Esper.`
        }
    ]

    console.log('data', data.allFile.edges)

    return (
        <section className="text-emerald-100 body-font">
            <div className="container px-5 py-24 mx-auto">

                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl font-bold title-font mb-4 text-emerald-50">#Meet Our Leadership Team</h1>
                       </div>

                </div>
                <div className="flex flex-wrap m-4">
                    {teamMembers.map((teamMember) => {
                        const image = teamMember.image.gatsbyImageData
                        console.log('image', image)
                        return (
                            <div className="p-8 lg:w-1/3 sm:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <ImageComp className="flex-shrink-0 object-cover overflow-hidden rounded-full h-56 w-56 border-8 border-emerald-600 mb-8" image={image!} alt={teamMember.title} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-emerald-50">{teamMember.title}</h2>
                                        <h3 className="text-gray-500 mb-3">{teamMember.name}</h3>
                                        <p className="mb-4">{teamMember.description}.</p>
                                        <span className="inline-flex">
                                            <OutboundLink href={teamMember.linkedIn} className="ml-2 text-gray-500">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                                </svg>
                                            </OutboundLink>
                                        </span>
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