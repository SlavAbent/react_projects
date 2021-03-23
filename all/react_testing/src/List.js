import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    width: 167px;
    height: 44px;
    padding: 12px 40px;
    background: #6B63FF;
    border-radius: 60px;
    outline: none;
    appearance: none;
    border: 0;
    cursor: pointer;
    color: #F0F4FD;
    transition: .3s;
    :hover{
        background: #847efc;
    }
`;

const Paragraph = styled.p`
    margin-bottom: 30px;
    transition: .3s;
`;

const List = ({info, show, setShow}) => {
    return (
        <>
            <Paragraph>{show ? info : `${info.substring(0, 100)}...`}</Paragraph>
            <Button onClick={() => setShow(!show)}>
                learn more
            </Button>
        </>
    )
}

export default List