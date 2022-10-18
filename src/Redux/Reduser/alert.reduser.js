import * as ActionTypes from "../ActionType"
const intialstate = {
    text: '',
    color: ''
}
export const alertReduser = (state = intialstate, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }
        case ActionTypes.RESET_ALERT:
            return {
                ...state,
                text: '',
                color: ''
            }
        default:
            return state;
    }
}