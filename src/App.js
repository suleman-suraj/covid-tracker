import './App.css';
// import NumberFormat from 'react-number-format';
import CountrySelector from './components/CountrySelector';
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() { 
  return (
    <div className="App">
    <Header/>
    <h1>Global summary</h1>  
     <Stats url="https://covid19.mathdro.id/api"/>
     <CountrySelector/>
    </div>
  );
}

export default App;
