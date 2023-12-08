'use client';

import { slidesCheese as slides } from '@/components/features/Slider/data/slides';
import { SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import Banner from '@/components/features/Banner';
import Button from '@/components/ui/Button';
import OptionsMenu from '../OptionsMenu';
import Slider from '@/components/features/Slider';
import PrizeBlock from '../PrizeBlock';
import Footer from '@/components/features/Footer';

import baloon from '@/assets/vectors/baloon.svg';
import vectorBrown from '@/assets/vectors/vector-brown.svg';
import vectorWhite from '@/assets/vectors/vector-white.svg';

import s from './PageContent.module.scss';

const PageContent = () => (
  <div className={s.container}>
    <div className={s.wrapper}>
      <Banner />
      <Button className={s.button}>загрузить чек</Button>
      <h3 className={s.title}>Нам 40 лет — вам подарки</h3>
      <div className='flex justify-center flex-row sm:flex-col'>
        <Image src={baloon} alt='' className={s.vertorBaloon} />
        <Image src={vectorWhite} alt='' className={s.vectorWhite} />
        <OptionsMenu />
        <Image src={vectorBrown} alt='' className={s.vectorBrown} />
      </div>
    </div>
    <div className={s.sliderBlock}>
      <h4 className={s.subtitle}>в акции участвуют</h4>
    </div>
    <div className={s.slider}>
      <Slider>
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className='flex flex-col items-center'>
              <Image src={slide.image} alt='image' />
              <p className={s.text}>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
    <div className={s.prizeBlock}>
      <PrizeBlock />
    </div>
    <Footer />
  </div>
);

export default PageContent;
