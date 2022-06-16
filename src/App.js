import Header from "./components/Header";
import './App.css'
import TeslaBattery from "./containers/TeslaBattery.container";


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


const App=() => {
  return (
    <div className="wrapper">
      <Header />
      <TeslaBattery counterDefaultVal={counterDefaultVal} />
    </div>
  );
}

export default App;
