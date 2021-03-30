import React from 'react'
import Card from './Card'

const Cards = ({reviews, setRemoveCard}) => {
    return (
        <div className="Cards">
            {reviews.map(review => {
                return <Card key={review.id} {...review} setRemoveCard={setRemoveCard} />
            })}
        </div>
    )
}

export default Cards