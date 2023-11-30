import Image from 'next/image';

import clsx from 'clsx';

import facebook from '@/assets/footer/facebook.svg';
import twitter from '@/assets/footer/twitter.svg';
import instagram from '@/assets/footer/instagram.svg';
import pinterest from '@/assets/footer/pinterest.svg';
import vk from '@/assets/footer/vk.svg';
import linkidin from '@/assets/footer/linkidin.svg';

import s from './Media.module.scss';

interface MediaProps {
  classNames?: {
    media?: string;
    icon?: string;
  };
}

const Media: React.FC<MediaProps> = ({ classNames }) => {
  return (
    <div className={clsx(s.media, classNames?.media)}>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={facebook} alt='facebook' />
      </div>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={vk} alt='vk' />
      </div>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={linkidin} alt='linkidin' />
      </div>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={twitter} alt='twitter' />
      </div>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={instagram} alt='instagram' />
      </div>
      <div className={clsx(s.icon, classNames?.icon)}>
        <Image src={pinterest} alt='pinterest' />
      </div>
    </div>
  );
};

export default Media;
