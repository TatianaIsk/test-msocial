import { PropsWithChildren } from 'react';
import { OptionsPrizeType } from '../types';

import Image from 'next/image';

import s from './OptionsPrize.module.scss';

type OptionsPrizeProps = PropsWithChildren<OptionsPrizeType>;

const OptionsPrize: React.FC<OptionsPrizeProps> = ({ image, children }) => (
  <div className={s.wrapper}>
    <Image src={image} alt='image' className={s.image} />
    <p className={s.text}>{children}</p>
  </div>
);

export default OptionsPrize;
