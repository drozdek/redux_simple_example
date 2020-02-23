import React from 'react';
import loggedReducer from './logged';
import counterReducer  from './counter';

import { combineReducers } from 'redux';

const myReducers = combineReducers({
    loggedReducer,
    counterReducer
});

export default myReducers;