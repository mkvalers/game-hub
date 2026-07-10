import { useQuery } from "@tanstack/react-query";
import HttpService from "@/services/http-service";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const platformService = new HttpService<Platform>('/platforms')

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: platformService.getAll,
        keepPreviousData: true,
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
    });
}

export default usePlatforms