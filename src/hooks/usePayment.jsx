import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayment = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentData = [], refetch: paymentRefetch } = useQuery({
        queryKey: ["payment-data", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/payment-data/${user?.email}`)
            return response.data;
        }
    });

    return [paymentData, paymentRefetch]
};

export default usePayment;