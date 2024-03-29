import * as ActionTypes from "../ActionType"

const initialstate = {
    isLoading: false,
    Cart: [],
    error: ''
}

export const cartReduser = (state = initialstate, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.ADD_CART:
            let findPro = state.Cart.find((c) => c.id === action.payload.id);

            if (findPro) {
                findPro.qunty++;

                let incQunPro = state.Cart.map((c) => {
                    if (c.id === findPro.id) {
                        return findPro
                    } else {
                        return c;
                    }
                })
                return {
                    ...state,
                    isLoading: false,
                    Cart: incQunPro,
                    error: ''
                }
            } else {
                return {
                    ...state,
                    isLoading: false,
                    Cart: state.Cart.concat(action.payload),
                    error: ''

                }
            }
        case ActionTypes.DELETE_CART:
            return {
                ...state,
                isLoading: false,
                Cart: state.Cart.filter((d) => d.id !== action.payload),
                error: ''
            }

        case ActionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                Cart: state.Cart.map((C, i) => {
                    if (C.id === action.payload) {
                        return {
                            id: C.id,
                            qunty: C.qunty + 1
                        }
                    }
                    else {
                        return C
                    }
                })
            }

        case ActionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                Cart: state.Cart.map((C, i) => {
                    if (C.id === action.payload) {
                        return {
                            id: C.id,
                            qunty: C.qunty - 1
                        }
                    }
                    else {
                        return C
                    }
                })
            }

        default:
            return state;
    }
}