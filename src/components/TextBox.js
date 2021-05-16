import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../actions/actions';


function TextBox() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch( increment())}>+++</button>
            TextBox { counter}
        </div>
    )

}

export default TextBox;