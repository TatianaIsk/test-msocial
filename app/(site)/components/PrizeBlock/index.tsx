import clsx from 'clsx';
import Image from 'next/image';

import s from './PrizeBlock.module.scss';

import bow from '@/assets/prize/bow.svg';
import redFrame from '@/assets/prize/redFrame.svg';
import whiteFrame from '@/assets/prize/whiteFrame.svg';
import PrizeWrapperContent from './PrizeWrapperContent';

const PrizeBlock = () => (
  <div className={clsx('w-[965px] h-[375px] px-[50px]', s.wrapper)}>
    <Image src={bow} alt='bow' className={s.imageBow} />
    <div className={s.redFrame}>
      <Image src={redFrame} alt='redFrame' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
    </div>
    <div className={s.whiteFrame}>
      <Image src={whiteFrame} alt='whiteFrame' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
    </div>
    <h3 className={s.title}>призы</h3>
    <div className={s.wrapperContent}>
      <PrizeWrapperContent />
    </div>
  </div>
);
export default PrizeBlock;
