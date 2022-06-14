import './TeslaBattery.css'
import TeslaNotice from '../components/TeslaNotice'
import TeslaCar from '../components/TeslaCar'
	
const TeslaBattery=() => {
	return (
		<form className="tesla-battery">
			<h1>Range per change</h1>
			<TeslaNotice />
			<TeslaCar />
		</form>
	)
}

export default TeslaBattery
