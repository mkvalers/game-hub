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

const useGames = (selectedPlatform: Platform | null, selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id,
    platforms: selectedPlatform?.id
}}, [selectedGenre, selectedPlatform]);

export default useGames;