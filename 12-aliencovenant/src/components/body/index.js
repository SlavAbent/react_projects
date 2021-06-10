import React, {useState} from 'react';
import './index.sass'
import image from '../../images/wallpaper.jpg'
import data from '../../data';

const Body = () => {
    const [casts, setCasts] = useState(data[0])
    const [showed, setShowed] = useState(false)
    console.log(casts);
    console.log('render');
    return (
        <div className="body">
            <div className="body__images">
                <img src={image} className="body__img" alt=""/>
            </div>

            <div>
                <div className="casts__mainImages">
                    <div>
                        <div>
                           <p>{showed ? casts.storyline : `${casts.storyline.substr(0, 255)}`}</p>
                           <button onClick={() => setShowed(!showed)}>{showed ? 'hide' : 'show'}</button>
                        </div>
                    </div>
                    {
                        casts.cast.map((item, id) => {
                            return (
                                <div key={id}>
                                    <div>
                                        <img src={item.image} className="casts__image" />
                                    </div>
                                    <div>
                                        <p>{item.name} aka {item.storyperson}</p>
                                        <p>{item.age}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body