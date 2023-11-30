import Image from 'next/image';

import facebook from '@/assets/footer/facebook.svg';
import twitter from '@/assets/footer/twitter.svg';
import instagram from '@/assets/footer/instagram.svg';
import pinterest from '@/assets/footer/pinterest.svg';
import vk from '@/assets/footer/vk.svg';
import linkidin from '@/assets/footer/linkidin.svg';

import s from './Media.module.scss'

const Media = () => {
  return (
    <div className={s.media}>
      <div className={s.icon}>
        <Image src={facebook} alt='facebook' />
      </div>
      <div className={s.icon}>
        <Image src={vk} alt='vk' />
      </div>
      <div className={s.icon}>
        <Image src={linkidin} alt='linkidin' />
      </div>
      <div className={s.icon}>
        <Image src={twitter} alt='twitter' />
      </div>
      <div className={s.icon}>
        <Image src={instagram} alt='instagram' />
      </div>
      <div className={s.icon}>
        <Image src={pinterest} alt='pinterest' />
      </div>
    </div>
  );
};

export default Media;
