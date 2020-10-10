import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
function App() {

let[example,changeExample]=useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Count:{example}</p>
          <button onClick={() => {changeExample(example + 1)}}>Increase!</button>

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
      </header>
    </div>
  );
}

export default App;
