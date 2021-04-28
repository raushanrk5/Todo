import React from 'react';
import './App.css';

const todos = [
                {
                    "id":1,
                    "title":"Add DRF",
                    "desc":"Use drf as backend for the project.",
                    "completed":false
                },
                {
                    "id":2,
                    "title":"Use React",
                    "desc":"Use react as  frontend for the project.",
                    "completed":false
                }
              ]

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
      </header>
    </div>
  );
}

export default App;
