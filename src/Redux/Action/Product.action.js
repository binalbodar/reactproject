import * as ActionTypes from "../ActionType"
import { collection, addDoc, doc, deleteDoc, updateDoc, getDocs } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";

//GET PRODUCT

export const getProduct = () => async (dispatch) => {
    try {
        let data = [];
        const querySnapshot = await getDocs(collection(db, "Product"));
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
        });
        dispatch({ type: ActionTypes.GET_PRODUCT, payload: data })
    } catch (error) {
        dispatch(errorProduct(error.message))
    }
}

//ERROR PRODUCT
export const errorProduct = (error) => (dispach) => {
    dispach({ type: ActionTypes.ERROR_PRODUCT, payload: error })
}

//ADD PRODUCT
export const addProduct = (data) => async (dispatch) => {
    try {
        const randomdoc = Math.floor(Math.random() * 1000000).toString();
        const productRef = ref(storage, 'product/' + randomdoc);
        uploadBytes(productRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Product"), {
                            name: data.name,
                            price: data.price,
                            discription: data.discription,
                            url: url,
                            fileName: randomdoc
                        })
                        dispatch({
                            type: ActionTypes.POST_PRODUCT,
                            payload: {
                                id: docRef.id,
                                name: data.name,
                                price: data.price,
                                discription: data.discription,
                                url: url,
                                fileName: randomdoc
                            }
                        })
                    });
            });
    } catch (error) {
        dispatch(errorProduct(error.message))
    }
}

//DELETE PRODUCT
export const deleteProduct = (data) => async (dispatch) => {
    try {
        const docRef = ref(storage, 'product/' + data.fileName);

        deleteObject(docRef)
            .then(async () => {
                await deleteDoc(doc(db, "Product", data.id));
                dispatch({ type: ActionTypes.DELETE_PRODUCT, payload: data.id })
            })
            .catch((error) => {
                dispatch(errorProduct(error.message))
            });
    } catch (error) {
        dispatch(errorProduct(error.message))
    }
}

//UPDATE PRODUCT
export const upadateProduct = (data) => async (dispatch) => {
    try {
        const productRef = doc(db, "Product", data.id);

        if (typeof data.file === "string") {
            await updateDoc(productRef, {
                name: data.name,
                price: data.price,
                discription: data.discription,
                url: data.url
            });
            dispatch({ type: ActionTypes.UPADATE_PRODUCT, payload: data })

        } else {
            const docRef = ref(storage, 'product/' + data.fileName);
            deleteObject(docRef)
                .then(
                    async () => {
                        const randomdoc = Math.floor(Math.random() * 1000000).toString();
                        const ProductRefint = ref(storage, 'product/' + randomdoc);
                        uploadBytes(ProductRefint, data.file)
                            .then((snapshot) => {
                                getDownloadURL(snapshot.ref)
                                    .then(async (url) => {
                                        await updateDoc(productRef, {
                                            name: data.name,
                                            price: data.price,
                                            discription: data.discription,
                                            fileName: randomdoc,
                                            url: url
                                        });

                                        dispatch({
                                            type: ActionTypes.UPADATE_PRODUCT,
                                            payload: {
                                                ...data,
                                                price: data.price,
                                                discription: data.discription,
                                                fileName: randomdoc,
                                                url: url
                                            }
                                        })
                                    });
                            });
                    })
        }
    } catch (error) {
        dispatch(errorProduct(error.message))
    }
}