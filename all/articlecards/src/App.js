import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Cards from './Cards'
import NoCards from './NoCards'



import './App.css';

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=3'

function App() {
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([])


  const removeCard = id => {
    const newCards = photos.filter(item => item.id !== id)
    setPhotos(newCards)
  }

  const fetchData = async () => {
    setLoading(true) 
    try {
      const responce = await fetch(url);
      const photos = await responce.json()
      setPhotos(photos)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  if(photos.length === 0){
    return (
      <main>
        <NoCards />
      </main>
    )
  }

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
    
  }

  return (
    <div className="App">
      <Cards photos={photos} removeCard={removeCard}/>
    </div>
  );
}

export default App;
