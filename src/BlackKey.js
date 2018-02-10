import React from 'react';
import styled from 'styled-components';


export const BlackKey = (props) => {
    const Wrapper = styled.div`
        display: inline-flex;
        align-items: flex-end;        
        justify-content: center;
        padding-bottom: 5px;
        position: absolute;
        border-radius: 0px 0px 4px 4px;
        top: 0px;
        left: ${props.left};
        height: 100px;
        width: 22px;
        border-right: 1px solid black;
        background: ${props.active ? '#AA00FF' :'black'};
        color: white;
    `;
    return (
        <Wrapper>
            {props.text}
        </Wrapper>
    );
};