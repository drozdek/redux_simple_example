import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {

    /**
     * display redux state obj
     */
    const count = useSelector(state => state.counterReducer);
    return (
        <div className="App">
            <p>Counter is: {count}</p>
        </div>
    )
}

export default App;