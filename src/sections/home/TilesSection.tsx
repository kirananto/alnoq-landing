import { title } from 'process'
import React from 'react'

const tiles = [
    {
        title: 'Push Data from anywhere',
        description: 'Ready to use SDKs for all major platforms - Web, Java, Python, Go, Android, iOS.',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>)
    },
    {
        title: 'Scale without fail.',
        description: 'Our infrastructure can scale as you grow. With multi tenant capabilities inbuilt, you don’t worry about the dynamics of how each of your customer consumes analytics capabilities of your platform.',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
        )
    },
    {
        title: 'Deploys anywhere',
        description: 'Alnoq is available fully managed or can deploy into any cloud provider of your choice or on-prem - Azure, GCP, AWS. ',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
        )
    },
    {
        title: 'Fully API driven.',
        description: 'APIs for every use case - discovery, querying, aggregates, alerting and notifications that your customers can consume.',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
        </svg>
        )
    },
    {
        title: 'Zero complexity',
        description: 'Your platform has analytics capabilities exposed to your customers within minutes the data hits our systems. Your Customers can integrate our APIs into their engineering workflows. ',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
        </svg>
        )
    },
    {
        title: 'Built In Alerts Engine.',
        description: 'Enable your customers to configure alerts on all and any aggregates on your data, and deliver them to any of their configured channels - Web hooks, Kafka, Slack, Email, PagerDuty - All with our APIs. ',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        </svg>
        )
    }
]
export default function TilesSection() {
    return (
        <section className="text-emerald-100 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-4">
                    {tiles.map(tile => (
                        <div className="z-1 p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-50 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 p-2 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 bg-opacity-20 text-emerald-600 flex-shrink-0">
                                        {tile.icon}
                                    </div>
                                    <h2 className="text-emerald-500 text-lg title-font font-bold">{tile.title}</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">{tile.description}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
