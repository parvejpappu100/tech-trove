import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import BestSellers from '../../components/BestSellers/BestSellers';

const Shop = () => {
    return (
        <div>
            <PageTitle currentPage={'Shop'}></PageTitle>
            <div>
                <BestSellers></BestSellers>
            </div>
        </div>
    );
};

export default Shop;