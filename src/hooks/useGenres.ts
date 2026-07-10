import { useQuery } from "@tanstack/react-query";
import { axiosInstance, FetchResponse } from "@/services/http-service";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: () => axiosInstance
                        .get<FetchResponse<Genre>>('/genres')
                        .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
        keepPreviousData: true
    });
}

export default useGenres