import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import background from '../../public/images/background-catalog.png'

function WelcomePage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-montserrat">
      <Image
        src={background}
        alt="Banner Image"
        fill
        className="object-fill xl:pb-0 pb-[120%]"
        priority
      />
      <div className="absolute inset-0" />
      <div className="absolute top-6 right-6 text-sm xl:text-xl font-normal text-black">
        Lab Grown Diamonds
      </div>
      <div className="absolute xl:right-32 right-14 top-0 top-1/5 flex justify-center items-center mb-10 xl:text-5xl text-base font-bold text-black">
        DIAMOND ATELIER
      </div>
      <div className="absolute xl:bottom-24 xl:left-10 xl:text-xl text-xs left-1 bottom-[60%] font-normal text-black">
        Wholesale Catalogue 2025
      </div>
      <div className="absolute xl:bottom-1/7 bottom-[60%] right-5 xl:right-10 flex items-center xl:px-6 py-4">
        <span className="xl:text-4xl text-xs font-normal text-black font-montserrat">
          BRACELETS
        </span>
      </div>
    </div>
  )
}

export default WelcomePage
