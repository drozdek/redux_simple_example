import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
    const count = useSelector(state => state.counterReducer);
    const logged = useSelector(state => state.loggedReducer);
    return (
        <div className="App">
            <p>Counter is: {count}</p>
        </div>
    )
}

export default App;