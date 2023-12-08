import { PropsWithChildren } from 'react';

import Icon from '@/components/ui/Icon';
import { OptionType } from '../types';

import s from './Options.module.scss';

type OptionProps = PropsWithChildren<OptionType>;

const Options: React.FC<OptionProps> = ({ icon, children }) => {
  return (
    <div className='flex flex-col items-center w-[220px]'>
      <Icon name={icon} />
      <p className={s.text}>{children}</p>
    </div>
  );
};

export default Options;
