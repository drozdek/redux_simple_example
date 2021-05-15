import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './components/TextBox.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <TextBox />
                <p>Hello World :)</p>
            </div>
        )
    }
}

ReactDOM.render(
        <App />,
    document.getElementById('app')
);