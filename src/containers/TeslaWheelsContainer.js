import { connect } from 'react-redux';
import { changeWheel } from '../actions';
import TeslaWheels from '../components/TeslaWheels';

const mapStateToProps = (state) => {
  return {
    value: state.config.wheels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeWheels: (size) => {
      dispatch(changeWheel(size));
    }
  };
};

const TeslaWheelsContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaWheels);

export default TeslaWheelsContainer;
