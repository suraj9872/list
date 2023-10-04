import React, { useState, useEffect } from 'react';


export default function Product() {
    const [data, setData] = useState([]);
    const [fliter, setFliter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFliter(await response.json());
                setLoading(false);
                console.log(fliter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }
    const ShowProducts = () => {

        return (
            <>
                <div className="buttons ">
                    <div className="button btn btn-outline-dark me-2">ALL</div>
                    <div className="button btn btn-outline-dark me-2">New York</div>
                    <div className="button btn btn-outline-dark me-2">Mumbai</div>
                    <div className="button btn btn-outline-dark me-2">Paris</div>
                    <div className="button btn btn-outline-dark me-2">London</div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row justify-content-center">

                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
