
import { Platform } from './usePlatforms';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import HttpService, { FetchResponse } from '@/services/http-service';
import ms from 'ms';
import useGameQueryStore from './stores/useGameQueryStore';

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[]
}

const gameService = new HttpService<Game>('/games');

const useGames = () => {
    const platform = useGameQueryStore(s => s.gameQuery.platform?.id);
    const genre = useGameQueryStore(s => s.gameQuery.genre?.id);
    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder?.value);
    const search = useGameQueryStore(s => s.gameQuery.searchInput);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', {platform, genre, sortOrder, search}].filter(Boolean),
        queryFn: ({pageParam = 1, signal}) => gameService.getAll({
                            params: {
                                genres: genre,
                                platforms: platform,
                                ordering: sortOrder,
                                search: search,
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