import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_MESSAGE === 'true' ? <p>Em desenvolvimento</p> : null }
      <StrangerThings />
    </div>
  );
}

export default App;
