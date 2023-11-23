import card1 from '@/assets/prize/images/card1.svg';
import card2 from '@/assets/prize/images/card2.svg';
import card3 from '@/assets/prize/images/card3.svg';
import OptionsPrize from './OptionsPrize';

export type OptionsPrizeType = {
  image: string;
  text: string;
};

const optionsPrize: OptionsPrizeType[] = [
  {
    image: card1,
    text: 'Гарантированный приз — кешбэк на телефон',
  },
  {
    image: card2,
    text: 'Еженедельные призы — сертификаты в интернет-магазины на 4 000 ₽',
  },
  {
    image: card3,
    text: 'Главный приз — 400 000 ₽ на новый интерьер',
  },
];

const PrizeWrapperContent = () => (
  <div className='grid grid-cols-3 mt-[85px] items-baseline'>
    {optionsPrize.map(option => (
      <OptionsPrize key={option.image} {...option} />
    ))}
  </div>
);

export default PrizeWrapperContent;
