import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../../Images/image-1.jpg";
import image2 from "../../../Images/image-2.jpg";
import image3 from "../../../Images/image-3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="bg-gradient-to-tr from-gray-400 to-gray-700 h-[35rem] w-full mx-auto relative z-0">
              <img
                src={image3}
                alt=""
                className="w-full  h-full object-cover absolute mix-blend-overlay"
              />
              <div className="p-24 ">
                <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
                  Enjoy The Travel with
                </h1>

                <h1 class="before:block before:absolute before:-inset-2 text-center before:-skew-y-2 mt-3 before:bg-[#C29D59] relative block text-3xl md:text-6xl font-bold w-[15rem] md:w-[37.5rem]  mx-auto">
                  <span class="relative text-white ">Trip to Paradise</span>
                </h1>
                <h2 className="text-white  text-lg font-normal text-justify mt-10 w-[15rem] md:w-[37.5rem] mx-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  dignissimos ex recusandae sed esse facere deleniti sapiente?
                  Quaerat, eveniet veniam.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-gradient-to-tr from-gray-400 to-gray-700 h-[35rem] w-full mx-auto relative z-0">
              <img
                src={image1}
                alt=""
                className="w-full  h-full object-cover absolute mix-blend-overlay"
              />
              <div className="p-24 ">
                <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
                  Life is Short and
                </h1>

                <h1 class="before:block before:absolute before:-inset-2 text-center before:-skew-y-2 mt-3 before:bg-[#C29D59] relative block text-2xl md:text-6xl font-bold w-[14rem] md:w-[37.5rem]  mx-auto">
                  <span class="relative text-white ">The World is Wide.</span>
                </h1>
                <h2 className="text-white  text-lg font-normal text-justify mt-10 w-[15rem] md:w-[37.5rem] mx-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  dignissimos ex recusandae sed esse facere deleniti sapiente?
                  Quaerat, eveniet veniam.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-gradient-to-tr from-gray-400 to-gray-700 h-[35rem] w-full mx-auto relative z-0">
              <img
                src={image2}
                alt=""
                className="w-full  h-full object-cover absolute mix-blend-overlay"
              />
              <div className="p-24 ">
                <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
                  Get Ready to Travel
                </h1>

                <h1 class="before:block before:absolute before:-inset-2 text-center before:-skew-y-2 mt-3 before:bg-[#C29D59] relative block text-3xl md:text-6xl font-bold w-[15rem] md:w-[37.5rem]  mx-auto">
                  <span class="relative text-white ">The World.</span>
                </h1>
                <h2 className="text-white  text-lg font-normal text-justify mt-10 w-[15rem] md:w-[37.5rem] mx-auto">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                  dignissimos ex recusandae sed esse facere deleniti sapiente?
                  Quaerat, eveniet veniam.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
