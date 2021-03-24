import React, {useState} from 'react'
import styled from 'styled-components'
import { AiOutlineSwap } from 'react-icons/ai';

import Info from './Info'

import data from './data'

const Block = () => {
    const [jobs, setJobs] = useState(data)
    const [value, setValue] = useState(0)
    const Block = styled.button`
        width: 100%;
        position: relative;
        padding: 10px 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: .3s;
        outline: none;
        border: none;
        :hover{
            background-color:#4762f8;
        }

        :hover .block__infoWrapper{
            opacity: 1;
        }

        
    `;
    const Img = styled.div`
        margin-right: 15px;
        display: flex;
        justify-content: center;
        background-color: #2444fa;
        align-items: center;
        padding: 7px;
        border-radius: 10px;
    `;

    const { company, dates, duties, title } = jobs[value]
    return (
        <div className="wrapper__blocks">
            <div className="button__wrapper">
                {jobs.map((item, index) => {
                    return (
                        <Block 
                            key={item.id} 
                            className={`block-color ${index === value && 'active-btn'}`} 
                            onClick={() => setValue(index)}
                        >
                            <Img className="list__img">
                                <AiOutlineSwap />
                            </Img>
                            <div className="list__info">
                                <h2 className="list__info-h2">{item.title}</h2>
                            </div>
                        </Block>
                    )
                })}
            </div>
            <Info {...jobs[value]}/>
            
        </div>
        
    )
}

export default Block