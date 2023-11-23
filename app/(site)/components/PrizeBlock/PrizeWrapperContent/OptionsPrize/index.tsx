import Image from 'next/image';
import { OptionsPrizeType } from '..';

import s from './OptionsPrize.module.scss';

type OptionsPrizeProps = OptionsPrizeType;

const OptionsPrize: React.FC<OptionsPrizeProps> = ({ image, text }) => (
  <div className='flex justify-center items-center flex-col px-3 mx-3'>
    <Image src={image} alt='image' className='mb-[24px]' />
    <p className={s.text}>{text}</p>
  </div>
);

export default OptionsPrize;
