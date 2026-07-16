import { useQuery } from "@tanstack/react-query";
import HttpService from "@/services/http-service";
import ms from "ms";
import { Platform } from "../entities/Platform";

const platformService = new HttpService<Platform>('/platforms')

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: platformService.getAll,
        keepPreviousData: true,
        staleTime: ms("24h"),
    });
}

export default usePlatforms