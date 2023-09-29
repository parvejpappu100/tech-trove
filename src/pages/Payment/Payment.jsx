import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';

const Payment = () => {
    return (
        <div>
            <Helmet>Payment | Tech Trove</Helmet>
            <PageTitle currentPage={"Payment"}></PageTitle>
        </div>
    );
};

export default Payment;