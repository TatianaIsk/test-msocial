import Link from 'next/link';

import Media from './Media';

import s from './Footer.module.scss';

const Footer = () => (
  <div className={s.wrapper}>
    <div className={s.information}>
      <p className={s.info}>Информационная линия</p>
      <p className={s.number}>8 800 333-15-25</p>
    </div>
    <p className={s.caption}>© 2020 OOO «Валио»</p>
    <div className={s.links}>
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
    <div className={s.media}>
      <p className={s.join}>Присоединяйтесь к нам</p>
      <Media />
    </div>
  </div>
);

export default Footer;
