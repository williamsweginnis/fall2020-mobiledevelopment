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
        </a>
      </header>
    </div>
  );
}

export default App;
