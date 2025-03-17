import React from 'react'
import bracelet from '../../public/images/bracelet.jpg'
import Image from 'next/image';
import Link from 'next/link';

function Bracelet() {
    const braceletList = [
        { id:'emerald', img: bracelet, alt: "Emerald Bracelet" },
        { id:'round-bazel', img: bracelet, alt: "Round Bazel Bracelet" },
        { id:'round-bracelet', img: bracelet, alt: "Round Bracelet" },
        { id:'emerald-bazel', img: bracelet, alt: "Emerald Bazel Bracelet" },
        { id:'round', img: bracelet, alt: "Emerald Bazel Bracelet" },
        { id:'bazel', img: bracelet, alt: "Round Bracelet" },
        { id:'bracelet', img: bracelet, alt: "Round Bazel Bracelet" },
        { id:'bazel-bracelet', img: bracelet, alt: "Emerald Bracelet" },
    ];
    return (
        <div className='bg-[#e1e1db] xl:px-6 xl:py-4 p-2 h-screen pt-5 font-montserrat'>
            <h4 className='xl:text-xl text-sm  font-normal text-center xl:p-5'>DIAMOND ATELIER</h4>
            <div
                className="grid grid-cols-4 xl:gap-6 gap-2 w-full relative pt-4"
            >
                {braceletList.map((item, index) => (
                    <div key={index} className="bg-[#faf7f1] p-2">
                        <div
                            className="gap-4 relative"
                        >
                            <Link href={`/jewells?category=${item.alt.toLowerCase()}`} passHref>
                                <Image
                                    className=" object-cover"
                                    src={item.img}
                                    alt={item.alt}
                                />
                            </Link>
                        </div>
                        <h1 className="text-center text-xs mt-2 font-medium cursor-pointer text-[#6d5a4e]">{item.alt}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bracelet