import { useQuery } from 'react-query'
import useAuth from './useAuth';

const useCart = () => {
    const { user , loading} = useAuth();
    const { data: cart = [] , refetch} = useQuery({
        queryKey: ["carts" , user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json();
        }
    });

    return [cart , refetch]

}

export default useCart;