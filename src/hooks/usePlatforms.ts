import { useQuery } from "@tanstack/react-query";
import { axiosInstance, FetchResponse } from "@/services/http-service";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => axiosInstance
                        .get<FetchResponse<Platform>>('/platforms')
                        .then(res => res.data),
        keepPreviousData: true,
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
    });
}

export default usePlatforms