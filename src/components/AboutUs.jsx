import React from 'react';
import background from '../../public/images/about-us_bg.png';
import Image from 'next/image';

function AboutUs() {
    return (
        <div className='relative w-full h-screen'>
            <Image
                src={background}
                alt="Banner Image"
                fill
                className="object-fill"
                priority
            />
            <div className='absolute left-1/3 xl:top-[12%] mt-3 flex justify-between items-center gap-10 w-2/3'>
            <h1 className='xl:text-5xl text-sm font-bold '>ABOUT US</h1>
                <div className="relative flex-1 h-[3px] bg-gray-400 ml-4">
                    <div className="absolute left-0 top-1/2 xl:w-[140px] w-14 h-3 xl:h-[14px] bg-black -translate-y-1/2"></div>
                </div>
            </div>
            <div className='absolute xl:top-[20%] mt-8 left-1/3 xl:right-10'>
                <p className='font-normal xl:text-xl text-xs xl:pb-2 pb-1'>
                    We are the grower and manufacturer of lab grown diamonds since 2019, situated in Surat, Gujarat, India. Our monthly manufacturing capacity exceeds 20,000 carats, spanning a range from 0.01 to 20 carats. Our artistic workshop encompasses the entire process of rough to polished diamonds. We have expertise in layouts, side stones pairs and colored stones which positions us as a large scale reputable supplier in the USA.
                </p>
                <p className='font-normal xl:text-xl text-xs xl:pb-2 pb-1'>
                    Competitive Pricing: Our diamonds are priced competitively, creating favorable opportunities for future business growth.
                </p>
                <p className='font-normal xl:text-xl text-xs xl:pb-2 pb-1'>
                    Ready-to-Sell Inventory: We maintain a largescale, readily available inventory at our New York sales house to meet global demands efficiently.
                </p>
                <p className='font-normal xl:text-xl text-xs xl:pb-2 pb-1'>
                    Large Carat Stone Available: Our stock includes diamonds ranging from 5 to 12 carats, available in both Round and Fancy shapes, providing diverse options for the customers.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
