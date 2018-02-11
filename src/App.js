import React, { Component } from 'react';
import styled from 'styled-components';

import ElectricImg from './images/electric.png';
import BassImg from './images/bass.png';
import PianoImg from './images/piano.png';

import ElectricPiano from './components/ElectricPiano';
import Bass from './components/Bass';
import GrandPiano from './components/GrandPiano';
import {InstrumentChoice} from "./components/InstrumentChoice";


const ChoiceWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;
class App extends Component {
    constructor () {
        super();
        this.state = {
            instrument: 'Electric Piano'
        };
    };

    changeInstrument = (name) => {
        this.setState({instrument: name})
    };

    renderKeyboard () {
        if (this.state.instrument === 'Electric Piano') {
            return (
                <ElectricPiano>
                    <ChoiceWrapper>
                        <InstrumentChoice name='Electric Piano' handleClick={this.changeInstrument} active
                                          color='#D500F9, #6200EA' img={ElectricImg} w='55px' h='55px'/>
                        <InstrumentChoice name='Bass' handleClick={this.changeInstrument}
                                          color='#FFA726, #E65100' img={BassImg} w='50px' h='50px'/>
                        <InstrumentChoice name='Grand Piano' handleClick={this.changeInstrument}
                                          color='#B2FF59, #1B5E20' img={PianoImg} w='50px' h='50px'/>
                    </ChoiceWrapper>
                </ElectricPiano>
            );
        }
        else if (this.state.instrument === 'Bass') {
            return (
                <Bass>
                    <ChoiceWrapper>
                        <InstrumentChoice name='Electric Piano' handleClick={this.changeInstrument}
                                          color='#D500F9, #6200EA' img={ElectricImg} w='55px' h='55px'/>
                        <InstrumentChoice name='Bass' handleClick={this.changeInstrument} active
                                          color='#FFA726, #E65100' img={BassImg} w='50px' h='50px'/>
                        <InstrumentChoice name='Grand Piano' handleClick={this.changeInstrument}
                                          color='#B2FF59, #1B5E20' img={PianoImg} w='50px' h='50px'/>
                    </ChoiceWrapper>
                </Bass>
            );
        }
        else if (this.state.instrument === 'Grand Piano') {
            return (
                <GrandPiano>
                    <ChoiceWrapper>
                        <InstrumentChoice name='Electric Piano' handleClick={this.changeInstrument}
                                          color='#D500F9, #6200EA' img={ElectricImg} w='55px' h='55px'/>
                        <InstrumentChoice name='Bass' handleClick={this.changeInstrument}
                                          color='#FFA726, #E65100' img={BassImg} w='50px' h='50px'/>
                        <InstrumentChoice name='Grand Piano' handleClick={this.changeInstrument} active
                                          color='#B2FF59, #1B5E20' img={PianoImg} w='50px' h='50px'/>
                    </ChoiceWrapper>
                </GrandPiano>
            );
        }
    };

    render() {
        return (
            <div>
                {this.renderKeyboard()}
            </div>
        );
    }
}

export default App;
