import React from 'react'


const Info = ({company, dates, duties, title}) => {
    return (
        <div className="block__infoWrapper">
            <h3 className="block__title">{title}</h3>
            <p className="block__company">{company}</p>
            {duties.map((el, index) => {
                return (
                    <div key={index}>
                        <p className="block__duties">{el}</p>
                    </div>
                )
            })}
            <p className="block__dates">{dates}</p>
        </div>
        
    )
}

export default Info