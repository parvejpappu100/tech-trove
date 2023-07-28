import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProductsCard from '../ProductsCard/ProductsCard';

const OffersProducts = () => {

    const [offersProducts, setOffersProducts] = useState([]);

    useEffect(() => {
        fetch("offers.json")
            .then(res => res.json())
            .then(data => setOffersProducts(data))
    }, [])

    return (
        <div className='max-w-3xl mx-auto'>
            <SectionTitle title={"Special Offer"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
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