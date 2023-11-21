import clsx from 'clsx';

import s from './Image.module.scss';

export type ImageVariants = 'cheese1' | 'cheese2' | 'cheese3' | 'cheese4';

interface ImageProps {
  name: ImageVariants;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ name, className }) => <div className={clsx(s.image, s[name], className)}></div>;

export default Image;
