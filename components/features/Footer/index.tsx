import Link from 'next/link';
import Image from 'next/image';

import facebook from '@/assets/footer/facebook.svg';
import twitter from '@/assets/footer/twitter.svg';
import instagram from '@/assets/footer/instagram.svg';
import pinterest from '@/assets/footer/pinterest.svg';
import vk from '@/assets/footer/vk.svg';
import linkidin from '@/assets/footer/linkidin.svg';

import s from './Footer.module.scss';

const Footer = () => (
  <div className={s.wrapper}>
    <div className='flex flex-col'>
      <p className={s.info}>Информационная линия</p>
      <p className={s.number}>8 800 333-15-25</p>
      <p className={s.caption}>© 2020 ООО «Валио»</p>
    </div>
    <div className='flex flex-row'>
      <Link href='/connection' className={s.link}>
        Обратная связь
      </Link>
      <Link href='/rools' className={s.link}>
        Правила акции
      </Link>
      <Link href='/faq' className={s.link}>
        FAQ
      </Link>
    </div>
    <div className='flex flex-col'>
      <p className={s.join}>Присоединяйтесь к нам</p>
      <div className='flex flex-row mt-[11px]'>
        <div className={s.icon}>
          <Image src={facebook} alt='facebook' />
        </div>
        <div className={s.icon}>
          <Image src={vk} alt='vk' />
        </div>
        <div className={s.icon}>
          <Image src={linkidin} alt='linkidin' />
        </div>
        <div className={s.icon}><Image src={twitter} alt='twitter' /></div>
        <div className={s.icon}><Image src={instagram} alt='instagram' /></div>
        <div className={s.icon}><Image src={pinterest} alt='pinterest' /></div>
      </div>
    </div>
  </div>
);

export default Footer;
