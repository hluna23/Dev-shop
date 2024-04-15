"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";

interface Props {
  images: string[];
  title: string;
  className: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#666",
            "--swiper-pagination-color": "#666",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

        {
          images.map( image => (
            
            <SwiperSlide key={ image }>
              <Image 
              width={1204}
              height={800}
              src={`/products/${image}`}
              alt={ title }
              className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >

{
          images.map( image => (
            
            <SwiperSlide key={ image }>
              <Image 
              width={300}
              height={300}
              src={`/products/${image}`}
              alt={ title }
              className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
        
      </Swiper>
      
    </div>
  );
};
