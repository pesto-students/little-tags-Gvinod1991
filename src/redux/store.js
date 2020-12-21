import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './reducers/index';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);