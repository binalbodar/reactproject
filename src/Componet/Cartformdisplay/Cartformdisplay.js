import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartform } from '../../Redux/Action/Cartform.action';

function Cartformdisplay(props) {
    const CartForm = useSelector(state => state.Cartform)
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getCartform())
        },
        [])

    console.log(CartForm);

    return (
        <div>
            <h2 className='text-center mb-5 mt-5'>Cart-Form</h2>

            <table className='table table-success table-bordered border-success'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {
                    CartForm.CartForm.map((C) => {
                        return (
                            <tr>
                                {C.data.map((D) => {
                                    return (
                                        <>
                                            <td><img src={D.url} alt="" width={100} /></td>
                                            <td>{C.name}</td>
                                            <td>{C.email}</td>
                                            <td>{C.phone}</td>
                                            <td>{C.address}</td>
                                            <td>{D.qunty}</td>
                                            <td>{D.price}</td>
                                        </>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Cartformdisplay;