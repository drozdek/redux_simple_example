import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './components/TextBox.js';
import { createStore } from 'redux';
import { increment, decrement } from './actions/actions';
import { Provider } from 'react-redux';
import { allReducers } from './reducers';

let s = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



// dispatch
// wotking version with no hooking up to react yet
s.dispatch(increment());
console.log(s.getState())
s.dispatch(increment());
s.dispatch(increment());
console.log(s.getState())
s.dispatch(decrement());
console.log(s.getState())
//  s.subscribe( () => console.log(s.getState()))

// display
// console.log(store.dispatch(store.getState()))

ReactDOM.render(
    <Provider store={s}>
        <TextBox />,
    </Provider>,
    document.getElementById('app')
);