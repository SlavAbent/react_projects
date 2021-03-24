import React from 'react'
import styled from 'styled-components'
import Block from './Block'

const List = () => {
    const Wrapper = styled.div`
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 50px 20px 10px ;
        border-radius: 20px
    `;
    
    // const Geography = styled(Block)`
    //     background-color:#F3577C;
    //     :hover{
    //         background-color:#f53360;
    //     }
    // `;
    // const Children = styled(Block)`
    //     background-color: #F25555;
    //     :hover{
    //         background-color:#f82929;
    //     }
    // `;
    // const Img = styled.div`
    //     margin-right: 15px;
    //     display: flex;
    //     justify-content: center;
    //     background-color: #2444fa;
    //     align-items: center;
    //     padding: 7px;
    //     border-radius: 10px;
    // `;
    // const ImgGeography = styled(Img)`
    //     background-color:#f53360;
    // `;
    // const ImgChildren = styled(Img)`
    //     background-color: #f82929;
    // `;

    return (
        <>
            <Wrapper>
                <Block/>
            </Wrapper>
        </>
    )
}

export default List