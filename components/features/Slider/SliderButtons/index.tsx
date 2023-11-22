import s from './SliderButtons.module.scss';

interface SliderButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({ onPrevClick, onNextClick }) => (
  <div className={s.wrapper}>
    <button onClick={onPrevClick}>
      <div className={s.buttonPrev} />
    </button>
    <button onClick={onNextClick}>
      <div className={s.buttonNext} />
    </button>
  </div>
);

export default SliderButtons;
