"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import WelcomePage from "@/components/WelcomePage";
import Product from "@/components/Product";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";

const CatalogSwiper = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="xl:w-[140vmin] h-[95vmin] aspect-square"
      >
        {[
          { component: <WelcomePage />, key: "welcome" },
          { component: <AboutUs />, key: "about" },
          { component: <Product />, key: "product" },
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
