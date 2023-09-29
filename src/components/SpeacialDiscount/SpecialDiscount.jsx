import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SpecialDiscount = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/discount")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='lg:container px-4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                products.map(product => <div key={product._id}>
                    <div className="card lg:card-side bg-[#F0E9EA] rounded-none p-5">
                        <img className='md:w-[300px] md:h-[260px] ' src={product.img} alt="Laptop" />
                        <div className="card-body">
                            <h2 className="card-title">{product.title}</h2>
                            <p>{product.reason}</p>
                            <div className="card-actions mt-9 ">
                                <Link to={`/shop/${product.category}`}>
                                    <button className='btn  bg-[#113366] border-none rounded-none text-white lg:px-8 hover:bg-white hover:text-black duration-500'>
                                        <FaShoppingCart></FaShoppingCart>
                                        <span>Shop Now</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SpecialDiscount;