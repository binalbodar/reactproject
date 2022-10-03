import * as ActionTypes from "../ActionType"

export const addtoCart = (d) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_CART, payload: {id: d.id, qunty: 1}
    })
}