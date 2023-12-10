import Image from 'next/image';

import s from './Banner.module.scss';
import background from '@/assets/main-background.svg';
import dwarf from '@/assets/dwarf.svg';

const Banner = () => {
  return (
    <div className={s.wrapper}>
      <Image src={background} alt='' className={s.image} />
      <Image src={dwarf} alt='' className={s.dwarf} />
    </div>
  );
};

export default Banner;
