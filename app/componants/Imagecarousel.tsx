'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const clientImages = [
  '/assets/img/clients/client-1.png',
  '/assets/img/clients/client-2.png',
  '/assets/img/clients/client-3.png',
  '/assets/img/clients/client-4.png',
  '/assets/img/clients/client-5.png',
  '/assets/img/clients/client-6.png',
  '/assets/img/clients/client-7.png',
  '/assets/img/clients/client-8.png',
];
const ImageAnimation = () => {
  return (
    <div className="my-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={600}
        autoplay={{ delay: 5000 }}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        }}
        className="swiper-container"
      >
        {clientImages.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={src} className="img-fluid" alt={`Client ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageAnimation;

