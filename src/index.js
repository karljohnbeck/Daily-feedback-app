import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import logger from 'redux-logger'

const inputReducer = (state = [], action) => {
    return state;
}

const store = createStore(
    combineReducers({
        inputReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
