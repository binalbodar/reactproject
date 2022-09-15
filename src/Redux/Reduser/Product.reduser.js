import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Product: [],
    error: ''
}

export const ProductReduser = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_PRODUCT:
            return {
                ...state,
                isLoading: true,
                // Product: [],
                error: ''
            }
        case ActionTypes.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: [],
                error: action.payload
            }
        case ActionTypes.POST_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: state.Product.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: state.Product.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPADATE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                Product: state.Product.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    } else {
                        return l
                    }
                }),
                error: ''
            }
        default:
            return state;
    }
}