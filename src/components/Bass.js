import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import keyC from '../sounds/C_bass.mp3';
import keyDb from '../sounds/Db_bass.mp3';
import keyD from '../sounds/D_bass.mp3';
import keyEb from '../sounds/Eb_bass.mp3';
import keyE from '../sounds/E_bass.mp3';
import keyF from '../sounds/F_bass.mp3';
import keyGb from '../sounds/Gb_bass.mp3';
import keyG from '../sounds/G_bass.mp3';
import keyAb from '../sounds/Ab_bass.mp3';
import keyA from '../sounds/A_bass.mp3';
import keyBb from '../sounds/Bb_bass.mp3';
import keyB from '../sounds/B_bass.mp3';
import keyC2 from '../sounds/C2_bass.mp3';
import keyDb2 from '../sounds/Db2_bass.mp3';
import keyD2 from '../sounds/D2_bass.mp3';
import keyEb2 from '../sounds/Eb2_bass.mp3';
import keyE2 from '../sounds/E2_bass.mp3';
import keyF2 from '../sounds/F2_bass.mp3';

import {WhiteKey} from './WhiteKey';
import {BlackKey} from './BlackKey';

const Wrapper = styled.div`
    outline: none;
    position: relative;
    height: 100vh;
    background: linear-gradient(to bottom, #FFA726, #E65100);
`;

const KeyboardWrapper = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    border: 5px solid #BF360C;
    border-radius: 5px;
    position: relative;
`;

const HeadingWrapper = styled.div`
    color: #BF360C;
    font-size: 4em;
    white-space: nowrap;
    margin-top: 80px;
    margin-bottom: 100px;
`;

const ContentWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


class Bass extends Component {
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
        return (
            <Wrapper tabIndex={0} ref='keyboard' onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp}>
                <ContentWrapper>
                    <HeadingWrapper>
                        Digital Keyboard
                    </HeadingWrapper>
                    <KeyboardWrapper>
                        <WhiteKey active={this.state.keys.A} text='A' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.S} text='S' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.D} text='D' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.F} text='F' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.G} text='G' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.H} text='H' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.J} text='J' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.K} text='K' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys.L} text='L' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys[';']} text=';' color='#FFB74D'/>
                        <WhiteKey active={this.state.keys["'"]} text="'" color='#FFB74D'/>
                        <BlackKey active={this.state.keys.W} text='W' left='24px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.E} text='E' left='60px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.T} text='T' left='132px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.Y} text='Y' left='168px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.U} text='U' left='204px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.O} text='O' left='276px' color='#FF6D00'/>
                        <BlackKey active={this.state.keys.P} text='P' left='312px' color='#FF6D00'/>
                    </KeyboardWrapper>
                    {this.props.children}
                </ContentWrapper>
            </Wrapper>
        );
    }
}

export default Bass;