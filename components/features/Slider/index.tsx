'use client';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { ImageVariants } from '@/components/ui/Image';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import s from './Slider.module.scss';

import SliderSlide from './SliderSlide';
import SliderButtons from './SliderButtons';

export type SlideType = {
  image: ImageVariants;
  text: string;
};

const slides: SlideType[] = [
  {
    image: 'cheese1',
    text: 'Лёгкий, брусок 180 г',
  },
  {
    image: 'cheese2',
    text: 'Лёгкий, слайсы 120, 225 г',
  },
  {
    image: 'cheese3',
    text: 'Сливочный, брусок 200, 300 г',
  },
  {
    image: 'cheese4',
    text: 'Сливочный, слайсы 130, 250 г',
  },
  {
    image: 'cheese3',
    text: 'Сливочный, брусок 200, 300 г',
  },
];

const Slider = () => {
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
          <SwiperSlide key={slide.image} className={s.slide}>
            <SliderSlide key={slide.image} {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons onPrevClick={handlePrev} onNextClick={handleNext} />
    </div>
  );
};

export default Slider;
