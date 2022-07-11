import React from 'react';
import {getImage} from "./API";


function App() {
  getImage().then(item => console.log(item))
  return (
    <div className="App">
    </div>
  );
}

export default App;
