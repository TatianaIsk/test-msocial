import Image from 'next/image';

import Banner from '@/components/features/Banner';
import Button from '@/components/ui/Button';
import OptionsMenu from '../OptionsMenu';
import Slider from '../../../../components/features/Slider';
import PrizeBlock from '../PrizeBlock';

import s from './PageContent.module.scss';

import baloon from '@/assets/vectors/baloon.svg';
import vectorBrown from '@/assets/vectors/vector-brown.svg';
import vectorWhite from '@/assets/vectors/vector-white.svg';

const PageContent = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Banner />
        <Button className={s.button}>Загрузить чек</Button>
        <h3 className={s.title}>Нам 40 лет — вам подарки</h3>
        <div className='flex justify-center'>
          <Image src={baloon} alt='baloon' className={s.vertorBaloon} />
          <Image src={vectorWhite} alt='vectorWhite' className={s.vectorWhite} />
          <OptionsMenu />
          <Image src={vectorBrown} alt='vectorBrown' className={s.vectorBrown} />
        </div>
      </div>
      <div className={s.sliderBlock}>
        <h4 className={s.subtitle}>в акции участвуют</h4>
      </div>
      <div className={s.slider}>
        <Slider />
      </div>
      <div className={s.prizeBlock}>
        <PrizeBlock />
      </div>
    </div>
  );
};

export default PageContent;
