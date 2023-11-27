import Image from 'next/image';

import { slidesShop as slides } from '@/components/features/Slider/data/slides';
import { SwiperSlide } from 'swiper/react';

import s from './PrizeBlock.module.scss';

import bow from '@/assets/prize/bow.svg';
import redFrame from '@/assets/prize/redFrame.svg';
import redFrameVert from '@/assets/prize/redFrameVert.svg';
import whiteFrame from '@/assets/prize/whiteFrame.svg';
import whiteFrameVert from '@/assets/prize/whiteFrameVert.svg';
import PrizeWrapperContent from './PrizeWrapperContent';

import baloon from '@/assets/prize/vectors/baloon.svg';
import star from '@/assets/prize/vectors/star.svg';
import vector1 from '@/assets/prize/vectors/vector-1.svg';
import vector2 from '@/assets/prize/vectors/vector-2.svg';
import vector3 from '@/assets/prize/vectors/vector-3.svg';
import vector4 from '@/assets/prize/vectors/vector-4.svg';
import vector5 from '@/assets/prize/vectors/vector-5.svg';
import vector6 from '@/assets/prize/vectors/vector-6.svg';
import vector7 from '@/assets/prize/vectors/vector-7.svg';
import Button from '@/components/ui/Button';
import Slider from '@/components/features/Slider';

const PrizeBlock = () => (
  <>
    <div className={s.wrapper}>
      <Image src={bow} alt='bow' className={s.imageBow} />
      <div className={s.redFrame}>
        <img srcSet={redFrame.src + ' 768w, ' + redFrameVert.src + ' 1200w'} alt='redFrame' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className={s.imgRed} />
      </div>
      <div className={s.whiteFrame}>
        <img srcSet={whiteFrame.src + ' 768w, ' + whiteFrameVert.src + ' 1200w'} alt='whiteFrame' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className={s.imgWhite}/>
      </div>
      <h3 className={s.title}>призы</h3>
      <div className={s.wrapperContent}>
        <PrizeWrapperContent />
      </div>
    </div>
    <Image src={baloon} alt='baloon' className={s.baloon} />
    <Image src={star} alt='star' className={s.star} />
    <Image src={vector1} alt='vector1' className={s.vector1} />
    <Image src={vector2} alt='vector2' className={s.vector2} />
    <Image src={vector3} alt='vector3' className={s.vector3} />
    <Image src={vector4} alt='vector4' className={s.vector4} />
    <Image src={vector5} alt='vector5' className={s.vector5} />
    <Image src={vector6} alt='vector6' className={s.vector6} />
    <Image src={vector7} alt='vector7' className={s.vector7} />
    <h3 className={s.subtitle}>Где купить</h3>
    <div className={s.buttons}>
      <Button className={s.btnOffline}>Оффлайн</Button>
      <Button className={s.btnOnline}>Онлайн</Button>
    </div>
    <div className='relative px-[60px]'>
      <Slider classNames={{ slider: s.slider, buttonPrev: s.buttonPrev, buttonNext: s.buttonNext }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center mt-[30px] mb-[60px]'>
              <Image src={slide.image} alt='image' />
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  </>
);
export default PrizeBlock;
