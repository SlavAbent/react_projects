import React, { useState } from 'react';
import data from '../../data'
const Tickets = () => {
    const [datas, setDatas] = useState(data[0])
    const { tickets } = datas
    return (
        <div className="body">
            {tickets.map((info, id) => {
                return (
                    <div key={id} className="ticket__body">
                        <div className="ticket__overlay">
                            <h1 className="ticket__title">{info.title}</h1>
                            <p className="ticket__row">row: {info.row}</p>
                            <p className="ticket__places">places: {info.place}</p>
                            <button className="ticket__btn">order now</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Tickets