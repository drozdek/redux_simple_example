/**
 * @method counter reducer
 * @param {int} state 
 * @param {function} action 
 */
const counterReducer = (state = 4, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state
    }
}

export default counterReducer;