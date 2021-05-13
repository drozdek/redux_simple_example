import store from './store';

// calls always on suvscrtigbe
store.subscribe(() => {
    console.log("store changed", JSON.stringify(store.getState()))
})


// 1.
store.dispatch({
    type: 'BUG_ADD',
    payload: {
        description: 'some coool description Rafal :)'
    }
}
);

console.log('adding: ')
// console.log(store.getState())


// 2.
store.dispatch(
    {
        type: 'BUG_RESOLVE',
        payload: {
            id: 1
        }
    }
);
console.log("resolving: ")
// console.log(store.getState())

// 3.0
store.dispatch(
    {
        type: 'BUG_REMOVE',
        payload: {
            id: 1
        }
    }
);
console.log("removing: ")
// console.log(store.getState())

// 4

store.dispatch(
    {
        type: "BUG_INCREASE",
        payload: {
            id: 1
        }
    }
)

// console.log('increase')
// console.log(store.getState())