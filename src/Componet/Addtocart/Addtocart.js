import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IncrementCounter, DecrementCounter, DeleteCart, NextaddtocartAction } from '../../Redux/Action/Cart.action'

function Addtocart(props) {
    const Filterdata = [];
    const Product = useSelector(state => state.Product)
    const Cart = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    const history = useHistory();

    const handleIncrement = (id) => {
        dispatch(IncrementCounter(id))
    }

    const handleDecrement = (id) => {
        dispatch(DecrementCounter(id))
    }

    const handleDelete = (id) => {
        dispatch(DeleteCart(id))
    }

    const handleNext = (a) => {
        dispatch(NextaddtocartAction(a))
        history.push("/nextaddtocart", a)
    }

    Cart.Cart.map(C => Product.Product.map((P) => {
        if (C.id === P.id) {
            const data = {
                ...P,
                qunty: C.qunty
            }
            Filterdata.push(data)

        }
    }))

    return (
        <div>
            <h2 className='text-center mb-5 mt-5'>Add To Cart</h2>

            <table className='table table-success table-bordered border-success'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Plus</th>
                        <th>Minas</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                {
                    Filterdata.map((C) => {
                        return (
                            <tr>
                                <td><img src={C.url} alt="" width={100} /></td>
                                <td>{C.name}</td>
                                <td>{C.price}</td>
                                <td>{C.qunty}</td>
                                <td>{C.price * C.qunty}</td>
                                <td><button class="rounded-3 border border-2 border-dark" onClick={() => handleIncrement(C.id)}>+</button></td>
                                <td><button class="rounded-3 border border-2 border-dark" onClick={() => handleDecrement(C.id)}>-</button></td>
                                <td><button class="rounded-3 border border-2 border-dark" onClick={() => handleDelete(C.id)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </table>
            <button class="btn btn-success me-5" type='button' onClick={() => handleNext()}>Next</button>
        </div>
    );
}

export default Addtocart;