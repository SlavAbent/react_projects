import React, { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData'
import {Link} from 'react-router-dom'
import Main from '../Main';
import './calendar.css'
const Calendar = () => {
    const fetchData = new FetchData();
    const [data, setData] = useState([])

    

    useEffect(() => {
        fetchData.getLaunches()
            .then(launches => setData(launches) )
    }, [])
    return (
        <>
            <Main />
            <section className="calendar">
                <div className="container">
                    <ul className="calendar-list">
                        {data.map(item => (
                            <li key={item.id} className="calendar-item">
                                <article className="launches">
                                    <div className="launches-image">
                                        <img src={item.links.patch.small} alt={item.name} />
                                        
                                    </div>
                                    <div className="launches-content">
                                        <h2 className="launches-title">{item.name}</h2>
                                        <Link to="/details" className="button launches-details">Подробнее</Link>
                                    </div>
                                </article>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Calendar