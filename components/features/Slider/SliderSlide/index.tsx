import Image from '@/components/ui/Image';
import { SlideType } from '..';

import s from './SliderSlide.module.scss';

type SlideProps = SlideType;

const SliderSlide: React.FC<SlideProps> = ({ image, text }) => (
  <div className='flex flex-col items-center '>
    <Image name={image} />
    <p className={s.text}>{text}</p>
  </div>
);

export default SliderSlide;
