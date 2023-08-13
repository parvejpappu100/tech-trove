import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductsCard from '../ProductsCard/ProductsCard';
import useProduct from '../../hooks/useProduct';
import { useLocation, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import "./BestSellers.css"

const BestSellers = () => {

    const categories = ["product", "Cameras", "Electronics", "Audio", "Computers", "Accessories", "Laptop", "Watches", "Mobile", "Headphone"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [product, loading] = useProduct();

    const location = useLocation();

    const shopPage = location.pathname.includes("shop");

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    const cameras = product.filter(products => products.category === "Cameras");
    const electronics = product.filter(products => products.category === "Electronics");
    const audio = product.filter(products => products.category === "Audio");
    const computers = product.filter(products => products.category === "Computers");
    const accessories = product.filter(products => products.category === "Accessories");
    const laptop = product.filter(products => products.category === "Laptop");
    const watches = product.filter(products => products.category === "Watches");
    const mobile = product.filter(products => products.category === "Mobile");
    const headphone = product.filter(products => products.category === "Headphone");


    const totalCamerasPages = Math.ceil(cameras.length / itemsPerPage);
    const totalElectronicsPages = Math.ceil(electronics.length / itemsPerPage);
    const totalAudioPages = Math.ceil(audio.length / itemsPerPage);
    const totalComputersPages = Math.ceil(computers.length / itemsPerPage);
    const totalAccessoriesPages = Math.ceil(accessories.length / itemsPerPage);
    const totalLaptopPages = Math.ceil(laptop.length / itemsPerPage);
    const totalWatchesPages = Math.ceil(watches.length / itemsPerPage);
    const totalMobilePages = Math.ceil(mobile.length / itemsPerPage);
    const totalHeadphonePages = Math.ceil(headphone.length / itemsPerPage);


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const getItemsForPage = (items, currentPage) => {
        const startIndex = currentPage * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <div className='lg:container mx-auto my-12'>
            {shopPage || <SectionTitle title={"Bestsellers"}></SectionTitle>}
            <div>
                <Tabs defaultIndex={tabIndex == -1 ? 0 : tabIndex} onSelect={(index => setTabIndex(index))}>
                    <div className='text-center text-xl font-semibold'>
                        <TabList>
                            {shopPage && <Tab>All Products</Tab>}
                            <Tab>Cameras</Tab>
                            <Tab>Electronics</Tab>
                            <Tab>Audio</Tab>
                            <Tab>Computers</Tab>
                            <Tab>Accessories</Tab>
                            <Tab>Laptop</Tab>
                            <Tab>Watches</Tab>
                            <Tab>Mobile</Tab>
                            <Tab>Headphone</Tab>
                        </TabList>
                    </div>
                    {loading && <div className='text-center'>
                        <progress className="progress w-56"></progress>
                    </div>}

                    {shopPage && (
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12'>
                                {getItemsForPage(product, currentPage).map((offerProduct) => (
                                    <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                                ))}
                            </div>
                            <div className='flex justify-center'>
                                <ReactPaginate
                                    pageCount={Math.ceil(product.length / itemsPerPage)}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={1}
                                    onPageChange={handlePageChange}
                                    containerClassName={'pagination'}
                                    activeClassName={'active'}
                                />
                            </div>
                        </TabPanel>
                    )}
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12'>
                            {getItemsForPage(cameras, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalCamerasPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(electronics, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalElectronicsPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(audio, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalAudioPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(computers, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalComputersPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(accessories, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalAccessoriesPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(laptop, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalLaptopPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(watches, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalWatchesPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(mobile, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalMobilePages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-12'>
                            {getItemsForPage(headphone, currentPage).map((offerProduct) => (
                                <ProductsCard key={offerProduct._id} product={offerProduct}></ProductsCard>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <ReactPaginate
                                pageCount={totalHeadphonePages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BestSellers;