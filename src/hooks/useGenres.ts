import { useQuery } from "@tanstack/react-query";
import HttpService from "@/services/http-service";
import ms from 'ms';
import { Genre } from "../entites/Genre";

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