import Image from '@/components/ui/Image';
import { SlideType } from '..';

type SlideProps = SlideType;

const SliderSlide: React.FC<SlideProps> = ({ image, text }) => (
  <div>
    <Image name={image} />
    <p>{text}</p>
  </div>
);

export default SliderSlide;
