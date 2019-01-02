import React from 'react'
import PhInput from './inputs/pH-input/pH-input';
import MoaInput from './inputs/MoA-input/moa-input';
import MobInput from './inputs/MoB-input/mob-input';

export class App extends React.Component {
    render() {
        return (
            <div>
                <PhInput name="PhInput"/>
                <MoaInput name="MoaInput" />
                <MobInput name="MobInput" />
            </div>
        )
    }
}