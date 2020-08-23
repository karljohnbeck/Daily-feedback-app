import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const feelingReducer = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    } else if (action.type === 'RESET_STATE') {
        return 0
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'RESET_STATE') {
        return 0
    }
    return state;
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    } else if (action.type === 'RESET_STATE') {
        return 0
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload
    } else if (action.type === 'RESET_STATE') {
        return ''
    }
    return state;
}

const feedbackDataReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_DATA') {
        return action.payload
    }
    return state
}

const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        feedbackDataReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
