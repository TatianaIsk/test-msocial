import Link from 'next/link';
import Navigation from '../../Header/Navigation';
import Media from '../../Footer/Media';

import s from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={s.wrapper}>
      <Navigation classNames={{ wrapper: s.wrapperNav, link: s.link }} />
      <div className={s.links}>
        <Link href='/connection' className={s.nav}>
          Обратная связь
        </Link>
        <Link href='/stock' className={s.nav}>
          Правила акции
        </Link>
        <Link href='/faq' className={s.nav}>
          FAQ
        </Link>
      </div>
      <p className={s.text}>Присоединяйтесь к нам</p>
      <Media classNames={{ media: s.media, icon: s.icon }} />
    </div>
  );
};

export default Menu;
