
import { GameQuery } from '@/layouts/MainLayout';
import { Platform } from './usePlatforms';
import { useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '@/services/http-service';

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[]
}

const gameService = new HttpService<Game>('/games');

const useGames = (gameQuery: GameQuery) => {
    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery.platform?.slug, gameQuery.genre?.slug].filter(Boolean),
        queryFn: () => gameService.getAll({
                            params: {
                                genres: gameQuery.genre?.id,
                                platforms: gameQuery.platform?.id,
                                ordering: gameQuery.sortOrder?.value,
                                search: gameQuery.searchInput
                            }
                        }),
        staleTime: 24 * 60 * 60 * 1000,     //24 Hours
    })
}
export default useGames;