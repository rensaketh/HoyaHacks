import logo from './logo.svg';
import './App.css';
import './LeafletMap';
import LeafletMap from "./LeafletMap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <LeafletMap />
      </header>
    </div>
  );
}

export default App;
