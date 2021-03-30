import React, {useState} from 'react'

const Card = ({id, name, image, text, job, setRemoveCard}) => {
    return (
        <div className="Card">
            <div className="Card-image">
                <img src={image} alt={name} className="card-img"/>
            </div>
            <div className="Card-info">
                <h1 className="card-title">{name}</h1>
                <p className="card-job">{job}</p>
                <p className="card-text">{text}</p>
            </div>
            <span className="card-x" onClick={() => setRemoveCard(id)}>x</span>
        </div>
    )
}

export default Card