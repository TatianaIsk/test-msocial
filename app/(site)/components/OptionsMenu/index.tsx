import { Fragment } from 'react';

import Icon from '@/components/ui/Icon';
import Options from './Options';

import { options } from './data/options';

import s from './OptionsMenu.module.scss';

const OptionsMenu = () => (
  <div className={s.wrapper}>
    {options.map((option, index) => (
      <Fragment key={option.icon}>
        <Options {...option} />
        {index !== options.length - 1 ? <Icon name='arrow' /> : null}
      </Fragment>
    ))}
  </div>
);

export default OptionsMenu;

//flex flex-row mt-[60px] mb-[60px] sm:flex-col
