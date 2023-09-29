import useCart from "./useCart";


const usePrice = () => {
    const [cart, refetch] = useCart();

    let subTotal = 0;

    for (const product of cart) {
        const productTotal = product.price * product.productQuantity;
        subTotal += productTotal;
    };

    const shipping = subTotal >= 50 ? 0 : 5;
    const vat = subTotal * 10 / 100;
    const payAblePrice = subTotal + shipping + vat;
    return [payAblePrice ,subTotal , shipping , vat];

};

export default usePrice;