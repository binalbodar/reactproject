import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Productview(props) {
    const [filterData, setFilterData] = useState([])
    const Product = useSelector(state => state.Product)

    console.log(Product, props.location.state.id);
    useEffect(() => {
        let product_data = Product.Product.filter((p, i) => p.id === props.location.state.id)
        setFilterData(product_data)
        console.log(product_data);
    }, [])

    return (
        <>
            <h2>Product</h2>
            {
                filterData.map((a) => {
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