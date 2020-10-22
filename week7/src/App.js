import React, {useState} from 'react';

import './App.css';
function App() {

let[example,changeExample]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>Count:{example}</p>
          <button onClick={() => {changeExample(example + 2)}}>Increase!</button>
            <button onClick={() => {changeExample(example - 2)}}>Decrease!</button>

      </header>
    </div>
  );
}

export default App;
