import { connect } from 'react-redux';
import { changeClimate } from '../actions';
import TeslaClimate from '../components/TeslaClimate';

const mapStateToProps = (state) => {
  return {
    value: state.config.climate,
    limit: state.config.temperature > 10
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeClimate: () => {
      dispatch(changeClimate());
    }
  };
};

const TeslaClimateContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaClimate);

export default TeslaClimateContainer;
