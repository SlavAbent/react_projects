import React from 'react';
import '../../components/Card/index.css'

const Card = ({name, job, image, text}) => {
    return (
        <div className="card">
            <div className="header">
                <img src={image} alt={name} className="header-img"/>
            </div>
            <div className="body">
                <div>
                    <h1>{name}</h1>
                    <h2>{job}</h2>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card