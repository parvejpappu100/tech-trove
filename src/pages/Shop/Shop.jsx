import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import BestSellers from '../../components/BestSellers/BestSellers';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>Shop | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={'Shop'}></PageTitle>
            <div>
                <BestSellers></BestSellers>
            </div>
        </div>
    );
};

export default Shop;