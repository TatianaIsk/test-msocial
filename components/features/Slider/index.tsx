'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageVariants } from '@/components/ui/Image';

import SliderSlide from './SliderSlide';

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
];

const Slider = () => (
  <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={swiper => console.log(swiper)}>
    {slides.map(slide => (
      <SliderSlide key={slide.image} {...slide} />
    ))}
  </Swiper>
);

export default Slider;
