import React from 'react';
import styled from 'styled-components';


export const WhiteKey = (props) => {
    const Wrapper = styled.div`
        display: inline-flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 5px;
        position: relative;
        height: 160px;
        width: 35px;
        border-right: 1px solid black;
        background: ${props.active ? '#CE93D8' :'white'};
    `;
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
};