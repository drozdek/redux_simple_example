import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './components/TextBox.js';

class App extends React.Component {
    render() {
        return (            
            <div>
                <TextBox />
                Hello World and Rafalek :)</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);