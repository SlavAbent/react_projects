import React from 'react';
import Card from '../Card'
import '../../components/Cards/index.css'
const Cards = ({info}) => {

    return (
        <>
            {  info.map((item) => {
                return <Card key={item.id} {...item}/>
            })}
            
        </>
    )
}

export default Cards