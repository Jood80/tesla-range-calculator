import { connect } from 'react-redux';
import { counterDefaultValue } from '../constants/counterDefaultValue';
import { temperatureUp, temperatureDown } from '../actions';
import TeslaCounter from '../components/TeslaCounter';

const mapStateToProps = (state) => {
  return {
    currentValue: state.config.temperature,
    initValues: counterDefaultValue.temperature
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(temperatureUp(value));
    },
    decrement: (value) => {
      dispatch(temperatureDown(value));
    }
  };
};

const TeslaTempCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter);

export default TeslaTempCounterContainer;
