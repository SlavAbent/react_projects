import React from 'react';

const Trailer = ({data}) => {

    return (
        <div className="body">
            {data.map(item => {
                return (
                    <div>
                        <h1>trailer</h1>
                        <div>{item.trailer}</div>
                        <a href={item.trailer}>link</a>
                    </div>
                ) 
            })}
            
        </div>
    )
}

export default Trailer