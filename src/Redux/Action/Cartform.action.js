import { collection, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import * as ActionTypes from "../ActionType"

//GET CARTFORM
export const getCartform = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDoc(collection(db, "Order"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_CARTFORM, payload: data })
    } catch (error) {
        dispatch(errorCartform(error.message))
    }
}

//ERROR CARTFORM
export const errorCartform = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_CARTFORM, payload: error })
}

//ADD CARTFORM
export const addCartform = (d) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_CARTFORM, payload: { id: d.id, qunty: 1 }
    })
}
