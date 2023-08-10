import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Dashboard"}></PageTitle>
        </div>
    );
};

export default Dashboard;