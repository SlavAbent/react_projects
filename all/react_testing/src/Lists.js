import React, {useState} from 'react'
import List from './List'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
const Lists = ({title, info}) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(false)
    
    return (
        <>
            <div className={show ? "accordion__block active__color" : "accordion__block"}>
                <div className="accordion__blockWrapper">
                    <div className="accordion__icon">{show ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}</div>
                    <h2 className="accordion__blockTitle" onClick={() => setActive(!active)}>{title}</h2>
                    <div>{active ? <List info={info} show={show} setShow={setShow}/> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lists