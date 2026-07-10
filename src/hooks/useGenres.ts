import { useQuery } from "@tanstack/react-query";
import HttpService from "@/services/http-service";

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
        queryFn: () => genreService.getAll(),
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
        keepPreviousData: true,
    });
}

export default useGenres