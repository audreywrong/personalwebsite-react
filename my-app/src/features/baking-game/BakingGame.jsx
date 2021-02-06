import {React, useState, Component} from 'react';
import './BakingGame.css';
import BackButton from './back-button/BackButton';
import CheatCode from './cheat-code/CheatCode';
import {selectPoopedOn} from './cheat-code/cheatCodeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {SlidePuzzle} from './slide-puzzle/SlidePuzzle';
import {selectStep, setCurrentStep} from './mini-game/miniGameSlice';
import Button from '@material-ui/core/Button';

function BakingGame() {
  const [bakeryName, setBakeryName] = useState('');
  const poopedOn = useSelector(selectPoopedOn);
  const currentStep = useSelector(selectStep);
  const dispatch = useDispatch();
  function handleBakeryNameForm(newBakeryName) {
    setBakeryName(newBakeryName);
  }

  function handleClick() {
    if (currentStep.stepNumber < 8) {
      dispatch(setCurrentStep(currentStep.stepNumber + 1));
    } else {
      dispatch(setCurrentStep(0));
    }
  }

  function handleClickDecrement() {
    dispatch(setCurrentStep(currentStep.stepNumber - 1));
  }

  return (
    <>
      <CheatCode {...{show: poopedOn}}></CheatCode>
      {!poopedOn && (
        <>
          <div className="bakery-name-heading">{bakeryName && <h1>{bakeryName}</h1>}</div>

          {currentStep.image && (
            <div className="image-wrapper">
              <img src={currentStep.image} className={currentStep.imgClass} alt="logo" />
            </div>
          )}

          <NameForm handleBakeryNameForm={handleBakeryNameForm} show={currentStep.stepNumber === 0}></NameForm>
          <SlidePuzzle {...{show: currentStep.stepNumber === 3, imgUrl: currentStep.slideImage}}></SlidePuzzle>

          {bakeryName && ((currentStep.hasMiniGame && currentStep.isMiniGameSolved) || !currentStep.hasMiniGame) && (
            <Button onClick={handleClick} variant="contained" style={{display: 'block', margin: '.5rem auto'}}>
              {currentStep.buttonText}
            </Button>
          )}

          <BackButton
            {...{bakeryName: bakeryName, currentStep: currentStep, handleClickDecrement: handleClickDecrement}}
          ></BackButton>
        </>
      )}
    </>
  );
}

//Step 1 mini game

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleBakeryNameForm(this.state.value);
  }

  render() {
    if (!this.props.show) return <></>;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="bakery-form">
          <label>
            Enter bakery name here:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />{' '}
        </div>
      </form>
    );
  }
}

export default BakingGame;
