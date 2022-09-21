import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Categoryview(props) {
    const Category = useSelector(state => state.Category)
    const dispatch = useDispatch()

    useEffect(() => {
        function func() {
            var filtered = [props.location.state.id, Category];
            console.log(filtered);
        }
        func();
        console.log(props.location.state.id, Category);
    },[])

    return (
        <>
            <h2>Categary</h2>
            {
                Category.Category.map((a) => {
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
