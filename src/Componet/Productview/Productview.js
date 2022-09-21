import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCategory } from '../../Redux/Action/Categary.action';

function Productview(props) {
    const dispatch = useDispatch()
    const Product = useSelector(state => state.Product)

    useEffect(() => {
        console.log(props.location.state.id,Product);
        
    },[])

    return (
        <>
            <h2>Product</h2>
            {
                Product.Product.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt className width="300px" my="5" />
                                <h4 className='d-flex'>Name={a.name}</h4>
                                <h4 className='d-flex'>Price={a.price}</h4>
                                <h4 className='d-flex'>Discription={a.discription}</h4>
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
}

export default Productview;