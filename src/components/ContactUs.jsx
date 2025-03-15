import React from 'react';
import background from '../../public/images/contact-us.png';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactUs() {
    return (
        <div className='relative h-screen w-full'>
            <Image
                src={background}
                alt="Banner Image"
                fill
                className="object-fill"
                priority
            />
            <h1 className='absolute top-[20%] text-6xl left-10'>
                CONTACT US
            </h1>
            <div className="absolute top-1/2 left-10 p-6 space-y-4">
                <div className="flex items-center space-x-3 text-2xl text-gray-900">
                    <FaPhone className="text-black" />
                    <span>+123-456-7890</span>
                </div>
                <div className="flex items-center space-x-3 text-2xl">
                    <FaEnvelope className="text-black" />
                    <span>diamondatelierusa@gmail.com</span>
                </div>
            </div>
            <div className="absolute bottom-1/3 right-4 p-4 text-4xl font-medium text-right">
                <p>You demand, <br /> we deliver.</p>
            </div>
        </div>
    );
}

export default ContactUs;
