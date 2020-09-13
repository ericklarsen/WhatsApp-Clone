import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/index.scss'
import { StateProvider } from './Stateprovider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);