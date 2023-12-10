import Image from 'next/image';

import { SwiperSlide } from 'swiper/react';
import { slidesShop as slides } from '@/components/features/Slider/data/slides';

import Slider from '@/components/features/Slider';
import Button from '@/components/ui/Button';

import s from './WhereBuy.module.scss'
import Footer from '@/components/features/Footer';

const WhereBuy = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.subtitle}>Где купить</h3>
      <div className={s.buttons}>
        <Button className={s.btnOffline}>Оффлайн</Button>
        <Button className={s.btnOnline}>Онлайн</Button>
      </div>
      <div className={s.wrapperSlider}>
        <Slider classNames={{ slider: s.slider, buttonPrev: s.buttonPrev, buttonNext: s.buttonNext }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center mt-[30px] mb-[60px]'>
                <Image src={slide.image} alt='' />
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <Footer/>
    </div>
  );
};

export default WhereBuy;
