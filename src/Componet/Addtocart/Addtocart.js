import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { gettoCart } from '../../Redux/Action/Cart.action';

function Addtocart(props) {
    const Cart = useSelector(state => state.Cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(gettoCart())
    }, [])
    return (
        <div>
            {
                Cart.Cart.map((a) => {
                    return (
                        <section>
                            <div className="d-flex row">
                                <NavLink to={{
                                    pathname: '/categoryview',
                                    state: { id: a.id }
                                }}>
                                    <img src={a.url} alt="" className="d-flex rounded img-fluid border category-imag" width="180px" />
                                </NavLink>
                                <h4 className='text-center mt-3 mb-3'>{a.name}</h4>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    );
}

export default Addtocart;