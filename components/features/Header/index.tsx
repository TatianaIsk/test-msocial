'use client';

import { PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import s from './Header.module.scss';

import logo from '@/assets/logo.svg';
import Button from '@/components/ui/Button';
import BurgerMenu from '../BurgerMenu';
import Navigation from './Navigation';
import Modal from '../Modal';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getWindowWidth() {
    return typeof window !== 'undefined' ? window.innerWidth : 1000;
  }

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setWindowWidth(getWindowWidth());

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={clsx('w-full relative flex px-[100px] py-[32px] justify-between items-center', className, s.header)}>
      {windowWidth >= 769 ? (
        <>
          <div className='max-w-[200px]'>
            <Image src={logo} alt='logo' sizes='(max-width: 200px) 100vw' />
          </div>
          <Navigation />
          <div>
            <Button className={s.button} onClick={openModal}>
              вход
            </Button>
            <Button className={s.buttonReg} onClick={openModal}>
              регистрация
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className='flex items-center'>
            <BurgerMenu />
            <div className='max-w-[200px] mx-6'>
              <Image src={logo} alt='logo' sizes='(max-width: 200px) 100vw' />
            </div>
          </div>
          <Button className={s.button} onClick={openModal}>
            вход
          </Button>
        </>
      )}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Header;
