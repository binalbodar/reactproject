import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartform } from '../../Redux/Action/Cartform.action';

function Cartformdisplay(props) {
    const Filterdata = [];
    const CartForm = useSelector(state => state.CartForm) 
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getCartform())
        },
        [])

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
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                {
                    Filterdata.map((D, C) => {
                        return (
                            <tr>
                                <td><img src={C.url} alt="" width={100} /></td>
                                <td>{D.name}</td>
                                <td>{D.email}</td>
                                <td>{D.phone}</td>
                                <td>{D.address}</td>
                                <td>{C.price}</td>
                                <td>{C.qunty}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Cartformdisplay;