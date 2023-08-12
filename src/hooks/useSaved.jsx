import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useSaved = () => {
    const { user , loading} = useAuth();
    const { data: saved = [] , refetch: refetchSaved} = useQuery({
        queryKey: ["saved" , user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/saved?email=${user?.email}`)
            return response.json();
        }
    });

    return [saved , refetchSaved]

}

export default useSaved;