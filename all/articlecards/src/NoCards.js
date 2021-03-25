import React from 'react'
import styled from 'styled-components'

const NoCards = () => {
    const LoadingBlock = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return (
        <LoadingBlock>
            <h1>No Cards... :(</h1>
            
        </LoadingBlock>
    )
}

export default NoCards