import Image from 'next/image';

import s from './Banner.module.scss';
import background from '@/assets/main-background.svg';
import dwarf from '@/assets/dwarf.svg';

const Banner = () => {
  return (
    <div className={s.wrapper}>
      <Image src={background} alt='background' className={s.image} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
      <Image src={dwarf} alt='dwarf' className={s.dwarf} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
    </div>
  );
};

export default Banner;
