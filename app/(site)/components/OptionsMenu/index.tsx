import Icon, { IconsVariants } from '@/components/ui/Icon';

import Options from './Options';

export type OptionType = {
  icon: IconsVariants;
  text?: string;
};

const options: OptionType[] = [
  {
    icon: 'cart',
    text: 'Покупайте сыр Oltermanni',
  },
  {
    icon: 'notebook',
    text: 'Регистрируйте чеки на сайте в период c 1 сентября по 30 ноября 2020 года',
  },
  {
    icon: 'phone',
    text: 'Получайте гарантированные призы — деньги на телефон',
  },
  {
    icon: 'prize',
    text: 'Участвуйте в еженедельных розыгрышах',
  },
  {
    icon: 'coupon',
    text: 'Получите возможность выиграть 400 000 ₽ на новый интерьер',
  },
];

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
