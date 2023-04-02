import React from 'react';
import Pahina from './lib/pages/Pahina'

function App() {

  const handleClick = () => {
    fetch('api/weatherforecast');
  }

  return (
    <div className="App">
      <Pahina></Pahina>
    </div>
  );
}

export default App;
