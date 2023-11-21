'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ImageVariants } from '@/components/ui/Image';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

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
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={4}
    slidesPerGroup={4}
    loop={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={swiper => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {slides.map(slide => (
      <SwiperSlide key={slide.image} className='items-center'>
        <SliderSlide key={slide.image} {...slide} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
