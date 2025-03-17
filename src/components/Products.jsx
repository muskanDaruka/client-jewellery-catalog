import React from 'react'
import bracelet from '../../public/images/bracelets-img.png'
import Image from 'next/image'

function Products() {
    const braceletList = Array(8).fill({ img: bracelet, alt: "bracelet" });

    return (
        <div className='bg-[#e1e1db] px-6 py-4 h-screen pt-5 font-montserrat'>
            <p className="xl:text-base text-xs font-medium text-right">DIAMOND ATELIER</p>
            <div className="flex justify-between items-center pb-2">
            <div className="flex items-center w-full">
                    <h1 className="xl:text-5xl font-semibold mr-4">PRODUCTS</h1>
                    <div className="flex-1 border-t border-gray-400"></div>
                </div>
            </div>
            <div className="grid grid-cols-4 xl:gap-4 gap-2 mt-8 xl:mt-10">
                {braceletList.map((item, index) => (
                    <div key={index} className="w-full">
                        <Image
                            className="w-full h-auto"
                            src={item.img}
                            alt={item.alt}
                            placeholder="blur"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
