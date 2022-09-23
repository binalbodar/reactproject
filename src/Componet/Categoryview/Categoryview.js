import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Categoryview(props) {
    const [filter, setFilter] = useState([])
    const Product = useSelector(state => state.Product)

    useEffect(() => {
        let Product_data = Product.Product.filter((c, i) => c.category_id === props.location.state.id)
        setFilter(Product_data)
    }, [])

    return (
        <>
            <h2>Categary</h2>
            {
                filter.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt="" className="" width="200px" my="5" />
                                <h4 className='d-flex'>Name={a.name}</h4>
                            </div>
                        </section>
                    )
                })
            }
        </>
    );
}

export default Categoryview;
