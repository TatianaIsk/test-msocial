import { Fragment } from 'react';

import Icon from '@/components/ui/Icon';
import Options from './Options';

import s from './OptionsMenu.module.scss';

const OptionsMenu = () => (
  <div className={s.wrapper}>
    <Options icon='cart'>Покупайте сыр Oltermanni</Options>
    <Icon name='arrow' />
    <Options icon='notebook'>Регистрируйте чеки на сайте в период c 1 сентября по 30 ноября 2020 года</Options>
    <Icon name='arrow' />
    <Options icon='phone'>Получайте гарантированные призы — деньги на телефон</Options>
    <Icon name='arrow' />
    <Options icon='prize'>Участвуйте в еженедельных розыгрышах</Options>
    <Icon name='arrow' />
    <Options icon='coupon'>Получите возможность выиграть 400 000 ₽ на новый интерьер</Options>
  </div>
);

export default OptionsMenu;

//flex flex-row mt-[60px] mb-[60px] sm:flex-col
