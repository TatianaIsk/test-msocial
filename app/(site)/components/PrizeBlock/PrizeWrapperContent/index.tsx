import { optionsPrize } from './data';

import OptionsPrize from './OptionsPrize';

import s from './PrizeWrapperContent.module.scss';

const PrizeWrapperContent = () => (
  <div className={s.wrapper}>
    {optionsPrize.map(option => (
      <OptionsPrize key={option.image} {...option} />
    ))}
  </div>
);

export default PrizeWrapperContent;

//grid grid-cols-3 mt-[85px] items-baseline
