import {connect} from 'react-redux';

import TeslaStats from '../components/TeslaStats';

const mapStateToProps=(state) => {
	return {
		carstats: state.carstats
	}
}


const TeslaStatsCounterContainer=connect(mapStateToProps, null)(TeslaStats)


export default TeslaStatsCounterContainer
