import './TeslaBattery.css'
import TeslaNotice from '../components/TeslaNotice'
import TeslaCar from '../components/TeslaCar'
import {useEffect, useState} from 'react'
import TeslaStats from '../components/TeslaStats'
import {getModelData} from '../services/Battery.service'
import TeslaCounter from '../components/TeslaCounter'
import TeslaClimate from '../components/TeslaClimate'
import TeslaWheels from '../components/TeslaWheels'


const counterDefaultVal={
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

const TeslaBattery=() => {
	const [carstats, setCarstats]=useState([])
	const [carConfig, setCarConfig]=useState({
		speed: 55,
		temperature: 20,
		climate: true,
		wheels: 19
	})

	const calculateStats=(models, value) => {
		const modelData=getModelData()
		return models.map(model => {
			const {speed, temperature, climate, wheels}=value
			const miles=modelData[model][wheels][climate? 'on':'off'].speed[speed][temperature]

			return {
				model,
				miles
			}
		})
	}

	const updateStats=() => {
		const carModels=['60', '60D', '75', '75D', '90D', 'P100D']
		setCarstats(calculateStats(carModels, carConfig))
	}

	useEffect(() => {
		updateStats()
	}, [])

	const updateCounterState=(title, newValue) => {
		const config={...carConfig}
		title==='Speed'? config['speed']=newValue:config['temperature']=newValue
		setCarConfig(config)
		updateStats()
	}

	const increment=(e, title) => {
		e.preventDefault();
		let currentValue, maxValue, step;
		const {speed, temperature}=counterDefaultVal;
		if(title==='Speed') {
			currentValue=carConfig.speed
			maxValue=speed.max;
			step=speed.step;
		} else {
			currentValue=carConfig.temperature;
			maxValue=temperature.max;
			step=temperature.step
		}

		if(currentValue<maxValue) {
			const newValue=currentValue+step;
			updateCounterState(title, newValue);
		}
	}

	const decrement=(e, title) => {
		e.preventDefault();
		let currentValue, minValue, step;
		const {speed, temperature}=counterDefaultVal;
		if(title==='Speed') {
			currentValue=carConfig.speed;
			minValue=speed.min;
			step=speed.step;
		} else {
			currentValue=carConfig.temperature;
			minValue=temperature.min;
			step=temperature.step;
		}
		if(currentValue>minValue) {
			const newValue=currentValue-step;
			updateCounterState(title, newValue);
		}
	}

	const handleChangeClimate=() => {
		const config={...carConfig}
		config['climate']=!config.climate
		setCarConfig(config)
		updateStats()
	}

	const handleChangeWheels=(size) => {
		const config={...carConfig}
		config['wheels']=size
		setCarConfig(config)
		updateStats()
	}

	return (
		<form>
			<h1>Range per change</h1>
			<TeslaCar wheelsize={carConfig.wheels} />
			<TeslaStats carstats={carstats} />
			<div>
				<TeslaCounter
					currentValue={carConfig.speed}
					initValues={counterDefaultVal.speed}
					increment={increment}
					decrement={decrement}
				/>
				<div>
					<TeslaCounter
						currentValue={carConfig.temperature}
						initValues={counterDefaultVal.temperature}
						increment={increment}
						decrement={decrement}
					/>
					<TeslaClimate
						value={carConfig.climate}
						limit={carConfig.temperature>10}
						handleChangeClimate={handleChangeClimate} />
				</div>
				<TeslaWheels
					value={carConfig.wheels}
					handleChangeWheels={handleChangeWheels}
				/>
			</div>
			<TeslaNotice />

		</form>
	)
}

export default TeslaBattery
