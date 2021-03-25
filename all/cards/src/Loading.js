import React from 'react'

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const Loading = () => {
    const LoadingBlock = styled.div`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return (
        <LoadingBlock>
            <h1>Loading...</h1>
            <Spin indicator={antIcon} />
        </LoadingBlock>
    )
}

export default Loading