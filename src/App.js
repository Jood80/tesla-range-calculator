import Header from "./components/Header";
import './App.css'
import TeslaBattery from "./containers/TeslaBattery.container";

const App=() => {
  return (
    <div className="wrapper">
      <Header />
      <TeslaBattery />
    </div>
  );
}

export default App;
