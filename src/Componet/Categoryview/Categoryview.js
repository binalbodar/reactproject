import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addtoCart } from '../../Redux/Action/Cart.action';

function Categoryview(props) {
    const [filter, setFilter] = useState([])
    const Product = useSelector(state => state.Product)
    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        let Product_data = Product.Product.filter((c, i) => c.category_id === props.location.state.id)
        setFilter(Product_data)
    }, [])

    const addToCart = (a) => {
        dispatch(addtoCart(a))
        history.push("/addtocart", a)
    }

    return (
        <>
            <h2>Add To Cart</h2>
            {
                filter.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt="" className="" width="200px" my="5" /> <hr/>
                                <h4 className='d-flex'>Name={a.name}</h4> <hr/> 
                                <h4 className='d-flex'>Price={a.price}</h4> <hr/>
                                <h4 className='d-flex'>Discription={a.discription}</h4> <hr/>
                                <button className='btn btn-success me-5' type='button' onClick={() => addToCart(a)}>Add To Cart</button>
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
}

export default Categoryview;
