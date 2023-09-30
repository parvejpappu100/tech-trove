import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';

const Payment = () => {



    return (
        <div>
            <Helmet>
                <title>Payment | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Payment"}></PageTitle>
        </div>
    );
};

export default Payment;