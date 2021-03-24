import React, {useState} from 'react'
import Body from './Body'
import './App.css';
import data from './data'


function App() {
  const [items, setItems] = useState(data)
  return (
    <div className="App">
        <div className="accordion__header">
          <h1 className="accordion__title">Several windows stacked on each other</h1>
          <p className="accordion__text">The accordion is a graphical control element comprising a<br></br> vertically stacked list of items, such as labels or thumbnails.</p>
        </div>
        <Body items={items} />
    </div>
  );
}

export default App;
