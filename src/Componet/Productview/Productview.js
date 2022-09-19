import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCategory } from '../../Redux/Action/Categary.action';

function Productview(props) {
    const Category = useSelector(state => state.Category)
    const dispatch = useDispatch()
    const Product = useSelector(state => state.Product)

    useEffect(() => {
        dispatch(getCategory())
    })

    return (
        <>
            <h2>Categary</h2>
            {
                Category.Category.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt className width="100px" my="5" />
                                <h4 className='d-flex'>{a.name}</h4>
                                <NavLink to={{
                                    pathname: '/Home',
                                    state: { id: "" }
                                }}>
                                    Categary Page
                                </NavLink>
                            </div>
                        </section>
                    )
                })
            }

            <hr />

            <h2>Product</h2>
            {
                Product.Product.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt className width="100px" my="5" />
                                <h4 className='d-flex'>{a.name}</h4>
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
}

export default Productview;