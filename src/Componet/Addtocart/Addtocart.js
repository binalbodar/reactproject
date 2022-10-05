import React from 'react';
import { useSelector } from 'react-redux';

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
    console.log(Filterdata);
    
    return (
        <div>
            {
                Filterdata.map((C)=>{
                    return(
                        <tr>
                            {/* <td><img src={C.url} alt="" width={100}></td> */}
                            <td>{C.name}</td>
                            <td>{C.price}</td>
                        </tr>
                    )
                })
            }
        </div>
    );
}

export default Addtocart;