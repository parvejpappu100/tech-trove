import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';

const Wishlist = () => {
    return (
        <div>
            <Helmet>
                <title>Wishlist | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Wishlist"}></PageTitle>
        </div>
    );
};

export default Wishlist;