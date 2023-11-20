import { PropsWithChildren } from 'react';

import Image from 'next/image';

import clsx from 'clsx';
import s from './Header.module.scss';

import logo from './../../../assets/logo.svg';
import Link from 'next/link';
import Button from '@/components/ui/Button';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={clsx(`w-full relative flex px-[100px] py-[32px] justify-between items-center`, className, s.header)}>
      <div className='max-w-[200px]'>
        <Image src={logo} alt='logo' sizes="(max-width: 200px) 100vw"/>
      </div>
      <div>
        <Link className={s.link} href='/rools'>
          Правила
        </Link>
        <Link className={s.link} href='/prizes'>
          Призы
        </Link>
        <Link className={s.link} href='/winners'>
          Победители
        </Link>
      </div>
      <div>
        <Button className={s.button}>вход</Button>
        <Button>регистрация</Button>
      </div>
      {children}
    </div>
  );
};

export default Header;
