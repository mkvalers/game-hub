import { SortOrder } from "@/components/SortSelector";
import { Genre } from "@/entites/Genre";
import { Platform } from "@/entites/Platform";
import { create } from "zustand";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform  | null;
  sortOrder?: SortOrder  | null;
  searchInput?: string  | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setSortOrder: (sortOrder: SortOrder | null) => void;
  setSearchInput: (searchInput: string | null) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenre: (genre?: Genre | null) => set(store => ({
      gameQuery: {
        ...store.gameQuery, genre
      }
    })),
    setPlatform: (platform: Platform | null) => set(store => ({
      gameQuery: {
        ...store.gameQuery, platform
      }
    })),
    setSortOrder: (sortOrder: SortOrder | null) => set(store => ({
      gameQuery: {
        ...store.gameQuery, sortOrder
      }
    })),
    setSearchInput: (searchInput: string | null) => set(store => ({
      gameQuery: {
        ...store.gameQuery, searchInput
      }
    }))
}))

export default useGameQueryStore;