import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog | Tech Trove</title>
            </Helmet>
            <PageTitle currentPage={"Blog"}></PageTitle>
        </div>
    );
};

export default Blog;