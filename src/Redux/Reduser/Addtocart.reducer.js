import * as ActionTypes from "../ActionType"

const intialstate = {
    isLoading: false,
    data: null,
    error: ''
}
export const addtocartReducer = (state = intialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOADING_DATA:
            return {
                ...state,
                isLoading: true,
                // data: [],
                error: ''
            }
        case ActionTypes.GET_DATA:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_DATA:
            return {
                ...state,
                isLoading: false,
                data: [],
                error: action.payload
            }
        case ActionTypes.POST_DATA:
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_DATA:
            return {
                ...state,
                isLoading: false,
                data: state.data.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPADATE_DATA:
            return {
                ...state,
                isLoading: false,
                data: state.data.map((l) => {
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
