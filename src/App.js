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


const store=createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //TODO: createStore is deperecated, CHANGE IT!


const App=() => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="wrapper">
          <form className="tesla-battery" >
            <h1 >Range Per Charge</h1>
            <TeslaCarContainer />
            <TeslaStatsContainer />
            <div className="tesla-controls cf">
              <TeslaSpeedCounterContainer />
              <div className="tesla-climate-container cf" >
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
