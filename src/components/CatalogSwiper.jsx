"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import WelcomePage from "@/components/WelcomePage";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import { useEffect, useState, useRef } from "react";
import { Pause, Play } from "lucide-react"; // Import play/pause icons
import Products from "@/components/Products";

const CatalogSwiper = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");

    if (prevButton && nextButton) {
      prevButton.classList.add("text-black", "scale-50");
      nextButton.classList.add("text-black", "scale-50");
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      const updateProgress = () => {
        const currentSlide = swiper.realIndex + 1;
        const totalSlides = swiper.slides.length;
        setProgress((currentSlide / totalSlides) * 100);
      };

      swiper.on("slideChange", updateProgress);
      return () => swiper.off("slideChange", updateProgress);
    }
  }, []);

  const togglePlayPause = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        // autoplay={isPlaying ? { delay: 3000, disableOnInteraction: false } : false}
        className="xl:w-[140vmin] h-[95vmin] aspect-square"
      >
        {[
          { component: <WelcomePage />, key: "welcome" },
          { component: <AboutUs />, key: "about" },
          { component: <Products />, key: "product" },
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

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 py-2 flex items-center justify-between px-4">
        {/* Play/Pause Button */}
        <button onClick={togglePlayPause} className="text-white">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        {/* Progress Bar */}
        <div className="flex-grow mx-4">
          <div className="relative w-full h-2 bg-gray-700 rounded">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSwiper;
