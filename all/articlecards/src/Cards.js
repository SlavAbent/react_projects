import React, {useState} from 'react'
import Card from './Card'
import CardInfo from './CardInfo'

const Cards = ({photos, removeCard}) => {
    return (
        <section className="section__card">
            {photos.map((photo, index) => {
                return (
                    <div>
                        <Card key={photo.id} {...photo} removeCard={removeCard} className="card"/>
                    </div>
                )
                    
            })}
        </section>
    )
}
export default Cards