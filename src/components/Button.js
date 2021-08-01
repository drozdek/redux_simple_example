import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';


function Button() {
    const counter = useSelector(state => state.counter)
    const islogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            counter is: {counter} <br />
            isLogged is: {islogged === true ? 'is logged' : 'not logged'}
        </div>
    )

}
export default Button;