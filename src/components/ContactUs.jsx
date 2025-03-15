import React from "react";
import background from "../../public/images/contact-us.png";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function ContactUs() {
    return (
        <div className='relative w-full h-screen'>
            <Image
                src={background}
                alt="Banner Image"
                fill
                className="object-fill xl:pb-0 pb-[120%]"
                priority
            />
            <div className='absolute left-5 xl:left-10 xl:top-[12%] top-6 flex items-center gap-4 xl:gap-10 w-full px-4'>
                <h1 className='text-base sm:text-lg xl:text-5xl font-bold'>CONTACT US</h1>
                <div className="relative flex-1 h-[2px] bg-gray-400 w-full">
                    <div className="absolute left-0 top-1/2 w-10 sm:w-14 xl:w-[140px] h-2 sm:h-3 xl:h-[14px] bg-black -translate-y-1/2"></div>
                </div>
            </div>
            <div className="absolute top-1/6 xl:top-[40%] left-5 xl:left-10 p-4 space-y-3 xl:p-6 xl:space-y-4 max-w-xs sm:max-w-md xl:bg-transparent xl:shadow-none">
                <div className="flex items-center space-x-2 xl:space-x-3 text-sm sm:text-lg xl:text-2xl text-black">
                    <FaPhone className="text-black text-xs xl:text-xl" />
                    <span>+123-456-7890</span>
                </div>
                <div className="flex items-center space-x-2 xl:space-x-3 text-sm sm:text-lg xl:text-2xl">
                    <FaEnvelope className="text-black text-base xl:text-xl" />
                    <span>diamondatelierusa@gmail.com</span>
                </div>
            </div>
            <div className="absolute bottom-[65%] xl:bottom-1/4 right-0 xl:right-8 p-1 xl:p-3 text-sm md:text-base xl:text-2xl font-medium text-center">
                <p>
                    You demand, <br /> we deliver.
                </p>
            </div>
        </div>
    );
}

export default ContactUs;
