import Banner from '@/components/features/Banner';
import Button from '@/components/ui/Button';

import s from './PageContent.module.scss';
import OptionsMenu from '../OptionsMenu';
import Slider from '../../../../components/features/Slider';

const PageContent = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Banner />
        <Button className={s.button}>Загрузить чек</Button>
        <h3 className={s.title}>Нам 40 лет — вам подарки</h3>
        <div className='flex justify-center'>
          <OptionsMenu />
        </div>
      </div>
      <h4 className={s.subtitle}>в акции участвуют</h4>
      <div className={s.slider}>
        <Slider />
      </div>
    </>
  );
};

export default PageContent;
