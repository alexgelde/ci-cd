import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React App </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludo nombre="Dani" />
      </header>
    </div>
  );
}

export default App;
