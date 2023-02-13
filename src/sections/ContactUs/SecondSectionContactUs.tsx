import React from 'react'


export default function SecondSectionContactUs() {
    return (
        <section className="text-emerald-50 bg-emerald-800 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full">
                    {/* <h1 className="text-3xl font-bold title-font mb-8 text-emerald-50">#Contact us</h1> */}
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl flex flex-wrap">
                        <div className='w-full sm:w-1/2'>
                        For business inquiries
                        <br />
                        please email us at sales@alnoq.com.
                        <br />
                        </div>
                        <div className='w-full sm:w-1/2 mt-8 sm:mt-0'>
                        For technical support
                        <br />
                        please email us at contact@alnoq.com.
                        </div>
                    </p>
                </div>

            </div>
        </section>
    )
}