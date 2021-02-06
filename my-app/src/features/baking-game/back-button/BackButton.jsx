import Button from '@material-ui/core/Button';

const BackButton = props =>
  props.bakeryName &&
  props.currentStep.stepNumber >= 1 &&
  props.currentStep.stepNumber < 8 && (
    <Button onClick={props.handleClickDecrement} variant="contained" style={{display: 'block', margin: '.5rem auto'}}>
      IF I COULD TURN BACK TIME...
    </Button>
  );

export default BackButton;
