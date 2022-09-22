import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Categoryview(props) {
    const [filter, setFilter] = useState([])
    const Category = useSelector(state => state.Category)

    useEffect(() => {
        let category_data = Category.Category.filter((c, i) => c.id === props.location.state.id)
        setFilter(category_data)
        console.log(category_data);
    }, [])

    return (
        <> 
            <h2>Categary</h2>
            {
                filter.map((a) => {
                    return (
                        <section>
                            <div>
                                <img src={a.url} alt="" className="" width="300px" my="5" />
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
