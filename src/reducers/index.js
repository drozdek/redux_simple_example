import React from 'react';
import loggedReducer from './logged';
import counterReducer  from './counter';

import { combineReducers } from 'redux';

/**
 * combine reducers
 */
const myReducers = combineReducers({
    loggedReducer,
    counterReducer
});

export default myReducers;