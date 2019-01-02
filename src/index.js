import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhInput from './inputs/pH-input/pH-input.tsx';
import * as serviceWorker from './serviceWorker';
import YoComponent from './yocomponent'

ReactDOM.render(
    <PhInput />,
    document.getElementById('root')
)
/* ReactDOM.render(
    <YoComponent />,
    document.getElementById('root')
) 
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

