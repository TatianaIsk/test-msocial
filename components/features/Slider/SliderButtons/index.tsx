import clsx from 'clsx';

import s from './SliderButtons.module.scss';

interface SliderButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  buttonPrev?: string;
  buttonNext?: string;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ onPrevClick, onNextClick, buttonPrev, buttonNext }) => (
  <div className={s.wrapper}>
    <button onClick={onPrevClick}>
      <div className={clsx(s.buttonPrev, buttonPrev)} />
    </button>
    <button onClick={onNextClick}>
      <div className={clsx(s.buttonNext, buttonNext)} />
    </button>
  </div>
);

export default SliderButtons;
