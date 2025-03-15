import React from 'react'
import Image from 'next/image'
import background from '../../public/images/background-catalog.png'

function WelcomePage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Image
        src={background}
        alt="Banner Image"
        fill
        className="object-fill"
        priority
      />
      <div className="absolute top-6 right-6 text-xl font-normal">
        Lab Grown Diamonds
      </div>
      <div className="absolute xl:right-32 flex justify-center items-center mb-10 xl:text-5xl text-xl font-medium">
        DIAMOND ATELIER
      </div>
      <div className="absolute bottom-24 left-10 text-xl font-normal">
        Wholesale Catalogue 2025
      </div>
      <div className="absolute bottom-24 right-10 flex justify-center items-center px-4 py-2">
        <span className="xl:text-5xl text-xl font-normal">BRACELETS</span>
      </div>
    </div>
  )
}

export default WelcomePage
