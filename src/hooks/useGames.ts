import { GameQuery } from '@/layouts/MainLayout';
import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    metacritic: number;
    parent_platforms: {platform: Platform}[]
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: {...gameQuery, genres: gameQuery.genre?.id,
    platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder?.value, search: gameQuery.searchInput
}}, [gameQuery]);

export default useGames;