import React from 'react'
import Image from 'next/image'
import background from '../../public/images/product-bg.png'
import bracelet from '../../public/images/bracelet.jpg'

function Product() {
    const braceletList = [
        { id: 1, img: bracelet, alt: "bracelet" },
        { id: 2, img: bracelet, alt: "bracelet" },
        { id: 3, img: bracelet, alt: "bracelet" },
        { id: 4, img: bracelet, alt: "bracelet" },
        { id: 5, img: bracelet, alt: "bracelet" },
        { id: 6, img: bracelet, alt: "bracelet" },
        { id: 7, img: bracelet, alt: "bracelet" },
        { id: 8, img: bracelet, alt: "bracelet" },
    ]

    return (
        <div className="relative w-full min-h-screen bg-gray-100">
            <Image
                src={background}
                alt="Banner Image"
                fill
                className="object-cover opacity-30"
                priority
            />
             <div className="absolute inset-0 p-8">
                <div className="flex justify-between items-center hidden lg:block">
                    <div className='absolute top-1/8 left-10'>
                        <h1 className='text-5xl'>Products</h1>
                    </div>
                    <span className="absolute top-24 right-10 text-lg font-light">DIAMOND ATELIER</span>
                </div>
                <div className="flex items-center sm:items-start sm:flex-row justify-between lg:hidden">
                    <h1 className="text-3xl sm:text-5xl font-semibold">Products</h1>
                    <span className="text-sm sm:text-lg font-light mt-2 sm:mt-0">DIAMOND ATELIER</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 xl:mt-36">
                    {braceletList.map((item) => (
                        <div key={item.id} className="w-full">
                            <Image
                                className="w-full h-auto rounded-lg shadow-md"
                                src={item.img}
                                alt={item.alt}
                                placeholder="blur"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product
