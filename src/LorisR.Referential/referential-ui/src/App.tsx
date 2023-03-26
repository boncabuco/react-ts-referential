import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button1 } from '@boncabuco/react-packages'

function App() {

  const handleClick = () => {
    fetch('api/weatherforecast');
  }

  return (
    <div className="App">
      <Button1 label='test'></Button1>
      <input type="button" onClick={handleClick} value="ClickMe"></input>
    </div>
  );
}

export default App;
