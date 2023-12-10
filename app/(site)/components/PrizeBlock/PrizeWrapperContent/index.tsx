import card1 from '@/assets/prize/images/card1.svg';
import card2 from '@/assets/prize/images/card2.svg';
import card3 from '@/assets/prize/images/card3.svg';

import OptionsPrize from './OptionsPrize';

import s from './PrizeWrapperContent.module.scss';

const PrizeWrapperContent = () => (
  <div className={s.wrapper}>
    <OptionsPrize image={card1}>Гарантированный приз — кешбэк на телефон</OptionsPrize>
    <OptionsPrize image={card2}>Еженедельные призы — сертификаты в интернет-магазины на 4 000 ₽</OptionsPrize>
    <OptionsPrize image={card3}>Главный приз — <span className='text-red-600'>400 000 ₽</span> на новый интерьер</OptionsPrize>
  </div>
);

export default PrizeWrapperContent;