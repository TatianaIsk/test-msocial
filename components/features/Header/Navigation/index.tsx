import Link from 'next/link';

import clsx from 'clsx';

import s from './Navigation.module.scss';

interface NavigationProps {
  classNames?: {
    wrapper?: string;
    link?: string;
  };
}

const Navigation: React.FC<NavigationProps> = ({ classNames }) => (
  <div className={clsx(s.wrapper, classNames?.wrapper)}>
    <Link href='/rools' className={clsx(s.link, classNames?.link)}>
      Правила
    </Link>
    <Link href='/prizes' className={clsx(s.link, classNames?.link)}>
      Призы
    </Link>
    <Link href='/winners' className={clsx(s.link, classNames?.link)}>
      Победители
    </Link>
  </div>
);

export default Navigation;
