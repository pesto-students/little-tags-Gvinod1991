import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export const AppContext = React.createContext();
