import React from 'react'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import background from '../../public/images/background-catalog.png'

function WelcomePage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={background}
        alt="Banner Image"
        fill
        className="object-cover xl:pb-0 pb-24"
        priority
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0" />

      {/* Text Elements */}
      <div className="absolute top-6 right-6 text-sm xl:text-xl font-normal text-black">
        Lab Grown Diamonds
      </div>
      <div className="absolute xl:right-32 right-18 top-0 top-1/3 flex justify-center items-center mb-10 xl:text-5xl text-base font-bold text-black">
        DIAMOND ATELIER
      </div>
      <div className="absolute xl:bottom-24 xl:left-10 xl:text-xl text-xs left-1 bottom-1/4 font-normal text-black">
        Wholesale Catalogue 2025
      </div>

      {/* Bracelets Section */}
      <div className="absolute xl:bottom-1/7 bottom-1/4 right-1 xl:right-10 flex items-center xl:px-6 py-4">
        {/* <ChevronLeft className="w-5 h-5 mr-3 text-black" /> */}
        <span className="xl:text-4xl text-xs font-normal text-black">
          BRACELETS
        </span>
      </div>
    </div>
  )
}

export default WelcomePage
