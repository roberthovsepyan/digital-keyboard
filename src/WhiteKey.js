import React from 'react';
import styled from 'styled-components';


export const WhiteKey = (props) => {
    const Wrapper = styled.div`
        display: inline-flex;
        position: relative;
        height: 160px;
        width: 35px;
        border-right: 1px solid black;
        background: white;
    `;
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};