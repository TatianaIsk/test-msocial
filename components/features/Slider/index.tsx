'use client';
import { useRef, PropsWithChildren } from 'react';

import { Swiper } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import s from './Slider.module.scss';

import SliderButtons from './SliderButtons';
import clsx from 'clsx';

interface SliderProps extends PropsWithChildren {
  classNames?: {
    buttonPrev?: string;
    buttonNext?: string;
    slider?: string;
  };
}

const Slider: React.FC<SliderProps> = ({ children, classNames }) => {
  const slideRef = useRef<SwiperType>();

  const handlePrev = () => slideRef.current?.slidePrev();
  const handleNext = () => slideRef.current?.slideNext();

  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        loop
        pagination={{
          clickable: true,
          bulletClass: s.swiperBullet,
          bulletActiveClass: s.swiperBulletActive,
        }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          770: {
            slidesPerView: 4,
          },
          350: {
            slidesPerView: 1,
          }
        }}
        onSwiper={swiper => console.log(swiper)}
        onBeforeInit={(swiper: SwiperType) => {
          slideRef.current = swiper;
        }}
        className={clsx(s.slider, classNames?.slider)}
      >
        {children}
      </Swiper>
      <SliderButtons buttonPrev={classNames?.buttonPrev} buttonNext={classNames?.buttonNext} onPrevClick={handlePrev} onNextClick={handleNext} />
    </div>
  );
};

export default Slider;
