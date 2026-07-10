
import { GameQuery } from '@/layouts/MainLayout';
import { Platform } from './usePlatforms';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance, FetchResponse } from '@/services/http-service';

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[]
}

const useGames = (gameQuery: GameQuery) => {
    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => 
            axiosInstance
                .get<FetchResponse<Game>>('/games', {
                    params: {
                        genres: gameQuery.genre?.id,
                        platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder?.value,
                        search: gameQuery.searchInput
                    }
                })
                .then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
    })
}
export default useGames;