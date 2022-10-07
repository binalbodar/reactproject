import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncrementCounter, DecrementCounter, DeleteCart } from '../../Redux/Action/Cart.action'

function Addtocart(props) {
    const Filterdata = [];
    const Product = useSelector(state => state.Product)
    const Cart = useSelector(state => state.Cart)
    const dispatch = useDispatch()

    const handleIncrement = (id) => {
        dispatch(IncrementCounter(id))
    }

    const handleDecrement = (id) => {
        dispatch(DecrementCounter(id))
    }

    const handleDelete = (id) => {
        dispatch(DeleteCart(id))
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
            <h2>Add To Cart</h2>
            {
                Filterdata.map((C) => {
                    return (
                        <tr className='d-flex'>
                            <td><img src={C.url} alt="" width={200} /></td><hr />
                            <td>Name={C.name}</td><hr />
                            <td>Price={C.price}</td><hr />
                            <td>Quantity={C.qunty}</td><hr />
                            <td>Total={C.price * C.qunty}</td><hr />
                            <td><button onClick={() => handleIncrement(C.id)}>+</button></td><hr />
                            <td><button onClick={() => handleDecrement(C.id)}>-</button></td><hr />
                            <td><button onClick={() => handleDelete(C.id)}>Delete</button></td><hr />
                        </tr>
                    )
                })
            }
        </div>
    );
}

export default Addtocart;