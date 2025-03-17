"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import WelcomePage from "@/components/WelcomePage";
import Products from "@/components/Products";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import Bracelet from "./Bracelet";
import BraceletDisplay from "./BraceletDisplay";

const CatalogSwiper = () => {
  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="xl:w-[140vmin] h-[95vmin] aspect-square"
      >
        {[
          { component: <WelcomePage />, key: "welcome" },
          { component: <AboutUs />, key: "about" },
          { component: <Products />, key: "products" },
          { component: <Bracelet />, key: "bracelet" },
          { component: <BraceletDisplay />, key: "bracelet-display" },
          { component: <ContactUs />, key: "contact" },
        ].map(({ component, key }) => (
          <SwiperSlide
            key={key}
            className="flex items-center justify-center bg-white rounded-lg shadow-lg w-full h-full"
          >
            {component}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Apply Tailwind Styles to Swiper Buttons */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            width: 32px !important;
            height: 32px !important;
            // background-color: rgba(248, 248, 248, 0.6) !important;
            border-radius: 50% !important;
          }
          
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 16px !important; /* Reduce the arrow size */
            color: black !important;
          }
        `}
      </style>
    </div>
  );
};

export default CatalogSwiper;
