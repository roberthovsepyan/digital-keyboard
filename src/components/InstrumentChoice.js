import React from 'react';
import styled from 'styled-components';


export const InstrumentChoice = (props) => {
    const Wrapper = styled.div`
        width: 150px;
        height: 100px;
        border-radius: 6px;
        background: linear-gradient(to bottom, ${props.color});
        box-shadow: ${props.active ? 'inset 0px 1px 5px 0px rgba(0,0,0,0.58)' : '0px 5px 5px 0px rgba(0,0,0,0.58)'};
        font-size: 1.1em;
        padding-top: 7px;
        margin-right: 20px;
        cursor: pointer;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
        &:hover {
            opacity: 0.7;
        }
    `;

    const handleClick = () => {
        props.handleClick(props.name);
    };

    return (
        <Wrapper onClick={handleClick}>
            {props.name}
            <img src={props.img} alt={props.name} width={props.w} height={props.h}/>
        </Wrapper>
    );
};