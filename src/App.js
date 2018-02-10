import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import keyC from './sounds/C.mp3';
import keyDb from './sounds/Db.mp3';
import keyD from './sounds/D.mp3';
import keyEb from './sounds/Eb.mp3';
import keyE from './sounds/E.mp3';
import keyF from './sounds/F.mp3';
import keyGb from './sounds/Gb.mp3';
import keyG from './sounds/G.mp3';
import keyAb from './sounds/Ab.mp3';
import keyA from './sounds/A.mp3';
import keyBb from './sounds/Bb.mp3';
import keyB from './sounds/B.mp3';
import keyC2 from './sounds/C2.mp3';
import keyDb2 from './sounds/Db2.mp3';
import keyD2 from './sounds/D2.mp3';
import keyEb2 from './sounds/Eb2.mp3';
import keyE2 from './sounds/E2.mp3';
import keyF2 from './sounds/F2.mp3';

import {WhiteKey} from './WhiteKey';

const Wrapper = styled.div`
    outline: none;
    position: relative;
    height: 100vh;
    background: linear-gradient(to bottom, #D500F9, #6200EA);
`;

const KeyboardWrapper = styled.div`
    position: absolute;
    left: 30%;
    top: 30%;
    border: 5px solid #4A148C;
    border-radius: 5px;
`;


class App extends Component {
    constructor () {
        super();
        this.keyC = new Audio(keyC);
        this.keyD = new Audio(keyD);
        this.keyDb = new Audio(keyDb);
        this.keyEb = new Audio(keyEb);
        this.keyE = new Audio(keyE);
        this.keyF = new Audio(keyF);
        this.keyGb = new Audio(keyGb);
        this.keyG = new Audio(keyG);
        this.keyAb = new Audio(keyAb);
        this.keyA = new Audio(keyA);
        this.keyBb = new Audio(keyBb);
        this.keyB = new Audio(keyB);
        this.keyC2 = new Audio(keyC2);
        this.keyDb2 = new Audio(keyDb2);
        this.keyD2 = new Audio(keyD2);
        this.keyEb2 = new Audio(keyEb2);
        this.keyE2 = new Audio(keyE2);
        this.keyF2 = new Audio(keyF2);
        this.state = {
            keys: {}
        };
    };

    componentDidMount () {
        ReactDOM.findDOMNode(this.refs.keyboard).focus();
    };

    handleKeyDown = (e) => {
        let keys = {...this.state.keys};
        keys[e.key.toUpperCase()] = true;

        switch (e.key.toUpperCase()) {
            case 'A':
                this.keyC.currentTime < 1 && this.keyC.play();
                break;
            case 'W':
                this.keyDb.currentTime < 1 && this.keyDb.play();
                break;
            case 'S':
                this.keyD.currentTime < 1 && this.keyD.play();
                break;
            case 'E':
                this.keyEb.currentTime < 1 && this.keyEb.play();
                break;
            case 'D':
                this.keyE.currentTime < 1 && this.keyE.play();
                break;
            case 'F':
                this.keyF.currentTime < 1 && this.keyF.play();
                break;
            case 'T':
                this.keyGb.currentTime < 1 && this.keyGb.play();
                break;
            case 'G':
                this.keyG.currentTime < 1 && this.keyG.play();
                break;
            case 'Y':
                this.keyAb.currentTime < 1 && this.keyAb.play();
                break;
            case 'H':
                this.keyA.currentTime < 1 && this.keyA.play();
                break;
            case 'U':
                this.keyBb.currentTime < 1 && this.keyBb.play();
                break;
            case 'J':
                this.keyB.currentTime < 1 && this.keyB.play();
                break;
            case 'K':
                this.keyC2.currentTime < 1 && this.keyC2.play();
                break;
            case 'O':
                this.keyDb2.currentTime < 1 && this.keyDb2.play();
                break;
            case 'L':
                this.keyD2.currentTime < 1 && this.keyD2.play();
                break;
            case 'P':
                this.keyEb2.currentTime < 1 && this.keyEb2.play();
                break;
            case ';':
                this.keyE2.currentTime < 1 && this.keyE2.play();
                break;
            case "'":
                this.keyF2.currentTime < 1 && this.keyF2.play();
                break;
            default:
                break;
        }

        this.setState({keys: keys});
    };

    handleKeyUp = (e) => {
        let keys = {...this.state.keys};
        keys[e.key.toUpperCase()] = false;

        switch (e.key.toUpperCase()) {
            case 'A':
                setTimeout(() => {
                    this.keyC.pause();
                    this.keyC.currentTime = 0;
                }, 40);
                break;
            case 'W':
                setTimeout(() => {
                    this.keyDb.pause();
                    this.keyDb.currentTime = 0;
                }, 40);
                break;
            case 'S':
                setTimeout(() => {
                    this.keyD.pause();
                    this.keyD.currentTime = 0;
                }, 40);
                break;
            case 'E':
                setTimeout(() => {
                    this.keyEb.pause();
                    this.keyEb.currentTime = 0;
                }, 40);
                break;
            case 'D':
                setTimeout(() => {
                    this.keyE.pause();
                    this.keyE.currentTime = 0;
                }, 40);
                break;
            case 'F':
                setTimeout(() => {
                    this.keyF.pause();
                    this.keyF.currentTime = 0;
                }, 40);
                break;
            case 'T':
                setTimeout(() => {
                    this.keyGb.pause();
                    this.keyGb.currentTime = 0;
                }, 40);
                break;
            case 'G':
                setTimeout(() => {
                    this.keyG.pause();
                    this.keyG.currentTime = 0;
                }, 40);
                break;
            case 'Y':
                setTimeout(() => {
                    this.keyAb.pause();
                    this.keyAb.currentTime = 0;
                }, 40);
                break;
            case 'H':
                setTimeout(() => {
                    this.keyA.pause();
                    this.keyA.currentTime = 0;
                }, 40);
                break;
            case 'U':
                setTimeout(() => {
                    this.keyBb.pause();
                    this.keyBb.currentTime = 0;
                }, 40);
                break;
            case 'J':
                setTimeout(() => {
                    this.keyB.pause();
                    this.keyB.currentTime = 0;
                }, 40);
                break;
            case 'K':
                setTimeout(() => {
                    this.keyC2.pause();
                    this.keyC2.currentTime = 0;
                }, 40);
                break;
            case 'O':
                setTimeout(() => {
                    this.keyDb2.pause();
                    this.keyDb2.currentTime = 0;
                }, 40);
                break;
            case 'L':
                setTimeout(() => {
                    this.keyD2.pause();
                    this.keyD2.currentTime = 0;
                }, 40);
                break;
            case 'P':
                setTimeout(() => {
                    this.keyEb2.pause();
                    this.keyEb2.currentTime = 0;
                }, 40);
                break;
            case ';':
                setTimeout(() => {
                    this.keyE2.pause();
                    this.keyE2.currentTime = 0;
                }, 40);
                break;
            case "'":
                setTimeout(() => {
                    this.keyF2.pause();
                    this.keyF2.currentTime = 0;
                }, 40);
                break;
            default:
                break;
        }

        this.setState({keys: keys});
    };

    render() {
        console.log(this.state.keys);
        return (
            <Wrapper tabIndex={0} ref='keyboard' onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>
                <KeyboardWrapper>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                    <WhiteKey/>
                </KeyboardWrapper>
            </Wrapper>
        );
    }
}

export default App;
