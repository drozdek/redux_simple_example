# redux_simple_example
Redux simple example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Actions

There are 2 actions created:
    inc() - incrementing state value by 1
    dec() - decrementing state value by 1

### Reducers

We must read an action type in order to trigger correct behaviour:

    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state
    }

### Store

Alredy created reducer must be passed to store.

### Dispatching 

To see the state value increased lets dispatch an action:

    store.dispatch(inc());
    store.dispatch(dec());

### Connecting store to the app

Pass store to the Provider

    <Provider store={store}>
    
### Consuming store / dispaying states value

Import useSelector from 'react-redux' package, and read up a redux state.

    const count = useSelector(state => state.counterReducer);
    
 display count as a normal variable: 
 
     {count} 
