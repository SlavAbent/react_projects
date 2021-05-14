import React from 'react';
import './index.sass'
import image from '../../images/wallpaper.jpg'

const Body = () => {
    return (
        <div className="body">
            <div className="body__images">
                <img src={image} className="body__img" alt=""/>
            </div>
            <div>
                <h2>text</h2>
            </div>
        </div>
    )
}

export default Body