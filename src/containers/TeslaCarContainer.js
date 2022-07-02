import { connect } from 'react-redux';
import TeslaCar from '../components/TeslaCar';

const mapStateToProps = (state) => {
  return {
    wheelSize: state.config.wheels
  };
};

const TeslaCarConatiner = connect(mapStateToProps, null)(TeslaCar);

export default TeslaCarConatiner;
