import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Cart: [],
    error: ''
}

export const cartReduser = (state = initialstate, action)=>{
    switch(action.type){
        case ActionTypes.ADD_CART:
            return {
                ...state,
                isLoading: false,
                Cart: state.Cart.concat(action.payload),
                error: ''
            }
    }
}