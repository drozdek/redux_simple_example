/**
 * increment state by 1
 **/ 
const inc = () => {
    return {
        type: 'INC'
    }
}

/**
 * decrement state by 1
 **/ 
const dec = () => {
    return {
        type: 'DEC'
    }
}

/**
 * export named components
 */
export { inc, dec };