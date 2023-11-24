import { PropsWithChildren, ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx('rounded-[20px]', className)} {...props}>
    {children}
  </button>
);

export default Button;
