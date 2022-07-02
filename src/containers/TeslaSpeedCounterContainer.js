import { connect } from 'react-redux';
import { counterDefaultValue } from '../constants/counterDefaultValue';
import { speedUp, speedDown } from '../actions';
import TeslaCounter from '../components/TeslaCounter';

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.speed,
    initValues: counterDefaultValue.speed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(speedUp(value));
    },
    decrement: (value) => {
      dispatch(speedDown(value));
    }
  };
};

const TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter);

export default TeslaSpeedCounterContainer;
