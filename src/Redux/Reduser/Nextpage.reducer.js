import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Nextpage: [],
    error: ''
}

export const NextpageReduser = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_CART:
            return {
                ...state,
                isLoading: true,
                // Nextpage: [],
                error: ''
            }
        case ActionTypes.GET_CART:
            return {
                ...state,
                isLoading: false,
                Nextpage: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_CART:
            return {
                ...state,
                isLoading: false,
                Nextpage: [],
                error: action.payload
            }
        case ActionTypes.POST_CART:
            return {
                ...state,
                isLoading: false,
                Nextpage: state.Nextpage.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_CART:
            return {
                ...state,
                isLoading: false,
                Nextpage: state.Nextpage.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPADATE_CART:
            return {
                ...state,
                isLoading: false,
                Nextpage: state.Nextpage.map((l) => {
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