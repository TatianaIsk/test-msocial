'use client';

import { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <BurgerIcon onClick={handleIconClick} isOpen={isOpen} />
      {isOpen && (
        <>
          <Menu />
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
