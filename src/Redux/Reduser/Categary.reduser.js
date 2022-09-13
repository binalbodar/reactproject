import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Category: [],
    error: ''
}

export const categoryReducer = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_CATEGORY:
            return {
                ...state,
                isLoading: true,
                // Category: [],
                error: ''
            }
        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Category: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Category: [],
                error: action.payload
            }
        case ActionTypes.POST_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Category: state.Category.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Category: state.Category.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPADATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                Category: state.Category.map((l) => {
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