import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettoCart } from '../../Redux/Action/Cart.action';

function Addtocart(props) {  
    const Filterdata = [];
    const Product = useSelector(state => state.Product)
    const Cart = useSelector(state => state.Cart)

    Cart.Cart.map(C => Product.Product.map((P)=>{
        if(C.id === P.id){
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
                Filterdata.map((C)=>{
                    return(
                        <tr className='row'>
                            <td><img src={C.url} alt="" width={200}/></td><hr/>
                            <td>Name={C.name}</td><hr/>
                            <td>Price={C.price}</td><hr/>
                            <td>Quantity={C.qunty}</td><hr/>
                        </tr>
                    )
                })
            }
        </div>
    );
}

export default Addtocart;