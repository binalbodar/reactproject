import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Cart: [],
    error: ''
}

export const cartReduser = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.ADD_CART:
            return {
                ...state,
                isLoading: false,
                Cart: state.Cart.concat(action.payload),
                error: ''
            }
        default:
            return state;
    }
}