import {Provider} from "react-redux";
import {createStore} from 'redux';
import './App.css'
import appReducer from './reducers/teslaRangeApp'
import {
  TeslaCarContainer,
  TeslaStatsContainer,
  TeslaSpeedCounterContainer, TeslaTempCounterContainer,
  TeslaClimateContainer,
  TeslaWheelsContainer
} from "./containers";
import Header from "./components/Header";
import TeslaNotice from './components/TeslaNotice'


const store=createStore(appReducer)


const App=() => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div>
          <form>
            <h1 >Range Per Charge</h1>
            <TeslaCarContainer />
            <TeslaStatsContainer />
            <div>
              <TeslaSpeedCounterContainer />
              <div>
                <TeslaTempCounterContainer />
                <TeslaClimateContainer />
              </div>
              <TeslaWheelsContainer />
            </div>
            <TeslaNotice />
          </form>
        </div>
      </div>
    </Provider>
  );
}

export default App;
