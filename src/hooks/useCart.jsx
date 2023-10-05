import { useQuery } from 'react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user , loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: cart = [] , refetch} = useQuery({
        queryKey: ["carts" , user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data;
        }
    });

    return [cart , refetch]

}

export default useCart;