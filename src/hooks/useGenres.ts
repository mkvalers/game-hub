import { useQuery } from "@tanstack/react-query";
import HttpService from "@/services/http-service";
import ms from 'ms';

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const genreService = new HttpService<Genre>('/genres');

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: genreService.getAll,
        staleTime: ms("24h"),
        keepPreviousData: true,
    });
}

export default useGenres