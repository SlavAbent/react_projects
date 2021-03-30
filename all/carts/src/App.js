import React, {useState} from 'react'
import './App.css';
import data from './data';
import Cards from './Cards'

function App() {
  const [reviews, setReviews] = useState(data)
  const setRemoveCard = (id) => {
    const newReview = reviews.filter(item => item.id !== id)
    return setReviews(newReview)
  }

  if(reviews.length === 0) {
    return (
      <div>
        <p>no reviews :(</p>
      </div>
    )
  }

  
  return (
    <div className="App">
        <Cards reviews={reviews} setRemoveCard={setRemoveCard}/>
    </div>
  );
}

export default App;
