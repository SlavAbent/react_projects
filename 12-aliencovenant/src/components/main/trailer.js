import React from 'react';

const Trailer = ({data}) => {
    return (
        <div className="body ">
            {data.map((item, id) => {
                return (
                    <div className="body__trailer" key={id}>
                        <h1 className="trailer__title">wΛtch first</h1>
                        <div className="trailer__video">{item.trailer}</div>
                        <a href={`${item.link}`} target="_blank" rel="noreferrer" className="trailer__link">link</a>
                    </div>
                ) 
            })}
            
        </div>
    )
}

export default Trailer