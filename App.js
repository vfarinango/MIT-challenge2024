import React from 'react';
import VapiComponent from './VapiComponent';
import './App.css';  // Keep this import if you want to retain any custom CSS

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voice Assistant</h1>
        <VapiComponent />
      </header>
    </div>
  );
}

export default App;