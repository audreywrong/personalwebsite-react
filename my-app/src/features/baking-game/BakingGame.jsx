import {React, useState, Component} from 'react';
import './BakingGame.css';
import breadLoadingScreen from '../../images/bread-loading-screen.png';
import recipe from '../../images/recipe.png';
import mixingBowl from '../../images/mixing-bowl.png';
// import frankenBread from '../../images/frankenbread.jpg';
import breadShaping from '../../images/bread-shaping.jpg';
import rising from '../../images/rising.png';
import resting from '../../images/sleeping-bread.png';
import baking from '../../images/baking.jpg';
import freshLoaf from '../../images/fresh-loaf.png';
import BackButton from './back-button/BackButton';
import Puzzle from './photo-puzzle/Puzzle';


function BakingGame() {
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [bakeryName, setBakeryName] = useState('');

  function handleBakeryNameForm(newBakeryName) {
    setBakeryName(newBakeryName);
  }

  function handleClick() {
    if (currentStep.stepNumber < 8) {
      setCurrentStep(steps[currentStep.stepNumber + 1]);
    } else {
      setCurrentStep(steps[0]);
    }
  }

  function handleClickDecrement() {
    setCurrentStep(steps[currentStep.stepNumber - 1]);
  }

  return (
    <>
      {(() => {
        return bakeryName && <h1>{bakeryName}</h1>;
      })()}
      <div className="image-wrapper">
        <img src={currentStep.image} className={currentStep.imgClass} alt="logo" />
      </div>
      <NameForm handleBakeryNameForm={handleBakeryNameForm} show={currentStep.stepNumber === 0}></NameForm>
      <Puzzle></Puzzle>
      {(() => {
        return bakeryName && <button onClick={handleClick}>{currentStep.buttonText}</button>;
      })()}
      <BackButton {...{bakeryName:bakeryName, currentStep:currentStep, handleClickDecrement:handleClickDecrement}}></BackButton>
    </>
  );
}

// type = step[]
const steps = [
  {stepNumber: 0, buttonText: `Let's Bake!`, image: breadLoadingScreen, imgClass: 'floating-image'},
  {stepNumber: 1, buttonText: `Time to mix!`, image: recipe, imgClass: 'still-image'},
  {stepNumber: 2, buttonText: `It's aliiiiive!`, image: mixingBowl, imgClass: 'still-image'},
  {
    stepNumber: 3,
    buttonText: `Ah, shape it, shape it good, sh-sh-shape it real good!`,
    // image: frankenBread,
    imgClass: 'still-image',
  },
  {stepNumber: 4, buttonText: `It has to rise. Again.`, image: breadShaping, imgClass: 'still-image'},
  {stepNumber: 5, buttonText: `Time to take a little nap!`, image: rising, imgClass: 'still-image'},
  {stepNumber: 6, buttonText: `Bake this!`, image: resting, imgClass: 'still-image'},
  {stepNumber: 7, buttonText: `Let's get this bread!`, image: baking, imgClass: 'still-image'},
  {stepNumber: 8, buttonText: `You win! Want to bake again?`, image: freshLoaf, imgClass: 'floating-image'},
];

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
        <label>
          Enter bakery name here:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BakingGame;
