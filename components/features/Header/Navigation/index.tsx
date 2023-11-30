import Link from 'next/link';

import clsx from 'clsx';

import s from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => (
  <div className={clsx(s.wrapper, className)}>
    <Link href='/rools' className={s.link}>
      Правила
    </Link>
    <Link href='/prizes' className={s.link}>
      Призы
    </Link>
    <Link href='/winners' className={s.link}>
      Победители
    </Link>
  </div>
);

export default Navigation;
