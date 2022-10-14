import * as ActionTypes from "../ActionType"
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";

//GET CATEGORY

export const getCategory = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Category"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_CATEGORY, payload: data })
    } catch (error) {
        dispatch(errorCategory(error.message))
    }
}

//ERROR CATEGORY
export const errorCategory = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_CATEGORY, payload: error })
}

//ADD CATEGORY
export const addCategory = (data) => async (dispatch) => {
    try {
        const randomdoc = Math.floor(Math.random() * 1000000).toString();
        const categoryRef = ref(storage, 'category/' + randomdoc);
        uploadBytes(categoryRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Category"), {
                            name: data.name,
                            url: url,
                            fileName: randomdoc
                        })
                        dispatch({
                            type: ActionTypes.POST_CATEGORY,
                            payload: {
                                id: docRef.id,
                                name: data.name,
                                url: url,
                                fileName: randomdoc
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch(errorCategory(error.message))
    }
}

//DELETE CATEGORY
export const deleteCategory = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'category/' + data.fileName);

        deleteObject(docRef)
            .then(async () => {
                await deleteDoc(doc(db, "Category", data.id));
                dispatch({ type: ActionTypes.DELETE_CATEGORY, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorCategory(error.message))
            });
    } catch (error) {
        dispatch(errorCategory(error.message))
    }
}

//UPDATE CATEGORY
export const upadateCategory = (data) => async (dispatch) => {
    try {
        const categoryRef = doc(db, "Category", data.id);

        if (typeof data.file === "string") {
            await updateDoc(categoryRef, {
                name: data.name,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPADATE_CATEGORY, payload: data })

        } else {
            const docRef = ref(storage, 'category/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const randomdoc = Math.floor(Math.random() * 1000000).toString();
                        const CategoryRefint = ref(storage, 'category/' + randomdoc);
                        uploadBytes(CategoryRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(categoryRef, {
                                            name: data.name,
                                            fileName: randomdoc,
                                            url: url
                                        });

                                        dispatch({
                                            type: ActionTypes.UPADATE_CATEGORY,
                                            payload: {
                                                ...data,
                                                fileName: randomdoc,
                                                url: url
                                            }
                                        })
                                    });
                            });
                    })
        }
    } catch (error) {
        dispatch(errorCategory(error.message))
    }
}