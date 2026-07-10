
import { GameQuery } from '@/layouts/MainLayout';
import { Platform } from './usePlatforms';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '@/services/http-service';
import ms from 'ms';

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
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', {platform: gameQuery.platform?.id, genre: gameQuery.genre?.id, sortOrder: gameQuery.sortOrder?.label, search: gameQuery.searchInput}].filter(Boolean),
        queryFn: ({pageParam = 1, signal}) => gameService.getAll({
                            params: {
                                genres: gameQuery.genre?.id,
                                platforms: gameQuery.platform?.id,
                                ordering: gameQuery.sortOrder?.value,
                                search: gameQuery.searchInput,
                                page: pageParam
                            },
                            signal
                        }),
        staleTime: ms("24h"),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    })
}
export default useGames;