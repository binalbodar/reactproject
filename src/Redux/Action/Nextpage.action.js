import * as ActionTypes from "../ActionType"
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";

//GET CART

export const getNextform = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Cart"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_CART, payload: data })
    } catch (error) {
        dispatch(errorCart(error.message))
    }
}

//ERROR CART
export const errorCart = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_CART, payload: error })
}

//ADD CART
export const addNextform = (data) => async (dispatch) => {
    try {
        const randomdoc = Math.floor(Math.random() * 1000000).toString();
        const cartRef = ref(storage, 'cart/' + randomdoc);
        uploadBytes(cartRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Cart"), {
                            name: data.name,
                            surname: data.surname,
                            phone: data.phone
                        })
                        dispatch({
                            type: ActionTypes.POST_CART,
                            payload: {
                                id: docRef.id,
                                name: data.name,
                                surname: data.surname,
                                phone: data.phone
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch(errorCart(error.message))
    }
}

//DELETE CART
export const deleteNextform = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'cart/' + data.fileName);

        deleteObject(docRef)
            .then(async () => {
                await deleteDoc(doc(db, "Cart", data.id));
                dispatch({ type: ActionTypes.DELETE_CART, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorCart(error.message))
            });
    } catch (error) {
        dispatch(errorCart(error.message))
    }
}

//UPDATE CART
export const upadateNextform = (data) => async (dispatch) => {
    try {
        const cartRef = doc(db, "Cart", data.id);

        if (typeof data.file === "string") {
            await updateDoc(cartRef, {
                name: data.name,
                surname: data.surname,
                phone: data.phone
            });
            dispatch({ type: ActionTypes.UPADATE_CART, payload: data })

        } else {
            const docRef = ref(storage, 'cart/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const randomdoc = Math.floor(Math.random() * 1000000).toString();
                        const CartRefint = ref(storage, 'cart/' + randomdoc);
                        uploadBytes(CartRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(cartRef, {
                                            name: data.name,
                                            surname: data.surname,
                                            phone: data.phone
                                        });

                                        dispatch({
                                            type: ActionTypes.UPADATE_CART,
                                            payload: {
                                                ...data,
                                                name: data.name,
                                                surname: data.surname,
                                                phone: data.phone
                                            }
                                        })
                                    });
                            });
                    })
        }
    } catch (error) {
        dispatch(errorCart(error.message))
    }
}