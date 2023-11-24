import Icon from '@/components/ui/Icon';
import Options from './Options';

import { options } from './data/options';

const OptionsMenu = () => (
  <div className='flex flex-row mt-[60px] mb-[60px]'>
    {options.map((option, index) => (
      <>
        <Options key={option.icon} {...option} />
        {index !== options.length - 1 ? <Icon name='arrow' /> : null}
      </>
    ))}
  </div>
);

export default OptionsMenu;
