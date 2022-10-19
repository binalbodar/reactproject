import * as ActionTypes from "../ActionType"
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
//GET DATA
export const getOrder = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Order"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_DATA, payload: data })
    } catch (error) {
        dispatch(errorOrder(error.message))
    }
}

//ERROR DATA
export const errorOrder = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_DATA, payload: error })
}

//ADD DATA
export const addOrder = (data) => async (dispatch) => {
    console.log("dddddddddddddddddddddd", data);
    try {
        const randomdoc = Math.floor(Math.random() * 1000000).toString();
        const orderRef = ref(storage, 'order/' + randomdoc);
        uploadBytes(orderRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Order"), {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            address: data.address,
                            data: data.data
                        })
                        dispatch({
                            type: ActionTypes.POST_DATA,
                            payload: {
                                name: data.name,
                                email: data.email,
                                phone: data.phone,
                                address: data.address,
                                data: data.data
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch(errorOrder(error.message))
    }
}

//DELETE DATA
export const deleteOrder = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'order/' + data.fileName);

        deleteObject(docRef)
            .then(async () => {
                await deleteDoc(doc(db, "Order", data.id));
                dispatch({ type: ActionTypes.DELETE_DATA, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorOrder(error.message))
            });
    } catch (error) {
        dispatch(errorOrder(error.message))
    }
}

//UPDATE DATA
export const upadateOrder = (data) => async (dispatch) => {
    try {
        const orderRef = doc(db, "Order", data.id);

        if (typeof data.file === "string") {
            await updateDoc(orderRef, {
                name: data.name,
                price: data.price,
                discription: data.discription,
                category_id: data.category_id,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPADATE_DATA, payload: data })

        } else {
            const docRef = ref(storage, 'order/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const randomdoc = Math.floor(Math.random() * 1000000).toString();
                        const OrderRefint = ref(storage, 'order/' + randomdoc);
                        uploadBytes(OrderRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(orderRef, {
                                            name: data.name,
                                            email: data.email,
                                            phone: data.phone,
                                            address: data.address,
                                        });

                                        dispatch({
                                            type: ActionTypes.UPADATE_DATA,
                                            payload: {
                                                ...data,
                                                name: data.name,
                                                email: data.email,
                                                phone: data.phone,
                                                address: data.address,
                                            }
                                        })
                                    });
                            });
                    })
        }
    } catch (error) {
        dispatch(errorOrder(error.message))
    }
}