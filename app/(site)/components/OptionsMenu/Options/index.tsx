import Icon from '@/components/ui/Icon';
import { OptionType } from '..';

type OptionProps = OptionType;

const Options: React.FC<OptionProps> = ({ icon, text }) => {
  return (
    <div className='flex flex-col items-center w-[220px]'>
      <Icon name={icon} />
      <p className='text-center w-[160px]'>{text}</p>
    </div>
  );
};

export default Options;
