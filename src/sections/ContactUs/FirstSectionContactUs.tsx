import React from 'react'


export default function FirstSectionContactUs() {
    return (
        <section className="text-emerald-50 bg-emerald-800 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-bold title-font mb-8 text-emerald-50">#Contact us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        At Alnoq, we value the feedback and inquiries of our users. Our team is here to help with any questions or concerns you may have.

                        <br />
                        <br />
                        Please use the form below to reach out to us, and we will get back to you as soon as possible.
                        <br />
                        <br />
                        <div>
                        For business inquiries, please email us at sales@alnoq.com.
                        <br />
                        For technical support, please email us at contact@alnoq.com.
                        </div>

                        Thank you for choosing Alnoq.
                    </p>
                </div>

            </div>
        </section>
    )
}