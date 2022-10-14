import * as ActionTypes from "../ActionType"
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";


//SIGN UP
export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:data})
}

export const emailVerificaton = (data) => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERYFICATON, payload:data})
}

//LOGIN
export const loginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_USER, payload: data})
}

export const alertloginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_LOGD, payload: data})
} 

//LOGOUT 
export const logoutAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_USER})
}

export const logoutlogedAction = () => (dispatch) => {
    dispatch({type: ActionTypes.LOGOUT_LOGED})
}

//GOOGLE SIGNUP
export const googlesignupAction = () => (dispatch) => {
    dispatch({type: ActionTypes.GOOGLE_SIGNUP})
}

//FORGET PASSWORD
export const forgetPassowrdAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.FORGET_PASSWORD, payload: data})
}

//DATA ACTION
export const dataAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.FORM_DATA, payload: data})
}

//SUBMIT ACTION
export const submitAction = () => (dispatch) => {
    dispatch({type: ActionTypes.SUBMIT_DATA})
}

//GET DATA

export const getData = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Data"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_DATA, payload: data })
    } catch (error) {
        dispatch(errorData(error.message))
    }
}

//ERROR DATA
export const errorData = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_DATA, payload: error })
}

//ADD DATA
export const addData = (data) => async (dispatch) => {
    try {
        const randomdoc = Math.floor(Math.random() * 1000000).toString();
        const dataRef = ref(storage, 'data/' + randomdoc);
        uploadBytes(dataRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Data"), {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            address: data.address,
                        })
                        dispatch({
                            type: ActionTypes.POST_DATA,
                            payload: {
                                id: docRef.id,
                                name: data.name,
                                email: data.email,
                                phone: data.phone,
                                address: data.address,
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch(errorData(error.message))
    }
}

//DELETE DATA
export const deleteData = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'data/' + data.fileName);

        deleteObject(docRef)
            .then(async () => {
                await deleteDoc(doc(db, "Data", data.id));
                dispatch({ type: ActionTypes.DELETE_DATA, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorData(error.message))
            });
    } catch (error) {
        dispatch(errorData(error.message))
    }
}

//UPDATE DATA
export const upadateData = (data) => async (dispatch) => {
    try {
        const dataRef = doc(db, "Data", data.id);

        if (typeof data.file === "string") {
            await updateDoc(dataRef, {
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
            });
            dispatch({ type: ActionTypes.UPADATE_DATA, payload: data })

        } else {
            const docRef = ref(storage, 'data/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const randomdoc = Math.floor(Math.random() * 1000000).toString();
                        const DataRefint = ref(storage, 'data/' + randomdoc);
                        uploadBytes(DataRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(dataRef, {
                                            name: data.name,
                                            email: data.email,
                                            phone: data.phone,
                                            address: data.address,
                                        });

                                        dispatch({
                                            type: ActionTypes.UPADATE_DATA,
                                            payload: {
                                                ...data,
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
        dispatch(errorData(error.message))
    }
}