import {Provider} from "react-redux";
import './App.css'
import {
  TeslaCarContainer,
  TeslaStatsContainer,
  TeslaSpeedCounterContainer, TeslaTempCounterContainer,
  TeslaClimateContainer,
  TeslaWheelsContainer
} from "./containers";
import Header from "./components/Header";
import TeslaNotice from './components/TeslaNotice'
import { store } from "./containers/store";



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
