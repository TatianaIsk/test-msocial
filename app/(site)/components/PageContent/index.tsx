import Banner from '@/components/features/Banner';
import Button from '@/components/ui/Button';

import s from './PageContent.module.scss';

const PageContent = () => {
  return (
    <div className={s.wrapper}>
      <Banner />
      <Button className={s.button}>Загрузить чек</Button>
      <h3 className={s.title}>Нам 40 лет — вам подарки</h3>
    </div>
  );
};

export default PageContent;
