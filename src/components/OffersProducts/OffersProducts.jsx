import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductsCard from '../ProductsCard/ProductsCard';

const OffersProducts = () => {

    const [offersProducts, setOffersProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(res => res.json())
            .then(data => setOffersProducts(data))
    }, [])

    return (
        <div className=''>
            <SectionTitle title={"Special Offer"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:container  mx-auto gap-8 '>
                {
                    offersProducts.map(offerProduct => <ProductsCard
                        key={offerProduct._id}
                        product={offerProduct}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default OffersProducts;