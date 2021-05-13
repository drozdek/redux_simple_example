let lastID = 0;

export default function reducer(state = [], action) {
    if (action.type === "BUG_ADD") {
        return [
            ...state,
            {
                description: action.payload.description,
                resolved: false,
                id: ++lastID
            }
        ]
    }

    // else if (action.type === "BUG_REMOVE") {
    //     return state.filter(bug => {
    //         bug.id !== action.payload.id
    //     })

    // }

    else if (action.type === "BUG_RESOLVE") {
        return state.map(bug => bug.id !== action.payload.id
            ?
                bug
            :
            {
                ...bug, resolved: true
            }
        )
    }

    else if (action.type === "BUG_INCREASE") {
        return state.map(bug => bug.id === action.payload.id
            ?
            {
                ...bug, id: 12
            }
            : ''
        )
    }

    return state
}