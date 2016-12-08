/**
 * Created by erik on 05/12/2016.
 */
import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import App from './App'
import reducer from '../actions'

const store = createStore(
    reducer,
    {isCalculating: false, result: undefined},
    compose(
        applyMiddleware(thunkMiddleware)
    )
);


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
