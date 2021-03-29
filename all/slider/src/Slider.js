import React, {useState} from 'react';
import people from './data';
import Button from '@material-ui/core/Button';

const Slider = () => {
    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]
    const check = idx => {
        if(idx > people.length - 1) return 0;
        if(idx < 0) return people.length - 1;
        return idx;
    }
    const prev = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return check(newIndex)
        })
    }
    const next = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return check(newIndex)
        })
    }
    return (
        <div className="slider__wrapper">
            <div className="slider__img">
                <img src={image} className="slider__image" alt={name}/>
            </div>
            <p className="slider__text">{job}</p>
            <p className="slider__text">{text}</p>
            <div className="slider__buttons">
                <Button  color="primary" onClick={prev}>prev</Button>
                <Button color="primary" onClick={next}>next</Button>
            </div>
        </div>
    )
}

export default Slider