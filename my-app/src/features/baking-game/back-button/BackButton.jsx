const BackButton = props =>
  props.bakeryName &&
  props.currentStep.stepNumber >= 1 &&
  props.currentStep.stepNumber < 8 && (
    <button onClick={props.handleClickDecrement}>IF I COULD TURN BACK TIME...</button>
  );

export default BackButton;
