import poop from '../../../images/poop.png';
import {useDispatch} from 'react-redux';
import {poopImage} from './cheatCodeSlice';
import useEventListener from '@use-it/event-listener';

const poopCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

let poopCodePosition = 0;

const CheatCode = props => {
  const dispatch = useDispatch();

  const handleKeyDown = keyPressEvent => {
    const key = keyPressEvent.key;
    const requiredKey = poopCode[poopCodePosition];

    if (key === requiredKey) {
      poopCodePosition++;

      if (poopCodePosition === poopCode.length) {
        dispatch(poopImage());
        poopCodePosition = 0;
      }
    } else {
      poopCodePosition = 0;
    }
  };

  useEventListener('keydown', handleKeyDown);

  if (!props.show) return <></>;
  return <img alt="poop" className="poop-image" src={poop} />;
};

export default CheatCode;
