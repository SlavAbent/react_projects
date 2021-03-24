import React from 'react'
import Lists from './Lists'

const Body = ({items}) => {
    return (
        <div className="accordion__body">
            {items.map((items) => {
                return <Lists key={items.id} {...items} />
            })}
        </div>
    )
}

export default Body