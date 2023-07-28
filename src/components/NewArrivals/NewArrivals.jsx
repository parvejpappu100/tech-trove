import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductsCard from '../ProductsCard/ProductsCard';

const NewArrivals = () => {

    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        fetch("arrivals.json")
            .then(res => res.json())
            .then(data => setNewProducts(data))
    }, [])
    console.log(newProducts)
    return (
        <div className='max-w-3xl mx-auto'>
            <SectionTitle title={"New Arrivals"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
                {
                    newProducts.map(newProduct => <ProductsCard
                    key={newProduct._id}
                    product={newProduct}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default NewArrivals;