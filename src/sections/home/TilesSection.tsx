import React from 'react'

const tiles = [
    {
        title: 'Push Data from anywhere',
        description: 'Ready to use SDKs for all major platforms - Web, Java, Python, Go, Android, iOS.'
    },
    {
        title: 'Scale without fail.',
        description: 'Our infrastructure can scale as you grow. With multi tenant capabilities inbuilt, you don’t worry about the dynamics of how each of your customer consumes analytics capabilities of your platform.'
    },
    {
        title: 'Deploys anywhere',
        description: 'Alnoq is available fully managed or can deploy into any cloud provider of your choice or on-prem - Azure, GCP, AWS. '
    },
    {
        title: 'Fully API driven.',
        description: 'APIs for every use case - discovery, querying, aggregates, alerting and notifications that your customers can consume.'
    },
    {
        title: 'Zero complexity',
        description: 'Your platform has analytics capabilities exposed to your customers within minutes the data hits our systems. Your Customers can integrate our APIs into their engineering workflows. '
    },
    {
        title: 'Built In Alerts Engine.',
        description: 'Enable your customers to configure alerts on all and any aggregates on your data, and deliver them to any of their configured channels - Web hooks, Kafka, Slack, Email, PagerDuty - All with our APIs. '
    }
]
export default function TilesSection() {
    return (
        <section className="text-emerald-100 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-4">
                    {tiles.map(tile => (
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-50 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-emerald-500 bg-opacity-20 text-emerald-600 flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
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
