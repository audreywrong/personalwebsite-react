import {React, useState, Component} from 'react';
import './BakingGame.css';
import BackButton from './back-button/BackButton';
import CheatCode from './cheat-code/CheatCode';
import {selectPoopedOn} from './cheat-code/cheatCodeSlice';
import {useSelector} from 'react-redux';
import {SlidePuzzle} from './slide-puzzle/SlidePuzzle';
import {selectStep, setCurrentStep} from './mini-game/miniGameSlice';

function BakingGame() {
  // const [currentStep, setCurrentStep] = useState(steps[0]);
  const [bakeryName, setBakeryName] = useState('');
  const poopedOn = useSelector(selectPoopedOn);
  const currentStep = useSelector(selectStep);

  function handleBakeryNameForm(newBakeryName) {
    setBakeryName(newBakeryName);
  }

  function handleClick() {
    if (currentStep.stepNumber < 8) {
      setCurrentStep(currentStep.stepNumber + 1);
    } else {
      setCurrentStep(0);
    }
  }

  function handleClickDecrement() {
    setCurrentStep(currentStep.stepNumber - 1);
  }

  return (
    <>
      <CheatCode {...{show: poopedOn}}></CheatCode>
      {(() => {
        return (
          !poopedOn && (
            <>
              <div className="bakery-name-heading">
                {(() => {
                  return bakeryName && <h1>{bakeryName}</h1>;
                })()}
              </div>

              {(() => {
                /* anon function returns undefined if not truthy */
                return (
                  currentStep.image && (
                    <div className="image-wrapper">
                      <img src={currentStep.image} className={currentStep.imgClass} alt="logo" />
                    </div>
                  )
                );
              })()}

              <NameForm handleBakeryNameForm={handleBakeryNameForm} show={currentStep.stepNumber === 0}></NameForm>
              <SlidePuzzle {...{show: currentStep.stepNumber === 3, imgUrl: currentStep.slideImage}}></SlidePuzzle>

              {(() => {
                return (
                  bakeryName &&
                  ((currentStep.hasMiniGame && currentStep.isMiniGameSolved) || !currentStep.hasMiniGame) && (
                    <button onClick={handleClick}>{currentStep.buttonText}</button>
                  )
                );
              })()}

              <BackButton
                {...{bakeryName: bakeryName, currentStep: currentStep, handleClickDecrement: handleClickDecrement}}
              ></BackButton>
            </>
          )
        );
      })()}
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
