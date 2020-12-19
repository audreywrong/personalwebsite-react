import poop from '../../../images/poop.png';

// a key map of allowed keys
const allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b',
};

// the 'official' Konami Code sequence
const poopCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
let poopCodePosition = 0;

const CheatCode = () => <img alt="poop" className="poop-image" onKeyDown={handleKeyDown} src={poop} />;

// add keydown event listener
const handleKeyDown = keyPressEvent => {
  // get the value of the key code from the key map
  const key = allowedKeys[keyPressEvent.key];
  // get the value of the required key from the konami code
  const requiredKey = poopCode[poopCodePosition];

  // compare the key with the required key
  if (key === requiredKey) {
    // move to the next key in the konami code sequence
    poopCodePosition++;

    // if the last key is reached, activate cheats
    if (poopCodePosition === poopCode.length) {
      document.body.style.backgroundImage = poop;
      poopCodePosition = 0;
    }
  } else {
    poopCodePosition = 0;
  }
};

export default CheatCode;
