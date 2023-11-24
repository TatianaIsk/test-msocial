'use client';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { SlideType } from './types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import s from './Slider.module.scss';

import SliderButtons from './SliderButtons';
import Image from 'next/image';

const Slider = ({ slides }: { slides: SlideType[] }) => {
  const slideRef = useRef<SwiperType>();

  const handlePrev = () => slideRef.current?.slidePrev();
  const handleNext = () => slideRef.current?.slideNext();

  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={4}
        loop
        pagination={{ clickable: true, bulletClass: `${s.swiperBullet}`, bulletActiveClass: `${s.swiperBulletActive}` }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onBeforeInit={(swiper: SwiperType) => {
          slideRef.current = swiper;
        }}
        className={s.slider}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.image}>
            <div className='flex flex-col items-center'>
              <Image src={slide.image} alt='image' />
              <p className={s.text}>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons onPrevClick={handlePrev} onNextClick={handleNext} />
    </div>
  );
};

export default Slider;
