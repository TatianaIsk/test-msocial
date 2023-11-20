import { PropsWithChildren, ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import s from './Button.module.scss';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx('px-[40px] py-[10px] text-[18px] uppercase rounded-[20px]', className, s.button)} {...props}>
    {children}
  </button>
);

export default Button;
