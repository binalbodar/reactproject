import * as ActionTypes from "../ActionType"

export const gettoCart = () => (dispatch) => {
    dispatch({
        type: ActionTypes.GET_CART
    })
}

export const addtoCart = (d) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_CART, payload: { id: d.id, qunty: 1 }
    })
}