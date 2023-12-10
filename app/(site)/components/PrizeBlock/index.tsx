import Image from 'next/image';

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
import WhereBuy from '../WhereBuy';

const PrizeBlock = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Image src={bow} alt='bow' className={s.imageBow} />
          <div className={s.redFrame}>{isMobile ? <Image src={redFrameVert} alt='' className={s.imgRed} /> : <Image src={redFrame} alt='' />}</div>
          <div className={s.whiteFrame}>{isMobile ? <Image src={whiteFrameVert} alt='' className={s.imgWhite} /> : <Image src={whiteFrame} alt='' />}</div>
          <h3 className={s.title}>призы</h3>
          <div className={s.wrapperContent}>
            <PrizeWrapperContent />
          </div>
        </div>
      </div>
      <Image src={baloon} alt='' className={s.baloon} />
      <Image src={star} alt='' className={s.star} />
      <Image src={vector1} alt='' className={s.vector1} />
      <Image src={vector2} alt='' className={s.vector2} />
      <Image src={vector3} alt='' className={s.vector3} />
      <Image src={vector4} alt='' className={s.vector4} />
      <Image src={vector5} alt='' className={s.vector5} />
      <Image src={vector6} alt='' className={s.vector6} />
      <Image src={vector7} alt='' className={s.vector7} />
      <WhereBuy />
    </>
  );
};
export default PrizeBlock;
