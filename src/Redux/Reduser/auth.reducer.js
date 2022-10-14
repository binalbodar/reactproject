import * as ActionTypes from "../ActionType"
const intialstate = {
    isLoading: false,
    user: null,
    error: ''
}
export const authReducer = (state = intialstate, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_LOGD:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGOUT_LOGED:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
            case ActionTypes.LOADING_DATA:
            return {
                ...state,
                isLoading: true,
                // user: [],
                error: ''
            }
        case ActionTypes.GET_DATA:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.ERROR_DATA:
            return {
                ...state,
                isLoading: false,
                user: [],
                error: action.payload
            }
        case ActionTypes.POST_DATA:
            return {
                ...state,
                isLoading: false,
                user: state.user.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_DATA:
            return {
                ...state,
                isLoading: false,
                user: state.user.filter((d) => d.id !== action.payload),
                error: ''
            }
        case ActionTypes.UPADATE_DATA:
            return {
                ...state,
                isLoading: false,
                user: state.user.map((l) => {
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
