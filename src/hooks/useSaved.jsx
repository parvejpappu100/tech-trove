import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSaved = () => {
    const { user , loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: saved = [] , refetch: refetchSaved} = useQuery({
        queryKey: ["saved" , user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/saved?email=${user?.email}`)
            return response.data;
        }
    });

    return [saved , refetchSaved]

}

export default useSaved;