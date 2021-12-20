import * as types from './actionTypes';

const initialState = {
    loading: false,
    basket: [],
    user: null,
    error: null
}

const basketReducer = (state = initialState, action) => {
    switch (types) {
        case types.REGISTER_START : 
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user : action.payload
            }
        case types.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error : action.payload
            }
        default:
            return state
    }
}

export default basketReducer;