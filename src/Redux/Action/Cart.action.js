import * as ActionTypes from "../ActionType"

export const addtoCart = (d) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_CART, payload: { id: d.id, qunty: 1 }
    })
}

export const DeleteCart = (id) => (dispatch) => {
    dispatch({
        type: ActionTypes.DELETE_CART, payload: id
    })
}

export const IncrementCounter = (id) => (dispatch) => {
    dispatch({
        type: ActionTypes.INCREMENT_COUNTER, payload: id
    })
}

export const DecrementCounter = (id) => (dispatch) => {
    dispatch({
        type: ActionTypes.DECREMENT_COUNTER, payload: id
    })
}

export const NextaddtocartAction = () => (dispatch) => {
    dispatch({
        type: ActionTypes.NEXT_ADDTOCART
    })
}