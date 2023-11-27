import Icon from '@/components/ui/Icon';
import { OptionType } from '../types';

import s from './Options.module.scss'

type OptionProps = OptionType;

const Options: React.FC<OptionProps> = ({ icon, text }) => {
  return (
    <div className='flex flex-col items-center w-[220px]'>
      <Icon name={icon} />
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default Options;
