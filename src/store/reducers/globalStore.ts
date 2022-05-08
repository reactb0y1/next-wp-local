const initialState = {};

const globalStore = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STORE':
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

export default globalStore
