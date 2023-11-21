import React from 'react';

const OrderChart = ({ paymentData }) => {

    const cameras = paymentData?.cart?.filter(product => product?.category == "Cameras");
    const electronics = paymentData?.cart?.filter(product => product?.category == "Electronics");
    const audio = paymentData?.cart?.filter(product => product?.category == "Audio");
    const computers = paymentData?.cart?.filter(product => product?.category == "Computers");
    const accessories = paymentData?.cart?.filter(product => product?.category == "Accessories");
    const laptop = paymentData?.cart?.filter(product => product?.category == "Laptop");
    const watches = paymentData?.cart?.filter(product => product?.category == "Watches");
    const mobile = paymentData?.cart?.filter(product => product?.category == "Mobile");
    const headphone = paymentData?.cart?.filter(product => product?.category == "Headphone");

    // console.log(cameras.length, electronics, audio);
    // installed pie chart and go to this link: https://recharts.org/en-US/examples/PieChartWithCustomizedLabel 

    return (
        <div>

        </div>
    );
};

export default OrderChart;