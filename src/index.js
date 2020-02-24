import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { inc, dec } from './actions';

// 1. store
import { createStore } from 'redux';
import myReducers from './reducers';

const store = createStore(
    myReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// trigger action inc() - increment by 1
store.dispatch(inc());

// trigger action dec() - decrement by 1 
store.dispatch(dec());

//connect my app to global redux store 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
