import Image from 'next/image';

import { OptionsPrizeType } from '../types';

import s from './OptionsPrize.module.scss';

type OptionsPrizeProps = OptionsPrizeType;

const OptionsPrize: React.FC<OptionsPrizeProps> = ({ image, text }) => (
  <div className={s.wrapper}>
    <Image src={image} alt='image' className={s.image} />
    <p className={s.text}>{text}</p>
  </div>
);

export default OptionsPrize;
