import React from 'react'
import background from '../../public/images/about-us_bg.png'
import Image from 'next/image'

function AboutUs() {
    return (
        <div className='relative w-full h-screen '>
            <Image
                src={background}
                alt="Banner Image"
                fill
                className="object-fill"
                priority
            />
            <div className='absolute left-1/3 top-[16%]'>
                <h1 className='xl:text-7xl font-medium'>About Us</h1>
            </div>
            <div className='absolute  top-[28%] left-3/9 right-10'>
                <p className='font-normal xl:text-xl'>
                    We are the grower and manufacturer of lab grown diamonds since 2019, situated in Surat, Gujarat, India. Our monthly manufacturing capacity exceeds 20,000 carats, spanning a range from 0.01 to 20 carats. Our artistic workshop encompasses the entire process of rough to polished diamonds. We have expertise in layouts, side stones pairs and colored stones which positions us as a large scale reputable supplier in the USA.
                </p>
                <br/>
                <p className='font-normal xl:text-xl md:t'>
                    Competitive Pricing: Our diamonds are priced competitively, creating favorable opportunities for future business growth.
                </p>
                <br/>
                <p className='font-normal xl:text-xl'>
                    Ready-to-Sell Inventory: We maintain a largescale, readily available inventory at our New York sales house to meet global demands efficiently.
                </p>
                <br/>
                <p className='font-normal xl:text-xl'>
                    Large Carat Stone Available : Our stock includes diamonds ranging from 5 to 12 carats, available in both Round and Fancy shapes, providing diverse options for the customers.
                </p>
            </div>
        </div>
    )
}

export default AboutUs