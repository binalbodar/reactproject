import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Addtocart from '../Addtocart/Addtocart';

function Productview(props) {
    const [filterData, setFilterData] = useState([])
    const Product = useSelector(state => state.Product)
    // const history = useHistory();
    // const dispatch = useDispatch()
    useEffect(() => {
        let product_data = Product.Product.filter((p, i) => p.id === props.location.state.id)
        setFilterData(product_data)
    }, [])

    //ADD TO CART
    // const addToCart = (a) => {
    //     dispatch(Addtocart(a))
    //     history.push("/addtocart",a)
    // }

    return (
        <>
            <h2>Product</h2>
            {
                filterData.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt className width="300px" my="5" /> <hr/>
                                <h4 className='d-flex'>Name={a.name}</h4> <hr/>
                                <h4 className='d-flex'>Price={a.price}</h4> <hr/>
                                <h4 className='d-flex'>Discription={a.discription}</h4> <hr/>
                            </div>
                            {/* <button className='btn btn-success me-5' type='button' onClick={() => addToCart(a)}>Add To Cart</button> */}
                        </section>
                    )
                })
            }
        </>
    );
}

export default Productview;