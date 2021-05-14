import React, {useState} from 'react'

import './App.sass';

import Main from './components/main'
// import Body from './components/body'

import data from './data'

function App() {
  return (
    <div className="App">
      <Main data={data}/>
    </div>
  );
}

export default App;
