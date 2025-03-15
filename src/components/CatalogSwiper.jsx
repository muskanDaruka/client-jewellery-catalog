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

const CatalogSwiper = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination ]}
        navigation
        pagination={{ clickable: true }}
        className="xl:w-[140vmin] h-[95vmin] aspect-square"
      >
        {[
          { component: <WelcomePage />, key: "welcome" },
          { component: <AboutUs />, key: "about" },
          { component: <Products />, key: "products" },
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
    </div>
  );
};

export default CatalogSwiper;