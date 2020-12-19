import poop from '../../../images/poop.png';
import {useDispatch} from 'react-redux';
import {poopImage} from './cheatCodeSlice';
import useEventListener from '@use-it/event-listener';

// the 'official' Konami Code sequence
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

// a variable to remember the 'position' the user has reached so far.
let poopCodePosition = 0;

const CheatCode = props => {
  const dispatch = useDispatch();

  // add keydown event listener
  const handleKeyDown = keyPressEvent => {
    // get the value of the key code from the key map
    const key = keyPressEvent.key;
    // get the value of the required key from the konami code
    const requiredKey = poopCode[poopCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {
      // move to the next key in the konami code sequence
      poopCodePosition++;

      // if the last key is reached, activate cheats
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
