import logo from './components/img/logo5.png';
import './App.css';
import Navigation from './components/Navigations/Navigation';
import HomePage from './Pages/HomePage/HomePage';


function App() {

  return (
    <div className="App">
      <div>
        <Navigation/>
        
      </div>
      <div><HomePage/></div>
    </div>
  );
}

export default App;
