import logo from './logo.svg';
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
      Hello World
    </div>
  );
}

export default App;
