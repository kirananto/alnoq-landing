import React from 'react'

export default function HeroSection() {
  return (
    <section className=" md:min-h-screen py-2 pb-32 md:py-48 px-8 sm:px-32 lg:px-64 max-full grid content-center">
      <h1 className="text-4xl md:text-5xl text-emerald-50  max-w-2xl font-bold leading-normal">
        Expose <span className="text-emerald-600">realtime analytics </span>capabilities on your data to your customers
      </h1>
      <p className="max-w-2xl mt-4">
        A complete plug and play solution enabling SaaS enterprises to expose
        business and operational metrics, querying and alerting
        capabilities back to your customers.
      </p>
    </section>
  )
}
