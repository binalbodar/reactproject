import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    CartForm: [],
    error: ''
}

export const cartformReduser = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.GET_CARTFORM:
            return {
                ...state,
                isLoading: false,
                CartForm: action.payload,
                error: ''
            }
        case ActionTypes.ADD_CARTFORM:
            return {
                ...state,
                isLoading: false,
                CartForm: state.CartForm.concat(action.payload),
                error: ''
            }
        default:
            return state;
    }
}