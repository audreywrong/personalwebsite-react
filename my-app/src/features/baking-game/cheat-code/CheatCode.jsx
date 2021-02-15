import emoji from '../../../images/emoji.png';
import {useDispatch} from 'react-redux';
import {emojiImage} from './cheatCodeSlice';
import useEventListener from '@use-it/event-listener';

const emojiCode = [
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

let emojiCodePosition = 0;

const CheatCode = props => {
  const dispatch = useDispatch();

  const handleKeyDown = keyPressEvent => {
    const key = keyPressEvent.key;
    const requiredKey = emojiCode[emojiCodePosition];

    if (key === requiredKey) {
      emojiCodePosition++;

      if (emojiCodePosition === emojiCode.length) {
        dispatch(emojiImage());
        emojiCodePosition = 0;
      }
    } else {
      emojiCodePosition = 0;
    }
  };

  useEventListener('keydown', handleKeyDown);

  if (!props.show) return <></>;
  return <img alt="emoji" className="emoji-image" src={emoji} style={{margin: '0 38%'}} />;
};

export default CheatCode;
