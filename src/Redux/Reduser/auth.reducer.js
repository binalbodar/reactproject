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
        default:
            return state;
    }
}