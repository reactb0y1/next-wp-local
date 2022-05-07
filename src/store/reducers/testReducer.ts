const initialState = 0;

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'REMOVE':
            return state - 1
        default:
            return state
    }
}

export default testReducer
