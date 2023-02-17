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

export default function AdvisorsSection() {
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
            name: 'Shiv Sundar',
            title: 'COO - Esper.io',
            linkedIn: 'https://www.linkedin.com/in/sundarashiv',
            image: data.allFile.edges?.find((edge: any) => edge.node.name === 'shiv').node.childImageSharp,
            description: `15+ years in GTM strategies to grow revenue and global market share.  
        GTM scaling, revenue from 0 to 10 million$
        GTM strategy for restaurant, retail, healthcare, connected fitness and payment (POS) vertical
        `
        }
    ]

    console.log('data', data.allFile.edges)

    return (
        <section className="text-emerald-100 body-font bg-emerald-800">
            <div className="container px-5 py-24 mx-auto">

                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl font-bold title-font mb-4 text-emerald-50">#Advisors</h1>
                       </div>

                </div>
                <div className="flex flex-wrap m-4 place-content-center">
                    {teamMembers.map((teamMember) => {
                        const image = teamMember.image.gatsbyImageData
                        console.log('image', image)
                        return (
                            <div className="p-8 lg:w-1/3 sm:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <ImageComp className="flex-shrink-0 object-cover overflow-hidden rounded-full h-56 w-56 border-8 border-emerald-600 mb-8" image={image!} alt={teamMember.title} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-emerald-50 dark:text-emerald-50">{teamMember.title}</h2>
                                        <h3 className="dark:text-gray-300 text-gray-300 mb-3">{teamMember.name}</h3>
                                        <p className="mb-4 text-emerald-100 dark:text-emerald-100">{teamMember.description}.</p>
                                        <span className="inline-flex">
                                            <OutboundLink href={teamMember.linkedIn} className="ml-2 text-gray-300 ">
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