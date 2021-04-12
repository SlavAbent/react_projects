import React, {useState} from 'react';
import './App.css';
import Cards from '../src/components/Cards'
import data from '../src/components/data/data'
import styled from 'styled-components'

function App() {
  const [info, setInfo] = useState(data)
  const App = styled.div`
    width: 1200px;
    height: 700px;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around; 
    align-items: center;
    box-shadow: 4px 4px 17px 15px rgba(34, 60, 80, 0.2);
  `;





  return (
    <App>
      <Cards info={data} />
    </App>
  );
}

export default App;
